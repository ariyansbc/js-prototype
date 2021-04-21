class Person {
    constructor(name,age) {
        this.name = name;
        this.age =  age
    }
    eat() {
        console.log("person is eating");
    }
    sleep() {
        console.log('person is sleeping');
    }
    play() {
        console.log('person is playing');
    }
}

const sakib = new Person('sakib', 35);
sakib.play()
const tamim = new Person('tamim', 32);
tamim.play();