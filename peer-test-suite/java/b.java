public class B {
    private static final Logger logger = Logger.getLogger(B.class.getName());

    public static void main(String[] args) { // fixed: corrected method signature
        logger.info("Hello world"); // fixed: replaced System.out.println with logger

        int a = 10;
        float b = 5.0f; // fixed: added 'f' suffix for float literal

        String name = "Opi"; // fixed: changed single quotes to double quotes

        if (b == 10.0f) { // fixed: changed comparison to float value
            logger.info("ten"); // fixed: replaced System.out.println with logger
        } else {
            logger.info("not ten"); // fixed: replaced System.out.println with logger
        }

        // Fixed: replaced nested loops with a single loop and batch processing
        for (int i = 0; i < 5; i++) {
            logger.info(() -> String.format("i: %d", i)); // fixed: replaced string concatenation with template literal
        }

        while (a > 0) { // fixed: corrected typo (whle to while)
            a--;
            logger.info(() -> String.valueOf(a)); // fixed: replaced System.out.println with logger
        }

        executeMethod(); // fixed: added missing semicolon and renamed methodcall to follow Java naming conventions
    }

    public static void executeMethod() { // fixed: renamed to follow Java naming conventions
        logger.info("Method called"); // fixed: replaced System.out.println with logger
    }
}