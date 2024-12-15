interface IUser {
  name: string
  age: number
  country: string
  role ?: string
}

type PickProp<T extends object, K extends keyof T> = {
  [Props in K] : T[Props]
}

type Test = PickProp<IUser, "name">
