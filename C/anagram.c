#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

#define MAX_LEN 256

// Function to compare characters for qsort
int compare_chars(const void *a, const void *b) {
    return (*(char *)a - *(char *)b);
}

// Function to remove spaces and convert to lowercase
void normalize_string(char *dest, const char *src) {
    int j = 0;
    for (int i = 0; src[i] != '\0'; i++) {
        if (src[i] != ' ') {
            dest[j++] = tolower(src[i]);
        }
    }
    dest[j] = '\0';
}

// Function to check if two strings are anagrams
int is_anagram(const char *str1, const char *str2) {
    char temp1[MAX_LEN], temp2[MAX_LEN];
    
    // Normalize strings
    normalize_string(temp1, str1);
    normalize_string(temp2, str2);
    
    // If lengths are different, they can't be anagrams
    int len1 = strlen(temp1);
    int len2 = strlen(temp2);
    
    if (len1 != len2) {
        return 0;
    }
    
    // Sort characters
    qsort(temp1, len1, sizeof(char), compare_chars);
    qsort(temp2, len2, sizeof(char), compare_chars);
    
    // Compare sorted strings
    return strcmp(temp1, temp2) == 0;
}

int main() {
    printf("=== Anagram Checker ===\n\n");
    
    // Test cases
    const char *test_cases[][2] = {
        {"listen", "silent"},
        {"triangle", "integral"},
        {"hello", "world"},
        {"programming", "grammingpro"},
        {"The Morse Code", "Here come dots"}
    };
    
    int num_tests = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < num_tests; i++) {
        int result = is_anagram(test_cases[i][0], test_cases[i][1]);
        printf("\"%s\" and \"%s\" are %sanagrams\n", 
               test_cases[i][0], test_cases[i][1], 
               result ? "" : "NOT ");
    }
    
    // Interactive mode
    printf("\n--- Interactive Mode ---\n");
    char word1[MAX_LEN], word2[MAX_LEN];
    
    while (1) {
        printf("\nEnter first word (or 'quit' to exit): ");
        if (fgets(word1, MAX_LEN, stdin) == NULL) {
            break;
        }
        
        // Remove newline
        word1[strcspn(word1, "\n")] = '\0';
        
        if (strcmp(word1, "quit") == 0) {
            break;
        }
        
        printf("Enter second word: ");
        if (fgets(word2, MAX_LEN, stdin) == NULL) {
            break;
        }
        
        // Remove newline
        word2[strcspn(word2, "\n")] = '\0';
        
        if (is_anagram(word1, word2)) {
            printf("✓ \"%s\" and \"%s\" are anagrams!\n", word1, word2);
        } else {
            printf("✗ \"%s\" and \"%s\" are NOT anagrams\n", word1, word2);
        }
    }
    
    return 0;
}
