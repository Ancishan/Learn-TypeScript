{
    // 

    {
        // access modifiers
    
        class BankAccount {
            public id: number;
            public name: string;
            protected _balance: number;
    
            constructor(id: number, name: string, balance: number) {
                this.id = id;
                this.name = name;
                this._balance = balance;
            }


            set deposit(amount: number){
                this._balance= this._balance + amount;
            }

            // addDeposit(amount: number) {
            //     this._balance = this._balance + amount;
    
            }
    // getter
            get Balance(){
                return this._balance;
            }
        }
    
        class StudentAccount extends BankAccount{
            test(){
                this._balance
            }
        }
        const myAccount = new BankAccount(11, 'shan', 20);
    //     myAccount.addDeposit(0);
    //    const fokirBalance =  myAccount.getBalance();

    const myBalance = myAccount.Balance;
       console.log(myBalance);
    
    }

    // 
}