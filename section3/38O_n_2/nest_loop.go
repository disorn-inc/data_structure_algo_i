package main

import (
	"fmt"
)

func printDouble(array []int)  {
	for _, i := range array {
		for _, j := range array{
			fmt.Println(i,j);
		}
	}
}

func main()  {
	boxes := []int{1,2,3,4,5};
	printDouble(boxes);
}