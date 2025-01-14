import {gql} from "@apollo/client/core";

export const usePlanets = () => {
  const PLANETS_QUERY = gql`
      query GetPlanets {
          planets {
              id
              slug
              name
          }
      }
  `;

  const PLANET_QUERY = gql`
      query GetPlanet($id: ID!) {
          planet(id: $id) {
              id
              slug
              name
              structure {
                  content
                  source
              }
              overview {
                  content
                  source
              }
              geology {
                  content
                  source
              }
              rotation
              revolution
              radius
              temperature
              images {
                  planet
                  internal
                  geology
              }
          }
      }
  `;

  const fetchPlanets = async (apolloClient: any) => {
    const {data} = await apolloClient.query({
      query: PLANETS_QUERY
    });
    console.log(data);
    return data.planets;
  }

  const fetchPlanetById = async (apolloClient: any, id: string) => {
    const {data} = await apolloClient.query({
      query: PLANET_QUERY,
      variables: {id}
    })

    return data.planet;
  }

  return {
    fetchPlanets,
    fetchPlanetById
  }

}