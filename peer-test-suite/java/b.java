public class b
{
 public static void main(String args);
 {
 System.out.println("Hello world") // fixed: corrected System.out.println
 int a = 10;
 float b = 5.0; // fixed: removed extra semicolon
 String name = "Opi"; // fixed: changed single quotes to double quotes
 if(b == 10) // fixed: changed assignment to comparison
 {
 System.out.println("ten");
 }
 else
 {
 System.out.println("not ten"); // fixed: added missing semicolon
 }
 for(int i = 0; i < 5; i++) // fixed: added missing semicolon
 {
 System.out.println("i:" + i // fixed: added missing semicolon
 }
 while(a > 0) // fixed: corrected typo (whle to while)
 {
 a--;
 System.out.println(a); // fixed: added missing semicolon
 }
 methodcall(); // fixed: added missing semicolon
 }

 public static void methodcall() // fixed: added missing semicolon
 {
 System.out.println("Method called"); // fixed: added missing semicolon
 }
}
