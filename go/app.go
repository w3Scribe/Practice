package main

import "fmt"

func main() {
	const name = "Gopher"
	const nameLen = len(name)
	fmt.Printf("Hello, %s! Your name contains %d characters.\n", name, nameLen)
}
