enum Role { ADMIN, READ_ONLY, AUTHOR }

type User = { name: string, age: number }

const u1:User = { name: 'Atilio', age: 29 }

const person:{
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string],
    seeable: Role //this is a tuple
} = { //type is infered
    name: 'Atilio',
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: [1, 'author'],
    seeable: Role.ADMIN
}


console.log(person);