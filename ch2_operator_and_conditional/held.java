import java.util.*;
// package java_script.ch2_operator_and_conditional;

public class held {
    public static void main(String[] args) {
        {
            int a = 34;
            int b = 23;
            int c = a+b;
            System.out.println("Your sum is : " + c);
        }

          {
            int a = 34;
            int b = 23;
            int c = a*b;
            System.out.println("Your multply is : " + c);
        }
        {
            int a = 0;
            while (a <10) {
                System.out.println("scope of method..");
                a++;
                
            }
        }
    }

    
}