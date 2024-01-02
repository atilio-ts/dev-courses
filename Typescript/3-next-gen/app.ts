const userName = 'Max';

//Default function parameters
const add = (a: number, b: number = 1): number => a + b;

//Array and object spread operator, deconstruct
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
console.log(activeHobbies);

activeHobbies.push(...hobbies);//takes all the hobbies and moves them to activeHobbies

const person = {
    name: 'Max',
    age: 30
}

const copiedPerson = { ...person }

//You can use the spread operator for functions to receive an array of infinite values
const addNumber = (...numbers: number[]): number => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
addNumber (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);