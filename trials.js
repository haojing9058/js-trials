// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([['home', '510-867-5309'], 
                            ['mobile', '415-555-1212'], 
                            ['business', '415-123-4567']
    ]);

// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printAccountInfo(name, number, businessName) {
    console.log('Account Holder Name: ' + name);
    console.log('Account Holder Number: ' + number);
    console.log('Business Name: ' + businessName);
}

// Add function to print all addresses, including a header
function showAddresses(addresses) {
    console.log("Addresses:");
    for (let address of addresses){
        console.log(`${address}.`);
    }
}

// Add function to print phone types and numbers
function showPhones(phoneNumbers) {
    console.log("Phone Numbers:");
    for (let number of phoneNumbers){
        console.log(`${number}`);
    }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create a map of transactions
let transactions = new Map([
    ['May-2', -500],
    ['may-13', +1200],
    ['May-15', -100],
    ['May-21', -359],
    ['May-29', +2200]
    ]);

// Add function to add transactions
function addTransaction(date, amount) {
    transactions.set(date, amount);
}

// Add function to show balance status
function showBalanceStatus(balance){
    if(balance < 0){
        console.log("YOU ARE OVERDRAWN");
    }
    else if (balance > 0 && balance < 20){
        console.log("Warning: You are close to zero balance");
    }
    else {
        console.log("Thank you for your business");
    }
}

// Add function to show transactions
function showTransactions(transactions, balance){
    console.log(`Your balance is ${balance}.`);

    for (let transaction of transactions){
        console.log(`The transaction date is ${transaction[0]}.`);
        if (transaction[1] < 0){
            console.log("The transaction type is withdrawal")
        } else if (transaction[1] >0){
            console.log("The transaction type is deposit")
        }

        console.log(`${transaction[1]}`);

        balance += transaction[1];

        console.log(`New Balance is ${balance}`);
    }

    if (balance > 0){
    console.log(`Final balance is ${balance}`);

    } else if (balance < 0) {
        balance += -25;
        console.log(`Your account has been charged $25. Final balance is $${balance}`);
    }
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info


// Function to add customer attributes


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours






