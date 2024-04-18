#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bgBlue("\n\tWelcome to Word Counter App \n"));

const answers: {Sentence: string;} = await inquirer.prompt (
[
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]
)

const words = answers.Sentence.trim().split(" ")

//print the array of words to the console
console.log(chalk.green(words))

//print the word count of the sentence to the console
console.log(chalk.yellow(`Your sentence word count is ${words.length}`));