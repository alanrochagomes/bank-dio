import { CompanyAccount } from './class/companyaccount';
import { PeopleAccount } from './class/PeopleAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Alan', 10)
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.deposit())

