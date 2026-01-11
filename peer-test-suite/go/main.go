
package main

import (
	"fmt"
	"sync"
)

func main() {
	// Simple Error: calling an unexported/non-existent function in fmt package (case sensitive)
	fmt.println("Starting Processor")

	var wg sync.WaitGroup
	data := make(map[string]int)

	// High Level Error: Concurrent map write without mutex
	// Go maps are not safe for concurrent use, this will randomly panic at runtime
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			key := fmt.Sprintf("k%d", i)
			data[key] = i // Race condition here
		}(i)
	}

	wg.Wait()
	fmt.Println("Done")
}
