{
    // oop inheritance

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name:string, age:number, address: string){
            this.name= name;
            this.age=age;
            this.address= address;
        }
        
        getSleep(numOfHour){
            console.log(`he is ${this.name} will sleep for ${numOfHour} `)
        }
    }

    class Student extends Parent{
        constructor(name:string, age:number, address: string){
            super(name, age, address)
        }
        
    }

    const student1 = new Student("shanta", 890, 'Ctg');



    class Teacher extends Parent{
        // name: string;
        // age: number;
        // address: string;
        Designation: string;

        constructor(name:string, age:number, address: string, Designation:string){
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name, age, address)
            this.Designation= Designation;
        }

        // getSleep(numOfHour){
        //     console.log(`he is ${this.name} will sleep for ${numOfHour} `)
        // }

        takeClass(numOfClass){
            console.log(`he is ${this.name} will take for ${numOfClass} `)
        }

    }

    
    const teacher = new Teacher("shantaa", 890, 'Ctg', "Professor");

    teacher.address
    
    // 
}