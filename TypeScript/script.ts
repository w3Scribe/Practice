interface BankAccountProps {
  name: string;
  balance: number;
  this : 
}

type TBankAccount = {
  new (name: string, number: number): BankAccountProps;
};

const BankAccount: TBankAccount = function ({
  name,
  balance,
}: BankAccountProps) {
  

} as unknown as TBankAccount;
