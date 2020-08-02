// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } = {
//   name: 'Mohammed',
//   age: 32,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// const ADMIN = 5;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 10, READ_ONLY, AUTHOR }

const person = {
  name: 'Mohammed',
  age: 32,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['coucou'];

console.log(person.name);

for ( const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
  console.log('is admin')
}