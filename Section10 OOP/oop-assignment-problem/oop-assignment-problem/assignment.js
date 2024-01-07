class Course {
  #price;
  get price() {
    return '$' + this._price;
  }

  set price(value) {
    if (value < 0) {
      throw 'Invalid value!';
    }
    this.#price = value;
  }

  constructor(courseTitle, coursePrice, courseLenght) {
    this.title = courseTitle;
    this.#price = coursePrice;
    this.lenght = courseLenght;
  }

  calculateValue() {
    return this.lenght / this.price;
  }
  printSummary() {
    console.log(
      `Title: ${this.title}, Lenght:${this.lenght}, Price:${this.price}`
    );
  }
}

const TailwindCssCourse = new Course('Tailwind Css 2023', 35, 30);
const reactCourse = new Course('react beginners', 40, 50);

console.log(TailwindCssCourse);
console.log(reactCourse);

console.log(TailwindCssCourse.calculateValue());
console.log(reactCourse.calculateValue());

TailwindCssCourse.printSummary();
reactCourse.printSummary();

class PracticalCourse extends Course {
  constructor(title, price, lenght, exercisesCount) {
    super(title, price, lenght);
    this.numOfExercises = exercisesCount;
  }
}

const angularCourse = new PracticalCourse(
  'Angualr the Complete Guiede',
  36,
  50,
  10
);

console.log(angularCourse);
angularCourse.printSummary();

class TheoreticalCourse extends Course {
  publish() {
    console.log('Publishing...');
  }
}

const flutterCourse = new TheoreticalCourse(
  'Flutter - Builds ios and Android Apps',
  50,
  48
);

flutterCourse.price = 100;

flutterCourse.printSummary();
flutterCourse.publish();
