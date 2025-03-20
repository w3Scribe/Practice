package main

import "fmt"

func WeirdAlogorithm(input int) {

	if input <= 0 {
		fmt.Println("Input must be a positive integer")
		return
	}

	current := input
	fmt.Println(current)

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
