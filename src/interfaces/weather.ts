export interface Clouds {
  all: number
}

export interface Coord {
  lon: number
  lat: number
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface Snow {
  '1h': number
}

export interface Sys {
  country: string
  sunrise: number
  sunset: number
}

export interface WeatherElement {
  id: number
  main: string
  description: string
  icon: string
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface WeatherType {
  coord: Coord
  weather: WeatherElement[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  snow: Snow
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}