class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.warn(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const max = new User('Max')
const tom = new User('Tom')
const joan = new User('Joan')

const room1 = new ChatRoom()

room1.register(max)
room1.register(tom)
room1.register(joan)

max.send('Hello!', joan)
joan.send('Hi, Tom!', tom)
tom.send('Hi to all!')
