import {resolve} from 'path'
import {readFileSync} from "fs";
import {makeExecutableSchema} from "@graphql-tools/schema";
import {ApolloServer} from "@apollo/server";

const planetsDataPath = resolve('server/data/planets.json')
const planetsData = JSON.parse(readFileSync(planetsDataPath, 'utf-8'))

const typeDefs = `
  type Content {
    content: String!
    source: String!
  }
  
  type Image {
    planet: String!
    internal: String!
    geology: String!
  }
  
  type Color {
    menu: String!
    accent: String!
  }
  
  type Planets {
    id: ID!
    slug: String!
    name: String!
    colors: Color
  }
  
  type Planet {
    id: ID!
    slug: String!
    name: String!
    overview: Content
    structure: Content
    geology: Content
    rotation: String!
    revolution: String!
    radius: String!
    temperature: String!
    images: Image
    colors: Color
  }
  
  type Query {
    planets: [Planets]
    planet(id: ID!): Planet
  }
`

const resolvers = {
  Query: {
    planets: () => planetsData, planet: (_, {id}) => planetsData.find(planet => planet.id === id)
  }
}

const schema = makeExecutableSchema({
  typeDefs, resolvers
})

let apolloServer = null

export default defineEventHandler(async (event) => {
  if (!apolloServer) {
    apolloServer = new ApolloServer({schema});
    await apolloServer.start();
  }

  const res = event.node.res;
  const body = await readBody(event);

  const {query, variables, operationName} = body;

  // Ensure the query is not empty
  if (!query) {
    return {
      statusCode: 400, body: JSON.stringify({
        errors: [{
          message: 'GraphQL operations must contain a non-empty query or a persistedQuery extension.',
        },],
      }),
    };
  }

  const result = await apolloServer.executeOperation({
    query, variables, operationName,
  });

  res.setHeader('Content-Type', 'application/json');

  return result.body.singleResult || null;
});
