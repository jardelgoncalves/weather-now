import React from 'react'
import { BaseLayout } from 'components/layout/BaseLayout'
import { CardWeather } from 'components/ui/CardWeather'

import { useWeatherQuery } from 'hooks/use-weather-query'
import styes from './Home.module.scss'

export function HomePage() {
  const nuukGL = useWeatherQuery('nuuk,GL')
  const urubiciBR = useWeatherQuery('urubici,BR')
  const nairobiKE = useWeatherQuery('nairobi,KE')

  return (
    <BaseLayout>
      <section className={styes.container}>
        <CardWeather
          isLoading={nuukGL.isLoading}
          title="Nuuk, GL"
          temp={nuukGL.data?.temp}
          pressure={nuukGL.data?.pressure}
          humidity={nuukGL.data?.humidity}
          isError={!!nuukGL.isError}
          lastUpdate={nuukGL?.data?.lastUpdated}
          onClick={nuukGL.refetch}
        />
        <CardWeather
          isLoading={urubiciBR.isLoading}
          title="Urubici, BR"
          temp={urubiciBR.data?.temp}
          pressure={urubiciBR.data?.pressure}
          humidity={urubiciBR.data?.humidity}
          isError={!!urubiciBR.isError}
          lastUpdate={urubiciBR?.data?.lastUpdated}
          onClick={urubiciBR.refetch}
        />
        <CardWeather
          isLoading={nairobiKE.isLoading}
          title="Nairobi, KE"
          temp={nairobiKE.data?.temp}
          pressure={nairobiKE.data?.pressure}
          humidity={nairobiKE.data?.humidity}
          isError={!!nairobiKE.isError}
          lastUpdate={nairobiKE?.data?.lastUpdated}
          onClick={nairobiKE.refetch}
        />
      </section>
    </BaseLayout>
  )
}
