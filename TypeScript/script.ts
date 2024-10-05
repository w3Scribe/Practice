interface BankAccountProperties {
  name: string;
  balance: number;
  deposit: (amount: number) => void;
  widthdraw: (amount: number) => void;
  getBalDetails: () => number;
}

type TBankAccount = {
  new (name: string, balance: number): BankAccountProperties;
};

const BankAccount: TBankAccount = function (
  name: string,
  balance: number
) {

  this.name = name;
  

} as unknown as TBankAccount;
