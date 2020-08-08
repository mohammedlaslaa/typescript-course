// const userName = 'Max';

// let age = 30;

// age = 29;

// function add(n1: number, n2: number) {
//   var result;
//   result = n1 +n2;
//   return result;
// }

// console.log(result)

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 4) => a + b;

// console.log(add(2));

// const printOutput = (output: string | number) => console.log(output);
// const printOutput : (output: string | number) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event))
// }

// printOutput('hello world !');

const hobbies = ['sports', 'cooking'];
// const activeHobbies = ['Hiking', ...hobbies];

// console.log(activeHobbies)

const person = {
  firstName :'max',
  age: 20
};

const copiedPerson = {...person};

// person.name = 'momo';

console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => curResult + curValue, 2)
}

const addedNumbers = add(5, 10, 2, 3.7);

console.log(addedNumbers);

const [hobby1, ...remainigHobbies] = hobbies; 

console.log(remainigHobbies)

const { firstName: userName, age } = person; // property renaming

console.log(userName, age, person)