export const getBirthdayDate = (date: Date) => {
  const today = new Date()
  const birthday = new Date(date)
  if (today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth()) {
    return 'Today'
  } else if (
    today.getDate() + 1 === birthday.getDate() &&
    today.getMonth() === birthday.getMonth()
  ) {
    return 'Tomorrow'
  } else {
    return `${birthday.toLocaleString('default', { month: 'short' })} ${birthday.getDate()}`
  }
}
