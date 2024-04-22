import inquirer from "inquirer";
let randomNumber = Math.floor((Math.random() * 4) + 1);
let userinput = await inquirer.prompt([
    {
        type: "number",
        name: "guessnumber",
        message: "Enter the number between (1 to 4):"
    }
]);
if (userinput.guessnumber === randomNumber) {
    console.log(`Congratulations!You guessed correctly`);
}
else {
    console.log(`Sorry!Try next time,correct answer is ${randomNumber}`);
}
