declare type PlanetSummery = {
  id: string
  slug: string
  name: string
  colors:
    {
      menu: string
      accent: string
    }
}

declare type Planet = {
  id: string
  slug: string
  name: string
  structure: {
    content: string
    source: string
  }
  overview: {
    content: string
    source: string
  }
  geology: {
    content: string
    source: string
  }
  rotation: string
  revolution: string
  radius: string
  temperature: string
  images: {
    planet: string
    internal: string
    geology: string
  }
  colors: {
    menu: string
    accent: string
  }
}