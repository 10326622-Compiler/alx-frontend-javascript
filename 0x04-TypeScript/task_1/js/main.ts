interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
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

// This would cause a TypeScript error (uncommenting will show the error):
// teacher3.firstName = 'Mike'; // Error: Cannot assign to 'firstName' because it is a read-only property

