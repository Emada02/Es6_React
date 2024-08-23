// Convert the function to withdraw money to Es6 syntax
withdraw = (person, amount) => {
     amount > person.balance ? console.log("The withdrawal cannot be processed due to insufficient funds."):
     (person.balance -= amount, console.log(`Withdrawal successful. Your balance now is: ${person.balance}ALL.`))
 }
 let person = {
     firstname: "Emada",
     lastname: "Nipolli",
     ID: 123456,
     balance: 4000
 };

 console.log("Your balance activity:")
 withdraw(person, 1000);
 withdraw(person, 60000); 
