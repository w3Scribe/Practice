// omit, partial, readonly, 


interface User {
  name : string
  age : number
  address : string
}

type UserGuest = Partial<User>