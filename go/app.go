package main

import "sync"

func sayHello(name string, times int, wg *sync.WaitGroup) {
	defer wg.Done()
	for i := range times {
		println(name, "says hello", i+1, "times")
	}
}

func main() {
	var wg sync.WaitGroup
	wg.Add(2)

	go sayHello("Alice", 5, &wg)
	go sayHello("Bob", 3, &wg)

	wg.Wait()
	println("Waiting for goroutines to finish...")
}
