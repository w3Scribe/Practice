package main

import (
	"fmt"
	"sync"
)

func sayHello(name string, times int, wg *sync.WaitGroup) {
	// Defer the WaitGroup.Done() call so it happens even if the function panics
	defer wg.Done()

	for i := range times {
		fmt.Println("Hello", name, "times", i)
	}
}

func main() {
	var wg sync.WaitGroup

	// Add 2 to the WaitGroup counter (for 2 goroutines)
	wg.Add(2)

	go sayHello("Suraj", 3, &wg)
	go sayHello("Saurabh", 3, &wg)

	// Wait for both goroutines to finish
	wg.Wait()
	fmt.Println("Main function finished")
}
