{

    // spread operator  
    // rest operator

    //destructure

    
    //learn spread operator 
    const friend1: string[] = ["a", 'b', 'c'];
    const friend2: string[] = ['d', 'e', 'f'];

    friend1.push(...friend2);

    const mentors1 = {
        ts : 'mezbha',
        redux: 'Mir',
        dbms: 'Mizan'
    }
    const mentors2 = {
        prisma: 'firoz',
        next: 'Tonmmoy',
        cloud: 'Nahid'
    }

    const mentorList ={
        ...mentors1,
        ...mentors2
    }

    //learn rest operator . rest element nie operator make kore
    // const greetFriends = (frd1:string , frd2:string, frd3:string) =>{
    const greetFriends = (...friends: string[]) =>{
        friends.forEach((friend:string) =>console.log(`Hi ${friend}`))
    }

    greetFriends('Abul', 'kabul', 'babul');

}