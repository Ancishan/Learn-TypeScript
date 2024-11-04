{

    // type assertion
    
    let anything : any;
    anything = "Program";
    anything= 33;
    (anything as string);
    (anything as number);

    const kgToGm = (value: string | number | null) =>{
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value) * 100;
            return `The Converted Value is: ${convertedValue}`
        }
        if(typeof value === 'number'){
            return value * 100;
        }
    }
    const result1 = kgToGm(100)

    console.log(result1);

    type CustomError= {
        message: string
    }

    try{

    } catch(error){
        console.log((error as CustomError))
    }


}