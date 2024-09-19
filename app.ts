class Account {
  name: string
  accountNumber: number

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = () => {
    console.log('Voce depositou')
  }

  withdraw = () => {
    console.log('voce sacou')
  }
}

const newwAccount: Account = new Account('Alan', 1)
console.log(newwAccount)

const account: Account = new Account('user', 2)
account.deposit()