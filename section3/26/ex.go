package main

import "fmt"

func findNemo(array []string) {
	for i := 0; i < len(array); i++ {
		if (array[i] == "nemo") {
			fmt.Print("Found nemo")
		}
	}
}

func main () {
	nemo := []string{"nemo"};
	findNemo(nemo)
}