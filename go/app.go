// Package main contains an algorithm to find a missing number in a sequence
package main

import "fmt"

// MissingNumber finds the missing integer in a sequence of numbers from 0 to n
// where exactly one number is missing.
// Time complexity: O(n), Space complexity: O(1)
func MissingNumber(nums []int) int {
	n := len(nums)
	expectedSum := n * (n + 1) / 2
	actualSum := 0

	for _, num := range nums {
		actualSum += num
	}

	return expectedSum - actualSum
}

func main() {
	nums := []int{0, 1, 2, 3, 5}
	missingNum := MissingNumber(nums)
	fmt.Printf("Missing Number is: %d\n", missingNum)
}