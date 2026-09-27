class Coffee {
    /**
     * @returns {number}
     */
    getCost(): number {
        throw new Error('Method getCost() must be implemented.');
    }
}

class SimpleCoffee extends Coffee {
    /**
     * @returns {number}
     */
    getCost(): number {
        return 1.1;
    }
}

class CoffeeDecorator extends Coffee {
    private decoratedCoffee: Coffee
    /**
     * @param {Coffee} coffee
     */
    constructor(coffee: Coffee) {
        super();
        this.decoratedCoffee = coffee;
    }

    /**
     * @returns {number}
     */
    getCost(): number {
        return this.decoratedCoffee.getCost();
    }
}

class MilkDecorator extends CoffeeDecorator {
    // Implement the Milk decorator
    private coffee: Coffee
    constructor(coffee: Coffee) {
        super(coffee)
        this.coffee = coffee;
    }

    getCost(): number {
        return this.coffee.getCost() + 0.5;
    }
}

class SugarDecorator extends CoffeeDecorator {
    // Implement the Sugar decorator
    private coffee: Coffee
    constructor(coffee: Coffee) {
        super(coffee)
        this.coffee = coffee;
    }

    getCost(): number {
        return this.coffee.getCost() + 0.2;
    }
}

class CreamDecorator extends CoffeeDecorator {
    // Implement the Cream decorator
    private coffee: Coffee
    constructor(coffee: Coffee) {
        super(coffee)
        this.coffee = coffee;
    }

    getCost(): number {
        return this.coffee.getCost() + 0.7;
    }
}
