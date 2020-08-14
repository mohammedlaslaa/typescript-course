// type Admin = {
//   name: string;
//   privileges: string[];
// };

// you can also do this with interfaces :

interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

// type ElevatedEmployee = Admin & Employee;

interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["createServer"],
  startDate: new Date(),
};

type Combinable = string | number; // union type
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const hello: Universal = 6; // get the intersection type of two custom types

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable): Combinable {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Test", "Overload");
result.split(" ");

const fectchedUserData = {
  id: "u1",
  name: "Mohammed",
  job: { title: "CEO", description: "My company" },
};

console.log(fectchedUserData?.job?.title); // optional chaining

const userInput = '';

const storedData = userInput ?? 'Default';

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name :" + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges :" + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date :" + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);
// printEmployeeInformation({ name: "Mohammed", privileges: ["yo", "yo"] });

// class Car {
//   drive() {
//     console.log("driving...");
//   }
// }
// class Truck {
//   drive() {
//     console.log("driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("loading cargo ..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving at speed : " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 1000 });

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input');

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hi there !';
// }

// interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character' }
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email',
//   username: 'Must start with a character'
// }
