interface UserDetails {
    name: string;
    age: number;
}

type MyOmit<T, K extends  keyof T> = {
   [P in Exclude<keyof T, K>]: T[P]
}

type Test = MyOmit<UserDetails, 'name'>;