class MyMath {
    constructor(initValue = 0) {
        this.num = initValue
    }

    square() {
        return this.num ** 2
    }

    cube() {
        return this.num ** 3
    }
}

class Command {
    constructor(subject) {
        this.subject = subject
        this.commandExecuted = []
    }

    execute(command) {
        this.commandExecuted.push(command)
        return this.subject[command]()
    }
}

const x = new Command(new MyMath(2))

console.warn(x.execute('square')); // 4
console.warn(x.execute('cube')); // 8
console.warn(x.execute('cube')); // 8
console.warn(x.commandExecuted); // ['square', 'cube', 'cube']
