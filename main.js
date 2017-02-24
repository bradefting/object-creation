'use strict';
/*
Task #1:
- Using Object.assign(), create an object "moreLanguages" that combines the following key/value pairs with the existing object "languages":

  {
    isolates: ["Korean", "Basque"],
    Germanic: ["Swedish", "Danish", "English"]
  }

Logging "moreLanguages" should print:
  {
    Celtic: [ 'Welsh', 'Irish', 'Breton' ],
    AfroAsiatic: [ 'Hebrew', 'Somali', 'Oromo' ],
    isolates: [ 'Korean', 'Basque' ],
    Germanic: [ 'Swedish', 'Danish', 'English' ]
  }
*/

let languages = {
  Celtic: ["Welsh", "Irish", "Breton"],
  AfroAsiatic: ["Hebrew", "Somali", "Oromo"]
};

let addLanguages = {
  isolates: ["Korean", "Basque"],
  Germanic: ["Swedish", "Danish", "English"]
};

//Write task #1 code below

//this works
let moreLanguages = Object.assign({}, languages, {
    isolates: ["Korean", "Basque"],
    Germanic: ["Swedish", "Danish", "English"]
  });

//and this works if addLanguages object set to variable
let moreLanguages2 = Object.assign({}, languages, addLanguages);

console.log(moreLanguages);
console.log(moreLanguages2);

/*
Task #2
- Using Object.create(), create a "Husky" constructor with the explicit prototype "Dog".
- You only need to write ONE line of code -- see TODO below
*/

// Dog - superclass
function Dog() {
  this.hungry = true;
}

// superclass method
Dog.prototype.eat = function() {
  this.hungry = false;
};

Dog.prototype.run = function() {
  this.hungry = true;
};

// Husky - subclass
function Husky() {
  Dog.call(this); // call super constructor.
}

// TODO: Use Object.create() in order to extend the superclass with the subclass
//write code here

Husky.prototype = Object.create(Dog.prototype);

var fido = new Husky();

console.log('Is fido an instance of Husky?', fido instanceof Husky);// should print true
console.log('Is fido an instance of Dog?', fido instanceof Dog);// should print true
