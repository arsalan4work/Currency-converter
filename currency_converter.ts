#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";

// This is a CLI based Currency Converter

console.log(chalk.italic.redBright("Welcome to Arsalan Currency Exchange"))

const currency: any = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    AED: 3.67,
    SAR: 3.75
};

let userAnswer = await inquirer.prompt(
    [
        {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'AED', 'SAR']

        },
        {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'AED', 'SAR']

        },
        {
        name: "final_amount",
        message: "Enter Your Amount",
        type: "number"

        },
    ]
)

let fromAmount = currency [userAnswer.from] // Exchange Rate
let toAmount = currency [userAnswer.to] // Exchange Rate
let amount = userAnswer.final_amount
let baseAmount = amount / fromAmount // User base Currency $
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)