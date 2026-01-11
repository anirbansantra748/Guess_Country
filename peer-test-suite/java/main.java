public class Main {
    public static void main(String[] args) {
        // Simple Error: 'system' should be 'System' (case-sensitive)
        system.out.println("Starting application...");

        // High Level Error: Infinite recursion leading to StackOverflowError
        processData(10);
    }

    public static void processData(int value) {
        // Missing base case - will cause StackOverflowError
        processData(value + 1);
    }
}