#! /usr/bin/env node
import inquirer from "inquirer";

import { basename } from "path";
const currency : any = {
    USD : 1,
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280,
    AUD : 1.52,
    CAD : 1.36, 
    TRY : 32.03,
    IRR : 42,
    GER : 0.92,
    SAR : 3.75,
    AED : 3.67
};


let answer = await inquirer.prompt([
  {
     name : "from",
   message : "Enter from currency to convert",
   type : "list",
   choices : [`USD`,`EUR`,`GBP`,`INR`,`PKR`,`AUD`,`CAD`,`TRY`,`IRR`,`GER`,`SAR`,`AED`]
},
{
    name : "to",
    message : "Enter to currency to convert",
    type : "list",
    choices :  [`USD`,`EUR`,`GBP`,`INR`,`PKR`,`AUD`,`CAD`,`TRY`,`IRR`,`GER`,`SAR`,`AED`]
}, 
{
    name : "amount",
    message : "Enter amount?",
    type : "number"

}
]);
let fromAmount = currency [answer.from]; //user from amount.
let toAmount = currency [answer.to]; // user input to amount.
let amount = answer.amount; // How much currency amount user want to convert!
let baseAmount = amount /fromAmount; // USD based currency
let convertedAmount = baseAmount * toAmount; // Result after conversion of currency
//console.log(convertedAmount);

console.log(fromAmount);
console.log(toAmount);
console.log(amount);
//console.log(Math.round(convertedAmount*100)/100);

