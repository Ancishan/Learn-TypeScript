{
    // utility 
    //  pick
    type Person = {
    name: string;
    age: number;
    email?: string;
    phone: number;
    } 

    type NameAge = Pick<Person, "name" | "age">

    // omit - bad dewa
    type ContactInfo = Omit <Person, "name" | "age">
    
    // Required
    type  PersonRequired = Required <Person>

    // pertial/ optional

    type PersonPartial = Partial<Person>

    // Read Only

    type PersonReadonly = Readonly<Person>


    const person1:PersonReadonly = {
        name: "mr. X",
        age: 400,
        Phone: '0122'
    }

    // Record
    // type MyObj = {
    //     a: string,
    //     b: string
    // };

    type MyObj = Record<string, string>

    const EmptyObject: Record <string, unknown> = {}
    

    const obj: MyObj = {
        a: "aa",
        b:"bb",
        c:"cc"
        e:9

    }
  



    // 
}