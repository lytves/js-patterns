const car = {
    wheels: 4,

    init() {
        console.warn(`I have ${this.wheels} wheels and my owner is ${this.owner}!`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Karbishev'
    }
});

carWithOwner.init()
console.warn(carWithOwner.__proto__);
// carWithOwner's prototype is object "car"
console.warn(carWithOwner.__proto__ === car);
