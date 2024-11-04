{
    // mapped types

    const arrayOfNumbers: number[] = [1, 4, 5];

    // const arrString:string[] = ["1", '2'];

    const arrOfStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString());

    console.log(arrOfStrings);

    //  another maps

    type AreaNumber = {
        height: number;
        width: number;
    };

    type AreaString = {
        [key in keyof AreaNumber] : boolean
    }

    // custom  type define

    type AreaStringss <T> ={
        [key in keyof T] : T[key] //key means loop
    }

    const area1: AreaStringss<{height: string; width:number}> = {
        height: "100",
        width: 50,
    }


    // 

    // 
    type Height = AreaNumber["height"] //look up type
}