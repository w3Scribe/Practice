def is_anagram(str1, str2):
    """
    Check if two strings are anagrams of each other.
    
    Args:
        str1: First string
        str2: Second string
    
    Returns:
        bool: True if strings are anagrams, False otherwise
    """
    # Remove spaces and convert to lowercase for comparison
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()
    
    # If lengths are different, they can't be anagrams
    if len(str1) != len(str2):
        return False
    
    # Sort characters and compare
    return sorted(str1) == sorted(str2)


def main():
    print("=== Anagram Checker ===\n")
    
    # Test cases
    test_cases = [
        ("listen", "silent"),
        ("triangle", "integral"),
        ("hello", "world"),
        ("python", "typhon"),
        ("The Morse Code", "Here come dots"),
    ]
    
    for str1, str2 in test_cases:
        result = is_anagram(str1, str2)
        print(f'"{str1}" and "{str2}" are {"" if result else "NOT "}anagrams')
    
    # Interactive mode
    print("\n--- Interactive Mode ---")
    while True:
        word1 = input("\nEnter first word (or 'quit' to exit): ")
        if word1.lower() == 'quit':
            break
        
        word2 = input("Enter second word: ")
        
        if is_anagram(word1, word2):
            print(f'✓ "{word1}" and "{word2}" are anagrams!')
        else:
            print(f'✗ "{word1}" and "{word2}" are NOT anagrams')


if __name__ == "__main__":
    main()
