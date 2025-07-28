// write a program that prints the numbers from 1 to 100. But for multiples of three print "Super" instead of the number and for the multiples of five print "Java". For numbers which are multiples of both three and five print "SuperJava".
public class Super {

    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("SuperJava");
            } else if (i % 3 == 0) {
                System.out.println("Super");
            } else if (i % 5 == 0) {
                System.out.println("Java");
            } else {
                System.out.println(i);
            }
        }
    }
}