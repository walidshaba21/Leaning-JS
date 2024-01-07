// class Person {
//   name = 'Max';

//   constructor() {
//     this.age = 30;
//   }
//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old'
//     );
//   }
// }

function Person() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function () {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old'
    );
  };
}

const p = new Person();
p.greet();


