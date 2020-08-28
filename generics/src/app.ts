// const names: Array<string> = [];
// // names[0].split(" ");

// const promise: Promise<number> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(10);
//   }, 2000);
// });

// promise.then((response) => {
//   console.log(response);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Mohammed" }, { age: 32 }));

const mergedObj = merge({ name: "Mohammed", hobbies: ["Futsal"] }, { age: 32 });
// const mergedObj2 = merge<string, number>("Mohammed",32);
const mergedObj3 = merge({ name: "Mohammed" }, { age: 32 });

console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";

  if (element.length === 1) {
    descriptionText = "Got 1 elements";
  }
  if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe("My name"));
console.log(countAndDescribe(["Sports", "Hobbies"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value: + " + obj[key];
}

console.log(extractAndConvert({ name: "Mohammed" }, "name"));

class DataStorage<T extends string | boolean | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Manu");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();

// objStorage.addItem({ name: "Mohammed" });
// objStorage.addItem({ name: "Laslaa" });

// objStorage.removeItem({ name: "Mohammed" });

// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUtil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUtil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Mohammed", "Laslaa"];
// names.push("Heho");
