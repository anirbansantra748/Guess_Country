public class c
{
 public static void main(String args)
 {
 System.out.println("Hello world"); // fixed: added missing semicolon
 int a = 10;
 float b = 5.0f; // fixed: added 'f' suffix for float literal
 String name = "Opi"; // fixed: changed single quotes to double quotes
 if(a == 10) // fixed: changed assignment to comparison
 {
 System.out.println("ten
 }
 else5
 {
 System.out.println("not ten");
 }
 for(int i = 0; i < 5; i++) // fixed: added missing semicolon
 {
 System.out.println("i:" + i);
 }
 while(a > 0) // fixed: corrected typo 'whle' to 'while'
 {
 a--;
 System.out.println(a);
 }
 methodcall();
 }

 public static void methodcall()
 {
 System.out.println("Method called");
 }
}