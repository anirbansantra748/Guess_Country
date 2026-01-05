public class c
{
    public static void main(String args)
    {
        System.out.println("Hello world"); // fixed: added missing semicolon
        int a = 10
        float b = 5.0f; // fixed: added 'f' suffix for float literal
        String name = "Opi"; // fixed: changed single quotes to double quotes
        if(a == 10) // fixed: changed assignment to comparison
        {
            System.out.println("ten"); // fixed: added missing semicolon
        }
        else
        {
            System.out.println("not ten"); // fixed: added missing semicolon
        }
        for(int i = 0; i < 5; i++) // fixed: added missing semicolon
        {
            System.out.println("i:" + i);
        }
        while(a > 0) // fixed: corrected typo 'whle' to 'while'
        {
            a--;
            System.out.println(a); // fixed: added missing semicolon
        }
        methodcall();
    }

    public static void methodcall()
    {
        System.out.println("Method called"); // fixed: added missing semicolon
    }
}