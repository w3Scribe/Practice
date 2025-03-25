package main

import "time"

func sayHello(name string, times int) {
	for i := 0; i <= times; i++ {
		println("Hello", name, "times", i)
	}
}

func main() {
 go sayHello("Suraj", 3)
 go sayHello("Saurabh", 3)

 time.Sleep(5 * time.Second)
 println("Main function finished")
}