{
    //  type guard

    // type of --> type guard

    type Alphaneumeric = string | number;

    const add = (param1: string | number, param2: string | number): string | number =>{
        if(typeof param1 === 'string' && param2 === 'number'){

            return param1 + param2;
        } else {
            return param1. toString() + param2.toString();
        }
    };

    const result1 = add(2, 3);
    console.log(result1);

    // In Guard all time used in object

    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role:"admin";
    }

    const getUser = (user: NormalUser | AdminUser) =>{
        // user. only show the name because this is without In guard

        // when using In guard type then show user. role and name;
        if('role' in user){
            console.log(`My name is ${user.name} and my name is ${user.role}`)
        }
        else{
            console.log(`My name is ${user.name} and my name `)
        }
    };

    const normalUser : NormalUser = {
        name: "mr. Y"
    }
    const adminUser : AdminUser = {
        name: "mr. A",
        role:"admin"
    };

    getUser(normalUser);
    getUser(adminUser)



    // 
}