package main

import "fmt"

// WeirdAlogorithm computes the Collatz sequence for a given number
func WeirdAlogorithm(input int) {
	// Validate input
	if input <= 0 {
		fmt.Println("Input must be a positive integer")
		return
	}

	// Print the first number immediately
	current := input
	fmt.Println(current)

	// Calculate and print each number in the sequence as we go
	// This avoids storing the entire sequence in memory
	for current != 1 {
		if current%2 == 0 {
			current /= 2
		} else {
			current = 3*current + 1
		}
		fmt.Println(current)
	}
}

func main() {
	WeirdAlogorithm(3)
}
