#! /usr/bin/env node
import inquirer from "inquirer";
const currency:any = {
  KWD: 1, //Base currency (kuwaiti dinar)
  USD: 3.26 ,
  EUR: 3.00 ,
  INR: 271.36,
  PKR: 904.16,
};

let userAnswer = await inquirer.prompt([
  {
    name: "currency",
    message: "Convert currency from ",
    type: "list",
    choices: ["KWD", "USD", "EUR", "INR", "PKR"],
  },
  {
    name: "currency2",
    message: "Convert currency to " ,
    type: "list",
    choices: ["KWD", "USD", "EUR", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter amount you want to convert", 
    type: "number",
  }
]);

let fromAmount = currency[userAnswer.currency];
let toAmount = currency[userAnswer.currency2];
let amount = userAnswer.amount; 
let baseConvert = amount / fromAmount;
let convertAmount = baseConvert * toAmount ;
console.log(convertAmount);
