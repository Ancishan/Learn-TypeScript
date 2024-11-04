{

    // ternary operator || optional chaining || nullish coalescing operator

    const age: number = 15;

    if(age > 18){
        console.log('adult');
    } else {
        console.log("not adult")
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult'
    console.log({isAdult})

    // nullish coalsecing operator
    // null / undefined ----> decision making

    const  isAuthenticated = undefined;

    const result1 = isAuthenticated ?? 'guest';
    console.log({result1})

// 

type User ={
    name: string;
    address: {
        city:string;
        road: string;
        presentAddress: string;
        permannnetAddress?: string;  //optional type
    };
}

const user: User={
    name: 'shanto',
    address:{
        city:'ctg',
        road:'dewanhat',
        presentAddress:'ctg',
    },
};

const permannnetAddress = user?.address?.permannnetAddress ?? "no perman"; //optional chaining
console.log({permannnetAddress})


}