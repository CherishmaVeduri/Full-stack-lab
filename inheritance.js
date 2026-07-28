// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log(this.name + " makes a sound.");
    }
}

// Child class inherits from Animal
class Dog extends Animal {
    bark() {
        console.log(this.name + " barks.");
    }
}

// Create an object of Dog
let dog1 = new Dog("Tommy");

// Call methods
dog1.sound();   // Inherited method
dog1.bark();    // Child class method