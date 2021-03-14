// *** ES5 Syntax ***
function ServerOld(name, ip) {
    this.name = name;
    this.ip = ip;
}

// define class methods
ServerOld.prototype.getUrl = function () {
    return `https://${this.ip}:80`;
}

// create new instance
const aws1 = new ServerOld('AWS Local', '192.268.0.100');
console.warn(aws1.getUrl());

// *** ES6 Syntax ***
class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}:80`;
    }
}

// create new class instance
const aws2 = new Server('AWS Local', '192.268.0.100');
console.warn(aws2.getUrl());
