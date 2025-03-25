package main

import "fmt"

func main() {

	Person := make(map[string]string)

	Person["name"] = "John Doe"
	Person["age"] = "30"

	fmt.Printf("Name: %s\n", Person["name"])
	fmt.Printf("Age: %s\n", Person["age"])
}
