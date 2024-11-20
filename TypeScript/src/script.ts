interface User {
  name : string
  age : number
  address : string
  isAdmin : boolean
}

type UserType = keyof User;

const useDetail : UserType = "address"
