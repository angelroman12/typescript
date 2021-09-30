enum Role { ADMIN, AUTHOR, WRITER} /* Enum */
const person
// : {
//     name: string;
//     age: number;
//     hobbies: [number, string];
//     role: {};
//     obj: {}
// } 
= {
    name: 'Angel',
    age: 25,
    hobbies: [ 2, 'cooking'],  /* Tuple -- fixed length and type -- push()  can change the array */
    role: Role.ADMIN /* Enum */,
    obj: {
        haine: 'negre'
    }
}   
person.role[0] = 1
let favActivities: string [];
favActivities = ['Sports']

console.log(person.name)
console.log(person.role)
for ( let  hobby  of  person.hobbies){
    console.log(hobby)
}

if(person.role === Role.ADMIN) {
    console.log('is admin')
}