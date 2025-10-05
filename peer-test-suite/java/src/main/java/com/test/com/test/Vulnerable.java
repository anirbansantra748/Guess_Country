
import java.util.ArrayList;
import java.io.*;

public class Vulnerable {
    // unsafe deserialization example
    public static Object deserialize(byte[] data) {
        try {
            ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(data));
            return ois.readObject(); // unsafe deserialization
        } catch (Exception e) {
            return null;
        }
    }

    public static void main(String[] args) {
        // insecure file read without validation
        try {
            BufferedReader br = new BufferedReader(new FileReader("../etc/passwd"));
            System.out.println(br.readLine());
        } catch (Exception e) {
            System.out.println("err");
        }
    }
}
