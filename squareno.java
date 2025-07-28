// write a program that prints the numbers from 1 to 100. But for multiples of three print "Square" instead of the number and for multiples of five print "No". For numbers which are multiples of both three and five print "SquareNo".
public class squareno {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("SquareNo");
            } else if (i % 3 == 0) {
                System.out.println("Square");
            } else if (i % 5 == 0) {
                System.out.println("No");
            } else {
                System.out.println(i);
            }
        }
    }
}
