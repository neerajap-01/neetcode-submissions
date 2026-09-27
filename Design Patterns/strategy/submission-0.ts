class Person {
    private lastName: string
    private age: number
    private married: boolean
    constructor(lastName: string, age: number, married: boolean) {
        this.lastName = lastName;
        this.age = age;
        this.married = married;
    }

    /**
     * @returns {string}
     */
    getLastName(): string {
        return this.lastName;
    }

    /**
     * @returns {number}
     */
    getAge(): number {
        return this.age;
    }

    /**
     * @returns {boolean}
     */
    isMarried(): boolean {
        return this.married;
    }
}

class PersonFilter {
    /**
     * @param {Person} person
     * @returns {boolean}
     */
    apply(person: Person): boolean {
        throw new Error("Abstract method 'apply' must be implemented.");
    }
}

class AdultFilter extends PersonFilter {
    // Implement Adult filter
    constructor() {
        super()
    }

    apply(person: Person): boolean {
        return person.getAge() >= 18;
    }
}

class SeniorFilter extends PersonFilter {
    // Implement Senior filter
    constructor() {
        super()
    }

    apply(person: Person): boolean {
        return person.getAge() >= 65;
    }
}

class MarriedFilter extends PersonFilter {
    // Implement Married filter
    constructor() {
        super()
    }

    apply(person: Person): boolean {
        return person.isMarried();
    }
}

class PeopleCounter {
    /**
     * @param {PersonFilter} filter
     */
    protected filter: PersonFilter;
    setFilter(filter: PersonFilter): void {
        if (!(filter instanceof PersonFilter)) {
            throw new Error('Filter must be an instance of PersonFilter');
        }
        this.filter = filter;
    }

    /**
     * @param {Person[]} people
     * @returns {number}
     */
    count(people: Person[]): number {
        // Implement method here
        return people.reduce((acum, cur) => {
            if(this.filter.apply(cur)) {
                return acum + 1
            }
            return acum;
        }, 0)
    }
}
