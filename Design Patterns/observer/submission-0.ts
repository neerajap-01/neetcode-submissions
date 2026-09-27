class Observer {
    /**
     * @param {string} itemName
     */
    notify(itemName: string): void {
        throw new Error("Method 'notify()' must be implemented.");
    }
}

class Customer extends Observer {
    private name: string
    private notifications: number
    /**
     * @param {string} name
     */
    constructor(name: string) {
        super();
        this.name = name;
        this.notifications = 0;
    }

    /**
     * @param {string} itemName
     */
    notify(itemName: string): void {
        this.notifications += 1;
    }

    /**
     * @return {number}
     */
    countNotifications(): number {
        return this.notifications;
    }
}

class OnlineStoreItem {
    private itemName: string;
    private stock: number;
    private customerObservers: Set<Observer> = new Set();
    /**
     * @param {string} itemName
     * @param {number} stock
     */
    constructor(itemName: string, stock: number) {
        this.itemName = itemName;
        this.stock = stock;
    }

    /**
     * @param {Observer} observer
     */
    subscribe(observer: Observer) {
        this.customerObservers.add(observer)
    }

    /**
     * @param {Observer} observer
     */
    unsubscribe(observer: Observer): void {
        this.customerObservers.delete(observer)
    }

    /**
     * @param {number} newStock
     */
    updateStock(newStock: number): void {
        if(this.stock === 0 && newStock > 0) {
            for(let cust of this.customerObservers) {
                cust.notify(this.itemName)
            }
        }
        this.stock = newStock;
    }
}
