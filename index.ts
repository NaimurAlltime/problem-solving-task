/**
* --------------------------------------------------------------------------------------------
1.Task: Array Filtering And Mapping
Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. 
Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. 
Print The Final Result.
* --------------------------------------------------------------------------------------------
*/

type Person = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const persons: Person[] = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Edward", age: 40, gender: "male" },
];

const getAllFemaleNames = (persons: Person[]): string[] => {
  const filtered = persons.filter((person) => person.gender === "female");
  return filtered.map((person) => person.name);
};

// const femaleNames: string[] = getAllFemaleNames(persons);
// console.log(femaleNames);

/**
* --------------------------------------------------------------------------------------------
2.Task: Object Manipulation
Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. 
Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. 
Print The Result.
* --------------------------------------------------------------------------------------------
*/
interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = [
  { title: "Time Management", author: "Brian Tracy", year: 2014 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
];

const getAllBookTitles = (books: Book[]) => {
  return books.map((book) => book.title);
};

// const result = getAllBookTitles(books);
// console.log(result);

/**
* --------------------------------------------------------------------------------------------
3.Task: Function Composition
Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. 
Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, 
And Then Adds 5.
* --------------------------------------------------------------------------------------------
*/
type TFunc = (num: number) => number;

const funcComposition = (num: number) => {
  const compose = (...functions: TFunc[]) => {
    return (input: number) => {
      return functions.reduce((acc: number, curFn: TFunc) => {
        return curFn(acc);
      }, input);
    };
  };

  const square = (num: number) => num * num;
  const double = (num: number) => num * 2;
  const addFive = (num: number) => num + 5;

  const newFunc = compose(square, double, addFive);
  return newFunc(num);
};

// const result = funcComposition(3);
// console.log(result);

/** 
* --------------------------------------------------------------------------------------------
4.Task: Sorting Objects
Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. 
Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. 
Print The Sorted Array.
* --------------------------------------------------------------------------------------------
*/
interface Car {
  make: string;
  model: string;
  year: string;
}

const cars: Car[] = [
  { make: "Toyota", model: "Camry", year: "2022-01-01" },
  { make: "Honda", model: "Civic", year: "2021-01-01" },
  { make: "Ford", model: "Mustang", year: "2023-01-01" },
  { make: "Tesla", model: "Model 3", year: "2019-01-01" },
  { make: "BMW", model: "X5", year: "2023-01-01" },
];

const sortCarsByYear = (cars: Car[]) => {
  return cars.sort(
    (a, b) => new Date(a.year).getFullYear() - new Date(b.year).getFullYear()
  );
};

// const result = sortCarsByYear(cars);
// console.log(result);

/**
* --------------------------------------------------------------------------------------------
6.Task: Array Reduction
Create An Array Of Numbers. Write A Function That Uses The Reduce Method 
To Calculate The Sum Of All Even Numbers In The Array.
* --------------------------------------------------------------------------------------------
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfEvenNumbers = (numbers: number[]) => {
  return numbers.reduce((acc: number, cur: number) => {
    if (cur % 2 === 0) {
      return acc + cur;
    }
    return acc;
  }, 0);
};

// const result = sumOfEvenNumbers(numbers);
// console.log(result);
