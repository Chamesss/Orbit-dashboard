const offlineUsers: OfflineUser[] = [
  {
    id: '1',
    firstname: 'Dianna',
    lastname: 'Haag',
    picture: '',
    startDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    reason: 'Medical leave'
  },
  {
    id: '2',
    firstname: 'Gregg',
    lastname: 'Stoltenberg',
    picture: '',
    startDate: new Date('2024-10-11'),
    endDate: new Date('2024-12-11'),
    reason: 'Personal leave'
  },
  {
    id: '3',
    firstname: 'Felipe',
    lastname: 'Stoltenberg',
    picture: '',
    startDate: new Date('2024-10-11'),
    endDate: new Date('2024-10-21'),
    reason: 'Personal leave'
  },
  {
    id: '4',
    firstname: 'Velma',
    lastname: 'Tillman',
    picture: '',
    startDate: new Date('2024-10-01'),
    endDate: new Date('2025-02-12'),
    reason: 'Parental leave'
  },
  {
    id: '5',
    firstname: 'Nicole',
    lastname: 'Schroeder',
    picture: '',
    startDate: new Date(),
    endDate: new Date(),
    reason: 'Medical leave'
  }
]

export const offlineUsersResponse: OfflineUserResponse = {
  data: offlineUsers,
  total: 11
}
