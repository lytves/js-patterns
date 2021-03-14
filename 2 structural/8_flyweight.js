class Car {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }

    create(model, price) {
        const candidate = this.getCar(model)
        if (candidate) {
            return candidate
        }

        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }

    getCar(model) {
        return this.cars.find(c => c.model === model)
    }
}

const factory = new CarFactory()

factory.create('BMW', 10000)
console.log(factory.getCar('BMW'))

factory.create('BMW', 20000) // doesn't crete new BMW
console.log(factory.getCar('BMW'))

factory.create('AUDI', 12000)
console.log(factory.getCar('AUDI'))

