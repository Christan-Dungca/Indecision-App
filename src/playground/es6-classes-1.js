
class Person {

    constructor(name = 'anonymous ', age = 0) {
        // "this" refers to that specific instance of that class
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi. I'm ${this.name}.`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years of age`;
    }
}

class Traveler extends Person {

    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;  
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(!!this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const T1 = new Traveler("cj", 14, "guam");
const T2 = new Traveler("jordan", 9);

console.log(T1.getGreeting(), T2.getGreeting());