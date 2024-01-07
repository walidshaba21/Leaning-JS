const uid = Symbol('uid');
console.log(uid);

const user = {
  [uid]: 'p1',
  name: 'Max',
  age: 30,
};

user.uid = 'p2';

// console.log(user);

const company = {
  curEmployee: 0,
  employee: ['Max', 'Manuel', 'Anna'],
  next() {
    if (this.curEmployee >= this.employee.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = { value: this.employee[this.curEmployee], done: false };
    this.curEmployee++;
    return returnValue;
  },
};

console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());

// ----

const course = {
  title: 'Javascript - The Complete Guide',
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

console.log(course);

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    return obj[propertyName];
  },
};

const pCourse = new Proxy(course, courseHandler);
console.log(pCourse.title); 
