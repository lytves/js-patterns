class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }
}

// 1 - iterator
const it = new MyIterator(['This', 'is', 'a', 'iterator'])

for (const val of it) {
    console.warn('Value: ', val);
}

// 2 - generator
function* generator(collection) {
    let index = 0
    while (index < collection.length) {
        yield collection[index++]
    }
}
const gen = generator(['This', 'is', 'a', 'iterator'])

for (const val of gen) {
    console.warn('Value: ', val);
}
