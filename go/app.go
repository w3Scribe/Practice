// Eploring golang variables and constants

package main

func main() {
	// Variables
	var name string = "John Doe" // global, package level variable
	age := 30                    // short variable declaration, local variable

	city, country := "New York", "USA" // multiple assignment

	// Constants
	const pi = 3.14 // constant, unchangeable value
	const constantName string = "Suraj"

	// Printing variables and constants
	println("Name:", name)
	println("Age:", age)
	println("City:", city)
	println("Country:", country)
	println("Pi:", pi)
	println("Constant Name:", constantName)

}
