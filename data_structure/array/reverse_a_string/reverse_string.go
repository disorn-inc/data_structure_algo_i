package main

import (
	"fmt"
)

func reverse(str string) string{
	if (len(str) < 2 ) {
		return "Can't reverse string"
	} else {
		revesre_str := "";
		for i := len(str) - 1; i >= 0; i-- {
			revesre_str = revesre_str + string(str[i]);
		}
		return revesre_str;
	} 
}

func main () {
	test1 := "abcde";
	fmt.Println(reverse(test1));
}