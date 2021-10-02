package main

import (
	"fmt"
	// "time"
)

func findNemo(array []string) {
	// start := time.Now();
	for i := 0; i < len(array); i++ {
		if (array[i] == "nemo") {
			fmt.Println("Found nemo");
			break;
		}
	}
	// t := time.Now()
	// elapsed := t.Sub(start);
	// fmt.Println(elapsed);
}

func main () {
	nemo := []string{"dory","bruce","martin","nemo","gill","bloat","nigel","squirt","darla","hank"};
	findNemo(nemo)
}