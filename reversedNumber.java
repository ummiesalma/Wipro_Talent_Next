import java.util.Scanner;

public class reversedNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = sc.nextInt();

        int reversed = 0;

        while (num != 0) {
            int digit = num % 10;        // Get last digit
            reversed = reversed * 10 + digit; // Build reversed number
            num = num / 10;              // Remove last digit
        }

        System.out.println("Reversed number: " + reversed);

        sc.close();
    }
}

// 1234
// 2 digit