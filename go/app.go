// Eploring the GO Array and Slices

package main

import (
	"fmt"
	"sort"
)

func main() {
	arr := [5]int{1, 2, 3, 4, 5}  // Array of integers
	slice := []int{1, 2, 3, 4, 5} // Slice of integers

	// Modifying the first element of the array and slice
	arr[0] = 10
	slice[0] = 10
	// Adding an element to the slice
	slice = append(slice, 6)
	lst := slice[len(slice)-1]

	// Create a copy and sort it
	sortedSlice := make([]int, len(slice))
	copy(sortedSlice, slice)
	sort.Ints(sortedSlice)

	fmt.Println("Array:", arr)                                    // Print the array
	fmt.Println("Slice:", slice)                                  // Print the slice
	fmt.Println("Last element of slice:", lst)                    // Print the last element of the slice
	fmt.Println("Sorted slice:", sortedSlice)                     // Print the sorted slice
	fmt.Println("First element of sorted slice:", sortedSlice[0]) // Print the first element of the sorted slice

}
