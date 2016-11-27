class Person {
  //W es6 nie robimy takiej instrukcji czy kalsa została wywołana z new czy nie gdyz w przypadku klas js z auomatu zadba o to
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
      console.log(`Cześć, nazywam się ${this.firstName} ${this.lastName}`);
  };
}
class Programmer extends Person {

    constructor(firstName, lastName, lang = "html") {
        super(firstName, lastName);
        this.lang = lang;
    }
work(){
  this.sayHello();
  console.log(`Piszę właśnie kod w moim ulubionym języku, którym jest ${this.lang}.`);
}


};
//var jsDev = new Programmer("Jan", "Kowalski", "Python");
var jsDev2 = new Programmer("Marcin", "Iwanczyk", "JavaScript");

jsDev2.work();
