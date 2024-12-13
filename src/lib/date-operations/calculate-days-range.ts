export const offlineDuration = (startDate: Date, endDate: Date) => {
  const today = new Date()
  const start = new Date(startDate)
  const end = new Date(endDate)

  // Normalize dates to remove time components
  today.setHours(0, 0, 0, 0)
  start.setHours(0, 0, 0, 0)
  end.setHours(0, 0, 0, 0)

  // Case 1: Start is today
  if (today.toDateString() === start.toDateString()) {
    if (today.toDateString() === end.toDateString()) {
      return 'Today'
    } else {
      return `Today - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
    }
  }
  // Case 2: Start is tomorrow
  else if (today.getTime() + 24 * 60 * 60 * 1000 === start.getTime()) {
    if (today.getTime() + 24 * 60 * 60 * 1000 === end.getTime()) {
      return 'Tomorrow'
    } else {
      return `Tomorrow - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
    }
  }
  // Case 3: Start is in the future
  else if (start > today) {
    // If end is same as start, return just the start date
    if (start.toDateString() === end.toDateString()) {
      return start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }
    // Otherwise, return date range
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
  }
  // Fallback: If none of the above conditions match, return full date range
  return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
}
