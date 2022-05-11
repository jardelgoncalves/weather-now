import React, { useMemo } from 'react'
import styles from './styles.module.scss'

type CardWeatherProps = {
  title: string
  temp?: number
  pressure?: number
  humidity?: number
  lastUpdate?: string
  isLoading?: boolean
  isError?: boolean
  onClick?: () => void
}

function CardWeather({
  title,
  temp,
  pressure,
  humidity,
  lastUpdate,
  isError,
  isLoading,
  onClick,
}: CardWeatherProps) {
  const temperatureClassColor = useMemo(() => {
    if (!temp || temp <= 5) return styles.blueColor

    return temp <= 25 ? styles.orangeColor : styles.redColor
  }, [temp])

  return (
    <div className={`${styles.container}`}>
      <h2 className={styles.cityHeader}>{title}</h2>
      {!isError && !isLoading && (
        <>
          <h3
            className={`${styles.temperatureContent} ${temperatureClassColor}`}
          >
            {temp}º
          </h3>
          <div className={styles.footer}>
            <div className={styles.footerDetails}>
              <h4>
                <span>HUMIDITY</span>
                <strong>{humidity}%</strong>
              </h4>
              <h4>
                <span>PRESSURE</span>
                <strong>
                  {pressure}
                  <small>hPA</small>
                </strong>
              </h4>
            </div>
            <time className={styles.footerUpdatedAt}>
              Updated at {lastUpdate}
            </time>
          </div>
        </>
      )}

      {isError && (
        <div className={styles.errorContainer}>
          <p className={styles.messageError}>Something went wrong</p>
          <button onClick={onClick} type="button" className={styles.btnRetry}>
            Try Again
          </button>
        </div>
      )}

      {isLoading && !isError && (
        <div aria-label="Loading" className={styles.loading} />
      )}
    </div>
  )
}

export { CardWeather }
