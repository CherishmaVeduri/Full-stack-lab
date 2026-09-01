// 1. SINGLE INHERITANCE
// One child class inherits from one parent class

class Animal {
    eat() {
        console.log("Animal eats");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

let dog = new Dog();

console.log("\n--- Single Inheritance ---");
dog.eat();
dog.bark();


// 2. MULTILEVEL INHERITANCE
// A class inherits from another child class

class Puppy extends Dog {
    play() {
        console.log("Puppy plays");
    }
}

let puppy = new Puppy();

console.log("\n--- Multilevel Inheritance ---");
puppy.eat();      // From Animal
puppy.bark();     // From Dog
puppy.play();     // From Puppy


// 3. HIERARCHICAL INHERITANCE
// Multiple child classes inherit from the same parent class

class Cat extends Animal {
    meow() {
        console.log("Cat meows");
    }
}

class Cow extends Animal {
    moo() {
        console.log("Cow moos");
    }
}

let cat = new Cat();
let cow = new Cow();

console.log("\n--- Hierarchical Inheritance ---");
cat.eat();
cat.meow();

cow.eat();
cow.moo();


// 4. MULTIPLE INHERITANCE
// JavaScript does not directly support multiple inheritance.
// We can achieve it using Mixins and Object.assign().

const Flyable = {
    fly() {
        console.log("Duck can fly");
    }
};

const Swimmable = {
    swim() {
        console.log("Duck can swim");
    }
};

class Duck extends Animal {}

// Adding multiple features using Mixins
Object.assign(Duck.prototype, Flyable, Swimmable);

let duck = new Duck();

console.log("\n--- Multiple Inheritance ---");
duck.eat();
duck.fly();
duck.swim();


// 5. HYBRID INHERITANCE
// Combination of two or more types of inheritance.
// Here, multilevel + mixin are combined.

const Pet = {
    play() {
        console.log("Pet plays");
    }
};

class SmartPuppy extends Dog {}

// Adding another feature using a Mixin
Object.assign(SmartPuppy.prototype, Pet);

let smartPuppy = new SmartPuppy();

console.log("\n--- Hybrid Inheritance ---");
smartPuppy.eat();      // From Animal
smartPuppy.bark();     // From Dog
smartPuppy.play();     // From Pet Mixin
