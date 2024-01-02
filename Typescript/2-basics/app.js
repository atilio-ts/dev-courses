"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const u1 = { name: 'Atilio', age: 29 };
const person = {
    name: 'Atilio',
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: [1, 'author'],
    seeable: Role.ADMIN
};
console.log(person);
