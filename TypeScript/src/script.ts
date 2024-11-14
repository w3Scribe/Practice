interface UserUpdate {
  name: string
  age: number
  lastUpate: Date
  timestamps: {
    curruntDate: Date
  }
}

type Replace<T, Search, Type> =
  T extends Search ? Type : T extends object ? {
    [K in keyof T]: Replace<T[K], Search, Type> 
  } : T

type NewUser = Replace<UserUpdate, Date, string>

const User: Replace<UserUpdate, Date, string> = {
  name: 'John',
  age: 30,
  lastUpate: '2021-09-10',
  timestamps: {
    curruntDate: '2021-09-10'
  }
}