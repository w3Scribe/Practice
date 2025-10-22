package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strings"
)

// isAnagram checks if two strings are anagrams of each other
func isAnagram(str1, str2 string) bool {
	// Remove spaces and convert to lowercase
	str1 = strings.ReplaceAll(strings.ToLower(str1), " ", "")
	str2 = strings.ReplaceAll(strings.ToLower(str2), " ", "")

	// If lengths are different, they can't be anagrams
	if len(str1) != len(str2) {
		return false
	}

	// Sort characters and compare
	return sortString(str1) == sortString(str2)
}

// sortString sorts the characters in a string
func sortString(s string) string {
	runes := []rune(s)
	sort.Slice(runes, func(i, j int) bool {
		return runes[i] < runes[j]
	})
	return string(runes)
}

func main() {
	fmt.Println("=== Anagram Checker ===\n")

	// Test cases
	testCases := []struct {
		str1, str2 string
	}{
		{"listen", "silent"},
		{"triangle", "integral"},
		{"hello", "world"},
		{"golang", "anglog"},
		{"The Morse Code", "Here come dots"},
	}

	for _, tc := range testCases {
		result := isAnagram(tc.str1, tc.str2)
		status := ""
		if !result {
			status = "NOT "
		}
		fmt.Printf("\"%s\" and \"%s\" are %sanagrams\n", tc.str1, tc.str2, status)
	}

	// Interactive mode
	fmt.Println("\n--- Interactive Mode ---")
	scanner := bufio.NewScanner(os.Stdin)

	for {
		fmt.Print("\nEnter first word (or 'quit' to exit): ")
		if !scanner.Scan() {
			break
		}
		word1 := scanner.Text()
		if strings.ToLower(word1) == "quit" {
			break
		}

		fmt.Print("Enter second word: ")
		if !scanner.Scan() {
			break
		}
		word2 := scanner.Text()

		if isAnagram(word1, word2) {
			fmt.Printf("✓ \"%s\" and \"%s\" are anagrams!\n", word1, word2)
		} else {
			fmt.Printf("✗ \"%s\" and \"%s\" are NOT anagrams\n", word1, word2)
		}
	}
}
