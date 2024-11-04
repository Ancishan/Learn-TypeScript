// union types

{
type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'

const newDeveloper: FrontendDeveloper = 'juniorDeveloper'

type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodgroup: "O+" | "A+" | "AB+";
}

const user1: User={
    name:"shanto",
    gender:"male"
}

// intersection

type FrontendDevelopers = {
    skills:string[]
    designation1: 'Frontend Developer'
}

type BackendDeveloper = {
    skills: string[]
    designation2: 'Backend Developer'
}

type FullstackDevelopers = FrontendDevelopers & BackendDeveloper

const fullstackDevelopers : FullstackDevelopers ={
    skills: ['HTML', 'CSS', "Express"],
    designation2:'Backend Developer',
    designation1:'Frontend Developer'
}

}