enum Role { ADMIN, AUTHOR, WRITER} /* Enum */
const person = {
    name: 'Angel',
    age: 25,
    hobbies: ['sports', 'cooking'],  /* Tuple */
    role: Role.ADMIN /* Enum */
}
person.role[0] = 1
let favActivities: string [];
favActivities = ['Sports']

console.log(person.name)
console.log(person.role)
for ( let  hobby  of  person.hobbies){
    console.log(hobby.toLocaleUpperCase())
}

if(person.role === Role.ADMIN) {
    console.log('is admin')
}