import { WeatherType } from 'interfaces/weather'
import { useQuery } from 'react-query'
import { WeatherService } from 'services/weather-service'
import { formatter } from 'utils/formatter'

const transformData = (data: WeatherType, lastUpdated: number) => {
  if (data?.cod !== 200) return null

  return {
    temp: Math.round(data.main.temp),
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    title: `${data.name}, ${data.sys.country}`,
    lastUpdated: formatter.lastUpdated(lastUpdated),
  }
}

export function useWeatherQuery(cityAndState: string) {
  const {
    isError,
    isLoading,
    isFetching,
    isRefetching,
    data,
    refetch,
    dataUpdatedAt,
  } = useQuery(
    cityAndState,
    () => WeatherService.getByCityAndState(cityAndState),
    {
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 10, // 10 minutes
      refetchInterval: 1000 * 60 * 10, // 10 minutes
    }
  )

  return {
    isError: isError || (data?.cod && data?.cod !== 200),
    isLoading: isLoading || isFetching || isRefetching,
    data: transformData(data, dataUpdatedAt),
    refetch,
  }
}
