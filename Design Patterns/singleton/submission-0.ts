class Singleton {
    private static instance: Singleton = null
    private value: string = null

    /**
     * In JavaScript consider this method as the 'getInstance'
     */
    constructor() {
        if (Singleton.instance === null) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    /**
     * @return {string}
     */
    getValue(): string {
        return this.value;
    }

    /**
     * @param {string} value
     * @return {void}
     */
    setValue(value: string): void {
        this.value = value;
    }
}