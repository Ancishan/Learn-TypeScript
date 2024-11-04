{
    // function with generic

    const createArray = (param: string) : string [] =>{
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T) :T[] =>{
        return [param];
    }

    const result1 = createArray('Bangladesh')

    const resGeneric = createArrayWithGeneric<string>('Bangladesh')


    interface User {
        name: string;
        id:number;
    }

    const resGenericObj = createArrayWithGeneric<User>({id:99, name:'shan'})


    // tuple generic
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q) :[T,Q] =>{
        return [param1, param2];
    }

    const resTuple = createArrayWithTuple<string, number>('Bangladesh', 99)
    // const result3 = resGeneric('Bangladesh', 123)




    // 

    const addCourseToStudent =<T> (student: T) =>{
        const course = "Next Level WEb";
        return{
            ...student, 
            course
        }
    }

    const student1 = addCourseToStudent({name:'x', email:'j@gmail.com', position:'front'})
    const student2 = addCourseToStudent({name:'y', email:'y@gmail.com', hasWatch:'AppleWatch'})
    
}