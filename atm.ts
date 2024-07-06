import inquirer from "inquirer"
let user1_current_Balance:number = 0;

const newAccount1 = await inquirer.prompt([

    {
name : "setPin",
type: "password",
message: "Create your pin",
validate: (input: string) => {
    if (input.length !== 4) {
      return "Pin must be exactly 4 digits";
    }
    return true;
  },
    }
    
])
console.log(`Your Pin Has Been Set`);

const useAccount1 = await inquirer.prompt([{
   name : "enterPin",
   type : "password",
   message : "Enter your pin",
}])

    for (let i = 3; i > 0; i--) {
        console.log(`Verifying your PIN Code: ${i}`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // wait 1 second
      }
if (newAccount1.setPin === useAccount1.enterPin) {
    console.log("You accessed your account");
}
if(newAccount1.setPin !== useAccount1.enterPin){
    console.log("Invalid pin code");

}
while(true){
let process = await inquirer.prompt([{
name : "options",
type: "list",
choices: ["deposit", "Withdraw", "Check Balance", "Exit"],
}])

switch(process.options){
    case "deposit":
    let deposit = await inquirer.prompt([{
        name : "depositAmount",
        type:"number",
        message: "How much would you like to deposit?",
        
    }]);
    user1_current_Balance += deposit.depositAmount;
    console.log(`Your amount ${deposit.depositAmount} has been successfully deposited in your account `);
    break;
    case "Withdraw":
        let withdraw = await inquirer.prompt([{
name: "withdraw",
type: "number",
message: "How much would you like to withdraw?",
        }])
if (withdraw.withdraw > user1_current_Balance){
    console.log(`Your balance is not sufficient for this withdraw`);
}else{
    user1_current_Balance -= withdraw.withdraw;
console.log(`You have successfully withdrawl ${withdraw.withdraw}`);

}
break;
case "Check Balance":
    console.log(`Your current balance is ${user1_current_Balance}`);
    break;
    case "Exit":
        console.log("Thank you for using our services...");
    
process.Exit(0)
    }}
