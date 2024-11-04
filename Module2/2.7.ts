{
    // generic constraints with key of operator
    
    type Vehicle = {
        bike: string;
        car: string;
        ship:string;
    }

    type Owner = "bike" | "car" | "ship"; //manually korchi r key of vehicle die niche easily korchi

    type owner1 = keyof Vehicle

    const person1 : Owner = "bike"




    function getPropertyValue <X, Y extends keyof X>(obj: X, key: Y){
        return obj[key];
    }
 
    const user ={
        name:'shan',
        age: 22,
        address: "ctg"
    }
    const car ={
        model:'Toyota',
        year: 22,
        
    }

    const result1 = getPropertyValue(car, 'model')





    // 
}