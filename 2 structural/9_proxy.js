function networkFect(url) {
    return `${url} - server response`
}

const cache = new Set()

const proxiedFetch = new Proxy(networkFect, {
    apply(target, thisArg, args) {
        const url = args[0]
        if (cache.has(url)) {
            return `${url} - cached response`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxiedFetch('https://angular.io'))
console.log(proxiedFetch('https://vue.js'))
console.log(proxiedFetch('https://angular.io'))
