import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Alan', 10)
// peopleAccount.deposit()
console.log(peopleAccount)
peopleAccount.setName('Alan Rocha')

console.log(peopleAccount)
console.log(peopleAccount.getName())


// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// console.log(companyAccount.deposit())
