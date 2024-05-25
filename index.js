import chalk from "chalk";
import inquirer from "inquirer";
//generate random 5 digit number
const randoNumber = Math.floor(10000 + Math.random() * 9000);
let myBalance = 0;
let anwer = await inquirer.prompt([{
        name: "student",
        type: "input",
        message: chalk.bold.greenBright("Enter student name"),
        //for valid anwer
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return chalk.bold.blue("please enter valid number");
        }
    }, {
        name: "courses",
        type: "list",
        message: chalk.bold.greenBright("select the course to enroll"),
        choices: ["javascript", "typescript", "java", "html"]
    }
]);
const tutionFees = {
    "javascript": 3000,
    "typescript": 6000,
    "java": 2000,
    "html": 7000,
};
console.log(chalk.bold.blue(`your tution fee is ${chalk.bold.bgGreenBright(tutionFees[anwer.courses])}`));
console.log(chalk.bold.blue(`your balance is ${myBalance}`));
const paymenttype = await inquirer.prompt([{
        name: "payment",
        type: "list",
        message: chalk.bold.green("select payment method"),
        choices: ["easypaisa", "jazzcash", "banktransfer"],
    }, {
        name: "amount",
        type: "input",
        message: chalk.bold.green("transfer money"),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return chalk.bold.green("pease enter a valid number");
        }
    }
]);
console.log(chalk.bold.blue(`you select payment method ${chalk.bold.green(paymenttype.payment)}`));
let tutionFee = tutionFees[anwer.courses];
let paymentAmount = parseFloat(paymenttype.amount);
if (tutionFee == paymentAmount) {
    console.log(chalk.bold.blue(`congratulations you have sucessfully enrolled in${anwer.courses}`));
    const ask = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: chalk.bold.green("what would you like to do next"),
            choices: ["exit", "viewstatus"]
        }]);
    if (ask.select === "viewstatus") {
        console.log(chalk.bold.blue("\n*******status*******\n"));
        console.log(chalk.bold.blue(`student name:${chalk.bold.green(anwer.student)}`));
        console.log(chalk.bold.blue(`student ID:${chalk.bold.green(randoNumber)}`));
        console.log(chalk.bold.blue(`course ${chalk.bold.green(anwer.courses)}`));
        console.log(chalk.bold.blue(`Tution fee paid ${chalk.bold.green(paymenttype.amount)}`));
        console.log(chalk.bold.blue(`Balance ${chalk.bold.green(myBalance += paymenttype.amount)}`));
    }
    else {
        console.log(chalk.bold.green("exit student management system"));
    }
}
else {
    console.log(chalk.bold.blue("invalid amount"));
}
