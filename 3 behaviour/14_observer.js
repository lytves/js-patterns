class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    fire(action) {
        this.observers.forEach(obs => {
            obs.update(action)
        })
    }

}

class Observer {
    constructor(state = 1) {
        this.state = state
        this.initialState = state
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state
                break
            case 'DECREMENT':
                this.state = this.state
                break
            case 'ADD':
                this.state += action.payload
                break
            default:
                this.state = this.initialState
        }
    }
}

const stream$ = new Subject()

const obs1 = new Observer()
const obs2 = new Observer(42)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

console.warn(obs1.state) // 1
console.warn(obs2.state) // 42

stream$.fire({type: 'INCREMENT'})

console.warn(obs1.state) // 2
console.warn(obs2.state) // 43

stream$.fire({type: 'ADD', payload: 10})

console.warn(obs1.state) // 12
console.warn(obs2.state) // 53
