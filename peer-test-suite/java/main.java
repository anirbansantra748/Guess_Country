public class Main {
    public static void main(String[] args) {
        // Simple Error: Case sensitivity mismatch
        System.out.println("Starting application..."); // fixed: changed 'system' to 'System'

        // High Level Error: Infinite recursion leading to StackOverflowError
        // This represents a logic error that passes compilation (if syntax was fixed) but fails at runtime
        processData(10);
    }

    public static void processData(int value) {
        // Missing base case
        processData(value + 1);
    }
}