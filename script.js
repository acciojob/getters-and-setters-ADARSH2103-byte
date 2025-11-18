//complete this code
class Person {}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
// Person Class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age (useful for tests)
  get age() {
    return this._age;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }
}

// Student Class (inherits from Person)
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher Class (inherits from Person)
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change below
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
