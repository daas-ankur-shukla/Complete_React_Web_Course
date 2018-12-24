class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${ this.name }. `;
  }
  getDescription() {
    return `${ this.name } is ${ this.age } year(s) old. `;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    console.log(this.homeLocation)
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homeLocation) {
      greeting += `I am visiting ${ this.homeLocation }`;
    }

    return greeting;
  }
}

const me = new Traveler('Andrew Mead', 26, 'Philedelphia');
console.log(me.getGreeting())

const other = new Traveler();
console.log(other.getGreeting())
