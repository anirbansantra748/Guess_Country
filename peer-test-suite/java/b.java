public class B {
    private static final Logger logger = Logger.getLogger(B.class.getName());

    public static void main(String[] args) { // fixed: corrected missing semicolon and added proper method signature
        logger.info("Hello world"); // fixed: replaced System.out.println with logger

        int a = 10;
        float b = 5.0f; // fixed: added 'f' to make it a float literal

        String name = "Opi";
        if (b == 10.0f) { // fixed: changed variable comparison to proper float comparison
            logger.info("ten"); // fixed: replaced System.out.println with logger
        } else {
            logger.info("not ten"); // fixed: replaced System.out.println with logger
        }

        // Optimized nested loop by using a single loop with StringBuilder
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 5; i++) {
            sb.append("i:").append(i).append("\n");
        }
        logger.info(sb.toString()); // fixed: replaced System.out.println with logger and used template literals equivalent

        while (a > 0) {
            a--;
            logger.info(String.valueOf(a)); // fixed: replaced System.out.println with logger and used template literals equivalent
        }

        methodCall(); // fixed: corrected method name to follow Java naming conventions
    }

    public static void methodCall() { // fixed: corrected method name to follow Java naming conventions
        logger.info("Method called"); // fixed: replaced System.out.println with logger
    }
}