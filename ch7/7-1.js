class Organization {
    #name;
    #country;

    constructor(name, country) {
        this.#name = name;
        this.#country = country;
    }

    get name() {
        return this.#name;
    }

    get country() {
        return this.#country;
    }

    set name(name) {
        this.#name = name;
    }

    get rawData() {
        return {name: this.#name, country: this.#country}
    }
}

const organization = new Organization('Acme Gooseberries', 'GB');

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
console.log(organization.rawData);
