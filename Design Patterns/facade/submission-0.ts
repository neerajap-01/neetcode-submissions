class Order {
    private contents: string;
    private takeOut: boolean;
    /**
     * @param {string} contents
     * @param {boolean} takeOut
     */
    constructor(contents: string, takeOut: boolean) {
        this.contents = contents;
        this.takeOut = takeOut;
    }

    /**
     * @return {string}
     */
    getOrder(): string {
        return this.contents;
    }

    /**
     * @return {boolean}
     */
    isTakeOut(): boolean {
        return this.takeOut;
    }
}

class Cashier {
    /**
     * @param {string} contents
     * @param {boolean} takeOut
     * @return {Order}
     */
    takeOrder(contents: string, takeOut: boolean): Order {
        return new Order(contents, takeOut);
    }
}

class Food {
    private contents: string;
    /**
     * @param {string} order
     */
    constructor(order: string) {
        this.contents = order;
    }

    /**
     * @return {string}
     */
    getFood(): string {
        return this.contents;
    }
}

class Chef {
    /**
     * @param {Order} order
     * @return {Food}
     */
    prepareFood(order: Order): Food {
        return new Food(order.getOrder());
    }
}

class PackagedFood extends Food {
    /**
     * @param {Food} food
     */
    constructor(food: Food) {
        super(food.getFood() + ' in a bag');
    }
}

class KitchenStaff {
    /**
     * @param {Food} food
     * @return {PackagedFood}
     */
    packageOrder(food: Food): PackagedFood {
        return new PackagedFood(food);
    }
}

class DriveThruFacade {
    private cashier: Cashier;
    private chef: Chef;
    private kitchenStaff: KitchenStaff;

    constructor() {
        this.cashier = new Cashier();
        this.chef = new Chef();
        this.kitchenStaff = new KitchenStaff();
    }

    /**
     * @param {string} orderContents
     * @param {boolean} takeOut
     * @return {Food}
     */
    takeOrder(orderContents: string, takeOut: boolean): Food {
        // Implement method here
        const order = this.cashier.takeOrder(orderContents, takeOut);
        let food = this.chef.prepareFood(order);

        if(order.isTakeOut()) {
            food = this.kitchenStaff.packageOrder(food);
        }

        return food;
    }
}
