/*

This is a banking application. This program will update your balance with your deposits and withdrawls.

-	Create 3 variables: balance, transaction, and amount.
-	The starting account balance is 1000$.
-	Ask for their transaction type (deposit, withdrawl).
-	Ask for the amount to withdraw or deposit.
-	Depending on their transaction choice either add or substract the balance. 
-	Print the new balance to the console.
*/

var balance = 1000;
var transaction;
var amount;

while (transaction != 'q') {

transaction = prompt('(d)eposit or (w)ithdrawal or (q)uit?');



if (transaction == 'd') {
	amount = parseInt(prompt('How much?'));
	balance = balance + amount;
	console.log('Your new balance is: $' + balance);
	
	} else if (transaction == 'w') {
	amount = parseInt(prompt('How much?'));
	balance = balance - amount;
	console.log('Your new balance is: $' + balance);
	
	} else if (transaction == 'q') {
	console.log('Thanks for using the atm!')
	console.log('Your new balance is: $' + balance);

	} else {
	console.log('error on input');
	}
}
