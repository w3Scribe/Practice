// Missing Number alogorithm

package main

func MissingNumber(nums []int) {
	totalNums := len(nums) + 1
	Sum := (totalNums * (totalNums - 1)) / 2
	ActualSum := 0

	for _, i := range nums {
		ActualSum += i
	}

	MissingNum := Sum - ActualSum
	println("Missing Number is: ", MissingNum)
}


func main() {
	nums := []int{0, 1, 2, 3, 5}
	MissingNumber(nums)
}