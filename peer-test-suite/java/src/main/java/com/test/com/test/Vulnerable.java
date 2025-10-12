
import java.util.ArrayList;
import java.io.*;

public class Vulnerable {
    // unsafe deserialization example
    public static Object deserialize(byte[] data) {
        try {
            ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(data));
// PEER-AUTOFIX start [findingId=undefined rule=unsafe-deserialization-java (CWE-502) analyzer=autofix ts=1760254111341]
//             return ois.readObject(); // unsafe deserialization
            return ois.readObject(); // unsafe deserialization
// PEER-AUTOFIX end [findingId=undefined]
// PEER-AUTOFIX start [findingId=undefined rule=catching-generic-exception analyzer=autofix ts=1760254111341]
//         } catch (Exception e) {
        } catch (Exception e) {
// PEER-AUTOFIX end [findingId=undefined]
            return null;
        }
    }

    public static void main(String[] args) {
        // insecure file read without validation
        try {
// PEER-AUTOFIX start [findingId=undefined rule=resource-not-closed analyzer=autofix ts=1760254111341]
//             BufferedReader br = new BufferedReader(new FileReader("../etc/passwd"));
            BufferedReader br = new BufferedReader(new FileReader("../etc/passwd"));
// PEER-AUTOFIX end [findingId=undefined]
// PEER-AUTOFIX start [findingId=undefined rule=system-out-println analyzer=autofix ts=1760254111342]
//             System.out.println(br.readLine());
            System.out.println(br.readLine());
// PEER-AUTOFIX end [findingId=undefined]
// PEER-AUTOFIX start [findingId=undefined rule=catching-generic-exception analyzer=autofix ts=1760254111341]
//         } catch (Exception e) {
        } catch (Exception e) {
// PEER-AUTOFIX end [findingId=undefined]
// PEER-AUTOFIX start [findingId=undefined rule=system-out-println analyzer=autofix ts=1760254111342]
//             System.out.println("err");
            System.out.println("err");
// PEER-AUTOFIX end [findingId=undefined]
        }
    }
}
