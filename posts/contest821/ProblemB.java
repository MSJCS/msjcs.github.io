import java.io.*;
import java.util.*;
import java.lang.*;
public class ProblemB{
    public static void main (String [] args) throws IOException {
        
        BufferedReader f = new BufferedReader(new InputStreamReader(System.in));
        
        //BufferedReader f = new BufferedReader(new FileReader("README.txt"));
        int n = Integer.parseInt(f.readLine());
        Stack<Integer> stack = new Stack<Integer>();
        for(int i = 0; i < n; i++){
            System.out.println(stack.size() + 1);
            int temp = Integer.parseInt(f.readLine());
            while(stack.isEmpty() == false && stack.peek() <= temp){
                stack.pop();
            }
            stack.push(temp);
        }
    }
}
