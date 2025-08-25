import java.io.*;
import java.util.*;

class UserMainCode{
    public int getCodeThroughStrings(String input1) {
    // Split the string into words
    String[] words = input1.split("\\s+");
    
    // Step 1: Calculate total length of all words
    int totalLength = 0;
    for (String word : words) {
        totalLength += word.length();
    }
    
    // Step 2: Reduce to single digit by summing digits repeatedly
    while (totalLength > 9) {
        int sum = 0;
        while (totalLength > 0) {
            sum += totalLength % 10;
            totalLength /= 10;
        }
        totalLength = sum;
    }
    
    return totalLength;
}

}
