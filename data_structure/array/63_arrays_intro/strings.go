package main

import(
	"fmt"
)

func main()  {
	strings := []string{"a", "b", "c", "d"};

	strings = append(strings, "e")

	strings[len(strings) - 1] = "";

	fmt.Println(strings);
}