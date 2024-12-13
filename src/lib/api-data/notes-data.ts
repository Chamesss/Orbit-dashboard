export const fetchedNotes: Notes[] = [
  {
    id: '1',
    title: 'Meeting with experience manager',
    description: 'Subject: how to improve the overall experience of the application.',
    date: new Date(),
    keywords: ['meeting'],
    done: false
  },
  {
    id: '2',
    title: 'Manage new employees data',
    description: 'Due to delay, it needs to be done as soon as possible.',
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    keywords: ['note', 'second'],
    done: true
  }
]
