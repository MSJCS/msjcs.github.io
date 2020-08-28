import java.io.*;
import java.util.*;
import java.lang.*;
public class ProblemA{
    public static void main (String [] args) throws IOException {
        
        BufferedReader f = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(f.readLine());
        ArrayList<Integer> list = new ArrayList<Integer>();
        for(int i = 0; i < n; i++){
            int temp = Integer.parseInt(f.readLine());
            int j = 0;
            for(j = 0; j < list.size(); j++){
                if(temp < list.get(j)){
                    break;
                }
            }
            list.add(j, temp);
            System.out.println(j + 1);
        }
    }
}
