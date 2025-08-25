// write a java program to merge two arrays and sort the merged array in acending order
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
class ArrayListDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Create an ArrayList to hold String elements
        List<Integer> list1 = new ArrayList<>();
        List<Integer> list2 = new ArrayList<>();
        System.out.println("Enter an integer for list1: (5 integers)");
        for(int i = 0; i < 5; i++) {
            
            int input1 = sc.nextInt();
            list1.add(input1);
        }
        // list1.add(10);
        // list1.add(20);
        // list1.add(30);
        System.out.println("Enter an integer for list2:(3 integers)");
        for(int i = 0; i < 3; i++) {
            
            int input1 = sc.nextInt();
            list2.add(input1);
        }
        // list2.add(11);
        // list2.add(22);
        // list2.add(33);

        int size1 = list1.size();
        int size2 = list2.size();

        ArrayList<Integer> mergedList = new ArrayList<>(size1 + size2);
        mergedList.addAll(list1);
        mergedList.addAll(list2);
        System.out.println("Merged List: " + mergedList);
        
        mergedList.sort(null);
        System.out.println("Sorted Merged List: " + mergedList);
    }
}