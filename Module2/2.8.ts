{
    // Promise : typescript asyncronus
    type Todo ={
        id: number;
        userId: number;
        title: string; 
        completed: boolean;
    }

    const getToDo = async (): Promise<Todo> =>{
        const response = await fetch( "https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json();
        return data;
    };
   
    getToDo();

   

    // simulate
   /* const createPromise = ():Promise<string> =>{
        return new Promise <string>((resolve, reject) =>{
            const data : string ="something"
            if(data){
                resolve(data)
            } else{
                reject("failed to load data")
            }
        })
    }
    // calling create promise function

    const showData = async () =>{
        const data = await createPromise();
        console.log(data);
    }
    showData();
    */
//    Object hisabe

type Something ={something: string}

const createPromise = ():Promise<Something> =>{
    return new Promise <Something>((resolve, reject) =>{
        const data : {something: string} ={something: "something"}
        if(data){
            resolve(data)
        } else{
            reject("failed to load data")
        }
    })
}
// calling create promise function

const showData = async (): Promise<Something> =>{
    const data: Something = await createPromise();
    return data;
}
showData();




    // 
}