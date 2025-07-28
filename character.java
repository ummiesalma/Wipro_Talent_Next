// 39.	Program to accept a character and print it is a vowel or not.   ‘A’    9
// 40.	Program to accept a character and print it is a vowel or consonant.  ‘a’      ‘s’  
// 41.	Program to accept a character and print it is a vowel, consonant or a digit.
public class character {
    
    public static void main(String[] args) {
        char ch = 'a'; // Example character

        // Check if the character is a vowel, consonant, or digit
        if (Character.isDigit(ch)) {
            System.out.println(ch + " is a digit.");
        } else if ("AEIOUaeiou".indexOf(ch) != -1) {
            System.out.println(ch + " is a vowel.");
        } else {
            System.out.println(ch + " is a consonant.");
        }
    }   
}
