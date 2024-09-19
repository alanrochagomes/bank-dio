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

class Admin extends Account {
 balance: number

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
    this.balance = 20
  }

  getBalance= () => {
    console.log(this.balance)
  }
}

const adminAccount: Admin = new Admin('Alan', 1)
console.log(adminAccount)

const account: Account = new Account('user', 2)
console.log(account)