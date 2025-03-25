package main

import "fmt"

func main() {
	type Person struct {
		Name string
		Age  int
	}

	User := make(map[string]Person)
	User["user1"] = Person{"John", 30}
	User["user2"] = Person{"Jane", 25}
	User["user3"] = Person{"Doe", 40}

	for key, value := range User {
		fmt.Println("Key:", key)
		fmt.Println("Name:", value.Name)
		fmt.Println("Age:", value.Age)
		fmt.Println()
	}
}
