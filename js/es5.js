function Person(firstName, lastName) {

   //W es6 nie robimy takiej instrukcji czy kalsa została wywołana z new czy nie gdyz w przypadku klas js z auomatu zadba o to
    if( !(this instanceof Person) ) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;

}

Person.prototype.sayHello = function() {

    console.log("Cześć, nazywam się " + this.firstName + " " + this.lastName + "!");

};

function Programmer(firstName, lastName, lang) {

    lang = lang || "JavaScript";

    Person.call(this, firstName, lastName);

    this.lang = lang;

}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.work = function() {

    this.sayHello();
    console.log("Piszę właśnie kod w moim ulubionym języku, którym jest " + this.lang + ".");

};

var jsDev = new Programmer("Jan", "Kowalski", "Python");

jsDev.work();
