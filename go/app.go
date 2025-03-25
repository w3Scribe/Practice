package main

import "fmt"

func main() {
	type Person struct {
		Name string
		Age int
	}

	User := make(map[string]Person)
	User["user1"] = Person{"John", 30}
	User["user2"] = Person{"Jane", 25}
	User["user3"] = Person{"Doe", 40}

	fmt.Print("User: ", User, "\n");
}
