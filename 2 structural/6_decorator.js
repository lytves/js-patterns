class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAws = true
    server.awsInfo = function () {
        return server.url
    }
    return server
}

function azure(server) {
    server.isAzure = true
    server.port += 500
    return server
}

const s1 = aws(new Server('12.23.34.45', '8080'))
console.log(`isAws=${s1.isAws}`)
console.log(s1.awsInfo())

const s2 = azure(new Server('56.67.78.89', '8181'))
console.log(`isAzure=${s2.isAzure}`)
console.log(s2.url)


