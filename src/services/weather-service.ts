import { APP_ID } from 'constants/env'
import { API_WEATHER_QUERY } from 'constants/urls'
import { FetchService } from './fetch-service'

export const WeatherService = {
  getByCityAndState: async (cityAndState: string) => {
    const url = `${API_WEATHER_QUERY}${cityAndState}&units=metric&appid=${APP_ID}`
    const data = await FetchService.call(url)

    return data
  },
}
