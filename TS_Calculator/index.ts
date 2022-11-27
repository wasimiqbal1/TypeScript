#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep =()=>{
    return new Promise ((res)=>{
        setTimeout(res,1000);
    })
}

async function Welcome() {
    let calcTitle = chalkAnimation.rainbow('Let Start Calculation using TS & NodeJS'); //Start Animation
    await sleep();
    calcTitle.stop();
    console.log(chalk.blueBright(` 
    
     _____________________
    |  _________________  |
    | |              0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    
    `));
}

await Welcome();

async function askQuestion() {

     const answers =  await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"list",
        name:"Operator",
        message:"Which Operation you want to perform ?",
        choices:["Addition","Substraction","Multiplication","Division"]
    },
    {
        type:"number",
        name:"num1",
        message:"Enter number 1 :"
    }
    ,
    {
        type:"number",
        name:"num2",
        message:"Enter number 2 :"
    }
 ]);
  
    if (answers.Operator=="Addition"){
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if(answers.Operator=="Substraction"){
        console.log(chalk.red(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if(answers.Operator=="Multiplication"){
        console.log(chalk.blueBright(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if(answers.Operator=="Division"){
        console.log(chalk.redBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
};

async function startAgain() {
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message: "Do you want to countinue ?  Press Y or N:"
        })
    }while (again.restart=="Y"|| again.restart=="y"|| again.restart=="YES"||again.restart=="yes")
    
}

startAgain();
