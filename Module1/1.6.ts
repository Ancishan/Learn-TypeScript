{// Learning function
// Normal function
// Arrow Function

function add(num1 : number, num2 : number) : number{
    return num1 + num2;
}
add(2, true)

// Arrow function
const addArrow = (num1 : number, num2: number) : number => num1 + num2

// object er mddhe kono function thakle take  boli method:
 const poorUser = {
    name: 'shanto',
    balance: 0,
    addBalance(balance: number) : string{
        return `My new balance is : ${this.balance + balance}`;
    }
 };

 const arr : number [] = [1, 4, 10];

//  const newArr : number[] = arr.map((elem: number) : number => elem * elem);

const newArr : number[] = arr.map((elem: number) : number => elem * elem) }