export function HourAvailable() {
  const startHour = 7
  const endHour = 19
  const intervalMinutes = 20

  const hours: string[] = []
  let currentMinutes = startHour * 60
  const endMinutes = endHour * 60

  while (currentMinutes <= endMinutes) {
    const h = Math.floor(currentMinutes / 60)
    const m = currentMinutes % 60
    hours.push(`${h}:${String(m).padStart(2, '0')}`)
    currentMinutes += intervalMinutes
  }

  return hours
}
