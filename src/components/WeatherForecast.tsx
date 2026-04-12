'use client'

import { useEffect, useState } from 'react'

interface DayForecast {
  date: string
  weathercode: number
  tempMax: number
  tempMin: number
  rainChance: number
}

interface OpenMeteoResponse {
  daily: {
    time: string[]
    weathercode: number[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    precipitation_probability_max: number[]
  }
}

function wmoToEmoji(code: number): { emoji: string; label: string } {
  if (code === 0) return { emoji: '☀️', label: 'Clear' }
  if (code <= 2) return { emoji: '🌤', label: 'Mostly Clear' }
  if (code === 3) return { emoji: '☁️', label: 'Overcast' }
  if (code <= 48) return { emoji: '🌫', label: 'Foggy' }
  if (code <= 67) return { emoji: '🌧', label: 'Rain' }
  if (code <= 77) return { emoji: '❄️', label: 'Snow' }
  if (code <= 82) return { emoji: '🌦', label: 'Showers' }
  if (code <= 99) return { emoji: '⛈', label: 'Thunderstorm' }
  return { emoji: '🌡', label: 'Unknown' }
}

function dayLabel(dateStr: string, index: number): string {
  if (index === 0) return 'Today'
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-AU', { weekday: 'short' })
}

export default function WeatherForecast() {
  const [forecast, setForecast] = useState<DayForecast[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=-32.7266&longitude=152.1737&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Australia/Sydney&forecast_days=5'
    )
      .then((res) => res.json())
      .then((data: OpenMeteoResponse) => {
        const days: DayForecast[] = data.daily.time.map((time, i) => ({
          date: time,
          weathercode: data.daily.weathercode[i],
          tempMax: Math.round(data.daily.temperature_2m_max[i]),
          tempMin: Math.round(data.daily.temperature_2m_min[i]),
          rainChance: data.daily.precipitation_probability_max[i],
        }))
        setForecast(days)
      })
      .catch(() => setError(true))
  }, [])

  return (
    <section className="bg-warm-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-baseline justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-deep-sage">
            Shoal Bay, NSW
          </p>
          <p className="text-xs text-muted">
            Weather by{' '}
            <a
              href="https://open-meteo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-bark"
            >
              Open-Meteo
            </a>
          </p>
        </div>

        {error ? (
          <p className="text-center text-sm text-muted py-4">Weather unavailable</p>
        ) : !forecast ? (
          /* Loading skeleton */
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-xl border border-warm-tan/20 bg-cream/50 p-4"
              >
                <div className="mx-auto mb-2 h-3 w-12 rounded bg-warm-tan/30" />
                <div className="mx-auto mb-3 h-8 w-8 rounded-full bg-warm-tan/20" />
                <div className="mx-auto mb-1 h-4 w-10 rounded bg-warm-tan/30" />
                <div className="mx-auto h-3 w-8 rounded bg-warm-tan/20" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-3">
            {forecast.map((day, i) => {
              const { emoji, label } = wmoToEmoji(day.weathercode)
              return (
                <div
                  key={day.date}
                  className="flex flex-col items-center rounded-xl border border-warm-tan/20 bg-cream/50 px-2 py-4 text-center"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    {dayLabel(day.date, i)}
                  </p>
                  <span
                    className="mt-2 text-3xl leading-none"
                    role="img"
                    aria-label={label}
                  >
                    {emoji}
                  </span>
                  <p className="mt-2 text-sm font-bold text-bark">
                    {day.tempMax}°
                    <span className="ml-1 font-normal text-muted">
                      {day.tempMin}°
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-deep-sage">
                    {day.rainChance}% rain
                  </p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
