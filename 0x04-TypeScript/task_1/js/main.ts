// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array containing the two students
const studentsList: Array<Student> = [student1, student2];

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the Director interface that extends Teacher (singular version)
interface Director extends Teacher {
  numberOfReports: number;
}

// Create teacher examples
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const teacher4: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Paris',
  yearsOfExperience: 5,
  subject: 'Mathematics',
  contract: true,
};

console.log(teacher4);

// Create director example
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
function printTeacher({ firstName, lastName }: { firstName: string, lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Test the printTeacher function
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: J. Doe
console.log(printTeacher({ firstName: "Jane", lastName: "Smith" })); //
