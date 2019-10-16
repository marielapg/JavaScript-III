/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: the global scope, the value 'this' is window/console object
* 2. Implicit Binding: when the dot notation is used to invoke a function
* 3. New Binding: the object is created and returned by the constructor function
* 4. Explicit Binding: when using call or apply methods is used "this"is being defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Linda");

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Linda');
  
// Principle 3

// code example for New Binding
function Person(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const daisy = new Person('Daisy');
  const mona = new Person('Mona');
  
  daisy.speak();
  mona.speak();

// Principle 4

// code example for Explicit Binding

function ghost(){
  console.log(this.boo);
}

let myGhost = {
  name: 'Casper',
  boo: '👻 booo'
}

let otherGhost = {
  name: 'Fatso',
  boo: '😡👻boooo'
}

ghost.call(myGhost); 
ghost.call(otherGhost);