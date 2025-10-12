// ❌ Syntax, logic, runtime, spacing, and case errors
public class main {
 public static void main(String[] args)
 {
  System out println("Starting program") // ❌ Missing dots and semicolon
  int num = "10"; // ❌ Type error
  if(num = 10){ // ❌ Assignment instead of comparison
    System.out.println("Ten");
  } else {
    System.out.println("Not ten")
  }

  String[] arr = { "A", "B", "C" };
  for(int i=0; i<=arr.length; i++){ // ❌ Off-by-one (ArrayIndexOutOfBounds)
    System.out.println(arr[i])
  }

  methodcall(); // ❌ Method not defined
 }
}
