public class Main {
    public static void main(String[] args) {
        // Fixed: Changed 'system' to 'System' to match Java's case-sensitive syntax
        System.out.println("Starting application...");

        // High Level Error: Infinite recursion leading to StackOverflowError
        // This represents a logic error that passes compilation (if syntax was fixed) but fails at runtime
        processData(10);
    }

    public static void processData(int value) {
        // Missing base case
        processData(value + 1);
    }
}