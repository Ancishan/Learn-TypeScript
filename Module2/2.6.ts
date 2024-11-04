{
    // constraints : jeita jeita use korbo seta must rakhtte hbe.here nam, id , email put

    const addCourseToStudent = <T extends{id:number; name:string; email:string}>(student: T) => {
        const course = "Next Level WEb";
        return {
            ...student,
            course
        }
    }


    const student1 = <{
        id: number;
        name: string;
        email: string;
        position: string;
    }>addCourseToStudent({
        id: 5222,
        name: 'x',
        email: 'j@gmail.com',
        position: 'front'

    })
    const student2 =<{
        id: number;
        name: string;
        email: string;
        hasWatch: string;
    }> addCourseToStudent({
        id: 52,
        name: 'y',
        email: 'y@gmail.com',
        hasWatch: 'AppleWatch'

    })

    const student3 = addCourseToStudent({ emni: 'emni' })


    // 
}