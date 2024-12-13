const calculateDifference = (date: Date) => {
  const today = new Date()
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const startOfDeadline = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  return startOfDeadline.getTime() - startOfToday.getTime()
}

export const remainingDays = (deadline: Date) => {
  const diff = calculateDifference(deadline)

  if (diff === 0) return 'Today'
  if (diff < 0) return 'Overdue!'

  // Calculate the remaining days
  const days = diff / (1000 * 60 * 60 * 24)
  return `${days} days left`
}

export const remainingDaysExpended = (deadline: Date) => {
  const diff = calculateDifference(deadline)
  if (diff === 0) return 'Today'

  // Calculate days difference
  const days = Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24)))

  // Handling future and past dates
  if (diff > 0) {
    return `${days} days left`
  } else {
    // Past dates
    switch (days) {
      case 0:
        return 'Today'
      case 1:
        return 'Yesterday'
      case 2:
        return '2 days ago'
      case 3:
        return '3 days ago'
      case 4:
        return '4 days ago'
      case 5:
        return '5 days ago'
      case 6:
        return '6 days ago'
      case 7:
        return '1 week ago'
      default:
        return days < 30
          ? `${Math.floor(days)} days ago`
          : days < 365
            ? `${Math.floor(days / 30)} months ago`
            : `${Math.floor(days / 365)} years ago`
    }
  }
}
