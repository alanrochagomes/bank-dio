import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Alan', 10)
console.log(peopleAccount)
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit()
console.log(companyAccount)