{
    // Type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo ?: string;
        address: string;
    }

    const student1: Student = {
        name: 'Mezba',
        age: 50,
        gender: male,
        contactNo: '01235656223',
        address: 'ctg'
    }

    const student2: Student = {
        name: 'Lisa',
        age: 50,
        gender: 'Female',
        address: 'ctg'
    }
    const student3:Student= {
        name: 'Lisa',
        age: 50,
        gender: 'Female',
        address: 'ctg'
    }

    // another type alias array
    type UserName = string
    const userName: UserName = 'shanto'


// normally use
    const add = (num1: number, num2:number):number => num1 + num2;
// then type alias using
 type Sub = (num1: number, num2: number) => number;
const sub : Sub = (num1, num2) => num1 -num2;


}