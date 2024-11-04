{
    // generic type --> type alias : any time when we need type then create generate type

    // const rollNumbers : number [] = [1,2,3]
    const rollNumbers :  Array<number> = [1,2,3]


    // const mentors: string [] = ["x", "y"];
    const mentors: Array<string> = ["x", "y"];

    // const booleanArray: boolean[] = [true, false]



    type GenericArray = Array<boolean>
    const booleanArray: GenericArray = [true, false]

    // For Reusable

    type GenericArray1<T> = Array<T> //industry lavel e param na likhe T likhe

    const rollNumbers1: GenericArray1<number> = [12,2,3]
    
    const mentors2: GenericArray1<string> = ["s", "y"] 

    const user : GenericArray1<{name: string, age: number}> = [
        {
            name: 'Shanto',
            age: 22
        },{
            name: 'shan',
            age:110
        }
    ]


    // generic tuple

    type GenericTuple <X, Y> = [X, Y]

    const men: GenericTuple<string, string> = [' X', 'Y']

    const USerWithID: GenericTuple<number, {name: string, email: string}> = [1234, {name: 'persian', email:'a@gmail.com'}]


// interface or type ..only interface die korlle just interface likhbo and = remove korbo

type User = {
    // number: number;
    name: string;
    email:string
}

const USerWithID2: GenericTuple<number, User> = [1234, {name: 'persian', email:'a@gmail.com'}]




    const add = (x: number, y:number) => x + y;

    add(30, 20);


    // 


}