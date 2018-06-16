// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');
// console.log(phoneNumbers);

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function displayAccount(name, number, businessName){
    console.log(`account holder name: ${name}`);
    console.log("Account Holder NUmber:", number);
    console.log('Business Name:', businessName);
}

displayAccount(accountHolder, accountNumber, businessName);

// Add function to print all addresses, including a header
function showAddresses(addresses){
    console.log('Addresses:')
    for (let address of addresses) {
        console.log(address);
    }}

showAddresses(addresses);

// Add function to print phone types and numbers

function showPhoneNums(map){
    console.log('Phone Numbers:');
    for (let [phone, number]of map.entries()){
        console.log(`${phone}: ${number}`);
    }
}

showPhoneNums(phoneNumbers);
// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map();


// Add function to add transactions
function addTransaction (date, amount) {
    transactions.set(date, amount);
}

// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', 1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', 2200);


// Add function to show balance status
function showBalanceStatus(balance) {
    if (balance < 0) {
        console.log("YOU ARE OVERDRAWN");
    }
    else if (balance < 20) {
        console.log("Warning: You are close to zero balance");
    }
    else {
        console.log("Thank you for your business.")
    }
}

// Add function to show transactions
// function showTransactions(map, startBalance) {
//     console.log(`starting balance: ${startBalance}`);
//     for (let transation of map) {
//         let amount = transation[1];
//         if (amount > 0) {
//             console.log(transation[0], 'deposit', amount, 'balance', amount+startBalance);
//         }
//         else if (amount<0) {
//             console.log(transation[0], 'withdrawal', amount, 'balance', amount+startBalance);
//         }
//         startBalance += amount;
//     }

//     if (startBalance < 0) {
//         startBalance -= 25;
//         console.log('balance below zero, fee: ', startBalance);
//     }
//     console.log('final balance:', startBalance);
// }
function showTransactions(transactions, balance) {
    console.log(`Starting balance: ${balance}`);
    console.log("Date\t Type \t Amount \t New Balance");
    for (let [date, change] of transactions) {
        let type;
        if (change < 0) {
            type = "withdrawal";
        } else {
            type = "deposit";
        }
        balance += change;
        balance -= getFees();
        console.log(`${date} \t ${type} \t ${change} \t ${balance}`);
    }
    showBalanceStatus(balance);
}

// Function to get fees
function getFees(bal) {
    if (bal < 0) {
        return 25;
    } else {
        return 0;
    }
}


showTransactions(transactions, 26000)

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
let customer = new Object();
customer.accountHolder = accountHolder;
customer.accountNumber = accountNumber;
customer.businessName = businessName;
customer.addresses = addresses;
customer.phoneNumbers = phoneNumbers;
customer.transactions = transactions;
customer.startBalance = 26000;


// Function to add customer attributes
function addCustomerProperty(melon="cantaloupe", numOfPets=0){
    customer.favmelon = melon;
    customer.numOfPets = numOfPets;
}


addCustomerProperty('Casaba', 2);
console.log(customer);
///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses
let bankCustomers = new Map([
    ['Mel Melitipolski', '707 Birch Street'],
    ['Barbara Brown', '8997 Jones Street']
    ]);

// Write a function to return the address of a given person
function showAddress(map,person){
    return map.get(person);
}

var result = showAddress(bankCustomers, 'Mel Melitipolski');
console.log(result);

// Add a function to create an employee schedule for the week 

function makeSchedule(employees){
    let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    let result = new Map();
    for (let day of days) {
        result.set(day, employees[Math.floor(Math.random()*(employees.length))]);
    }
    return result;
}

var schedule = makeSchedule(['ham', 'f', 'sefjiwo', 'dsiof', 'afsj']);
console.log(schedule);
// Add a function for weekly hours




