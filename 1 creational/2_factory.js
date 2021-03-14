// Initial Data
class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

// Factory
class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership,
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);

        // custom attributes/functions if needed
        member.type = type;
        member.define = function() {
            console.warn(`${this.name} (${this.type}): ${this.cost}`);
        }
        return member;
    }
}

// define main Factory object
const factory = new MemberFactory();

const members = [
    factory.create('Steve', 'simlpe'),
    factory.create('Anna', 'standard'),
    factory.create('Siri', 'premium'),
    factory.create('Peter')
];

members.forEach(m => m.define());
