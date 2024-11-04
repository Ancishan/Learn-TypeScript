// Reference type ----> object

const user:{
    company:'programing hero'; //type --> literal types (when bangladesh are fixed only PH then PH type)
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    company: 'programing hero',
    firstName: 'Shanto',
    middleName: 'Chandra',
    lastName: 'Nath'
}

const userr:{
    readonly company:string; //type --> literal types (when bangladesh are fixed only PH then PH type)
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    company: 'programing hero',
    firstName: 'Shanto',
    middleName: 'Chandra',
    lastName: 'Nath'
}

userr.company='PH'

// 
const users:{  //ei gula required
    firstName: string;
    middleName ?: string; //for required used in optional ?
    lastName: string;
    isMarried: boolean;
} = {
    firstName: 'Shanto',
    isMarried:true,
    lastName: 'Nath',
}