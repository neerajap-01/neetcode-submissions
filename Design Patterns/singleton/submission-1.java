static class Singleton {
    private static Singleton instance = null;
    private String value = null;

    private Singleton() {

    }

    public static Singleton getInstance() {
        if(Singleton.instance == null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public String getValue() {
        return this.value;
    }

    public void setValue(String value) {
        this.value = value;
    }
    
}
