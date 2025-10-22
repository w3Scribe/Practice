#include <iostream>
#include <string>
#include <algorithm>
#include <cctype>

using namespace std;

// Function to remove spaces and convert to lowercase
string normalize_string(const string& str) {
    string result;
    for (char c : str) {
        if (c != ' ') {
            result += tolower(c);
        }
    }
    return result;
}

// Function to check if two strings are anagrams
bool is_anagram(const string& str1, const string& str2) {
    // Normalize strings
    string temp1 = normalize_string(str1);
    string temp2 = normalize_string(str2);
    
    // If lengths are different, they can't be anagrams
    if (temp1.length() != temp2.length()) {
        return false;
    }
    
    // Sort characters and compare
    sort(temp1.begin(), temp1.end());
    sort(temp2.begin(), temp2.end());
    
    return temp1 == temp2;
}

int main() {
    cout << "=== Anagram Checker ===" << endl << endl;
    
    // Test cases
    string test_cases[][2] = {
        {"listen", "silent"},
        {"triangle", "integral"},
        {"hello", "world"},
        {"c++", "++c"},
        {"The Morse Code", "Here come dots"}
    };
    
    int num_tests = sizeof(test_cases) / sizeof(test_cases[0]);
    
    for (int i = 0; i < num_tests; i++) {
        bool result = is_anagram(test_cases[i][0], test_cases[i][1]);
        cout << "\"" << test_cases[i][0] << "\" and \"" << test_cases[i][1] 
             << "\" are " << (result ? "" : "NOT ") << "anagrams" << endl;
    }
    
    // Interactive mode
    cout << endl << "--- Interactive Mode ---" << endl;
    string word1, word2;
    
    while (true) {
        cout << "\nEnter first word (or 'quit' to exit): ";
        getline(cin, word1);
        
        if (word1 == "quit") {
            break;
        }
        
        cout << "Enter second word: ";
        getline(cin, word2);
        
        if (is_anagram(word1, word2)) {
            cout << "✓ \"" << word1 << "\" and \"" << word2 << "\" are anagrams!" << endl;
        } else {
            cout << "✗ \"" << word1 << "\" and \"" << word2 << "\" are NOT anagrams" << endl;
        }
    }
    
    return 0;
}
