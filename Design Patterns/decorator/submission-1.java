abstract class Coffee {
    public abstract double getCost();
}

class SimpleCoffee extends Coffee {
    @Override
    public double getCost() {
        return 1.1;
    }
}

abstract class CoffeeDecorator extends Coffee {
    protected Coffee decoratedCoffee;

    public CoffeeDecorator(Coffee coffee) {
        this.decoratedCoffee = coffee;
    }

    public double getCost() {
        return decoratedCoffee.getCost();
    }
}

class MilkDecorator extends CoffeeDecorator {
    // Implement the Milk decorator
    protected Coffee coffee;

    public MilkDecorator(Coffee coffee) {
        super(coffee);
        this.coffee = coffee;
    }

    public double getCost() {
        return this.coffee.getCost() + 0.5;
    }
}

class SugarDecorator extends CoffeeDecorator {
    // Implement the Sugar decorator
    protected Coffee coffee;

    public SugarDecorator(Coffee coffee) {
        super(coffee);
        this.coffee = coffee;
    }

    public double getCost() {
        return this.coffee.getCost() + 0.2;
    }
}

class CreamDecorator extends CoffeeDecorator {
    // Implement the Cream decorator
    protected Coffee coffee;

    public CreamDecorator(Coffee coffee) {
        super(coffee);
        this.coffee = coffee;
    }

    public double getCost() {
        return this.coffee.getCost() + 0.7;
    }
}
