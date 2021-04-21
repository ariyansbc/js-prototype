
// const personMethods = {
//     eat() {
//         console.log("person is eating");
//     },
//     sleep() {
//         console.log('person is sleeping');
//     },
//     play() {
//         console.log('person is playing');
//     }

// }

function Person(name, age) {
    // let person = Object.create(Person.prototype);

    this.name = name;
    this.age = age;


    // return person;
}

Person.prototype = {
    eat() {
        console.log("person is eating");
    },
    sleep() {
        console.log('person is sleeping');
    },
    play() {
        console.log('person is playing');
    }
}



const sakib = new Person('sakib', 35);
sakib.play()
const tamim = new Person('tamim', 32);
tamim.play();




// console.dir(p);