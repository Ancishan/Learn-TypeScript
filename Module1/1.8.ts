// destructuring

{

    const user = {
    id:345,
    name:{
        firstName: 'shanto',
        middleName: 'Chandra',
        LastName: 'Nath',
    },
    contactNo: '0125335',
    address: 'Ctg'
};

const {contactNo, name: {firstName}} = user;

// array destructure

const myFriends = ['x', 'y', 'z', 'k', 'l', 'm', 'n']

// const [a, b, bf] = myFriends
const [, , bf, ...rest] = myFriends

}