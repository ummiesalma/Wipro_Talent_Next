// Write a program to demonstrate factorial calculation.
public class factorial {
    public static void main(String[] args) {
        int number = 5; // Example number
        long factorial = 1;

        for (int i = 1; i <= number; i++) {
            factorial *= i;
        }

        System.out.println("Factorial of " + number + " is: " + factorial);
    }
}               

    

