package main

func WeirdAlogorithm(input int) {
	current := input
	list := []int{current}

	for current != 1 {
		if current%2 == 0 {
			current = current / 2
		} else {
			current = 3*current + 1
		}

		list = append(list, current)
	}
	for _, num := range list {
		println(num)
	}
}

func main() {
	WeirdAlogorithm(3)
}
