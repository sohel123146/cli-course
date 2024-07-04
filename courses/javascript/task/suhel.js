// var firstname = "Mohammad Suhel";
// var lastname = "Baig";

// var fullname = firstname + " " + lastname;
// var skills = "HTML, CSS, JS"
// var address = "Bapatla"

// // `literal value ${identifier}`
// console.log(`${fullname} from ${address} and my skills are ${skills}`)

/*
Create account object {id, balance}
@Parameters
  - accountNumber: number
  - initialBalance: number
  
@Return
  {id: accountNumber, balance: initialBalance}
*/
function createAccount(accountNumber, initialBalance) {
    if (typeof accountNumber !== "number") {
      throw new Error(
        `Passed account number ${accountNumber} is not a number data type`
      );
    }
  
    if(initialBalance === undefined){
      console.log("Please add initial balance to continue with your account")
    }
    else{
      const account = {
          id: accountNumber,
          balance: initialBalance,
        };
        return account;
    }
  }
  
  const firstAccount = createAccount(1234, 500);
  const secondAccount = createAccount(5678, 950);
  const thirdAccount =  createAccount(9090, 1000)
  console.log(firstAccount);
  console.log(secondAccount);
  console.log(thirdAccount);
  
  /*
    to deposit money into an account
    @Parameter
      - account: object {id, balance}
      - amount: number
      
    Implementation
    sum previous account balance to new amount
    account.balance = account.balance + amount
    */
  function deposit(account, amount) {
    if (typeof amount !== "number") {
      throw new Error("Please provide amount has a number data type");
    }
  
    if(account.balance === undefined){
      throw new Error("Account does not have an initial balance set");
    }else{
      account.balance += amount;
      console.log(`
        Deposited ${amount} into account ${account.id} 
        and total balance is ${account.balance}
        `);
    }
  }
  
  deposit(firstAccount, 150);
  deposit(secondAccount, 677);
  deposit(thirdAccount,900)
  /*
    to withdraw money into an account
    @Parameter
      - account: object {id, balance}
      - amount: number
      
    Implementation
    minus previous account balance to withdraw amount
    account.balance = account.balance - amount
    */
  function withdraw(account, amount) {
    if (typeof amount !== "number") {
      throw new Error("Please provide amount has a number data type");
    }
  
    account.balance -= amount;
    console.log(`
      withdraw ${amount} into account ${account.id} 
      and total balance is ${account.balance}
      `);
  }
  
  withdraw(firstAccount, 50);
  withdraw(secondAccount, 500);
  withdraw(thirdAccount,500)
  
  /*
    To check account balance
    @Parameter
      - account: object {id, balance};
    */
  function checkBalance(account) {
    console.log(`
        Account: ${account.id}
        Balance: ${account.balance}
      `);
  }
  
  checkBalance(firstAccount);
  checkBalance(secondAccount);
  checkBalance(thirdAccount)
  