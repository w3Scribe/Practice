interface IUserInfo {
  name: string;
  age: number;
  addrress: string;
}

type MyPick<T, K extends keyof T> = {
  [Props in K] : T[Props];
}

type MyUserInfo = MyPick<IUserInfo, "addrress" | "name">;

const userInfo: MyUserInfo = {
  name: "Jack",
  addrress: "Seoul"
}