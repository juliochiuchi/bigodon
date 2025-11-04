import { IDateAvailable } from "@/types/date-available"

export function dateAvailable(): IDateAvailable[] {
  const today = new Date()
  const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)

  const list = Array.from({ length: 21 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + i)

    const dayNumber = String(d.getDate())

    const dayName =
      i === 0
        ? 'Hoje'
        : capitalize(
          new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })
            .format(d)
            .split('-')[0] // ex.: "segunda-feira" -> "segunda"
        )

    const monthName = capitalize(
      new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(d)
    )

    return { dayName, monthName, dayNumber }
  })

  return list
}
