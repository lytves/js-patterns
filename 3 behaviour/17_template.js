class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {
    }

    work() {
        return `${this.name} do ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} has ${this.salary} salary`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `programming`
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `testing`
    }
}

const dev = new Developer('Mike', 1000)
console.log(dev.getPaid());
console.log(dev.work());

const qa = new Tester('Mathew', 1500)
console.log(qa.getPaid());
console.log(qa.work());
