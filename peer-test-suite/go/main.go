package main

import (
	"fmt"
	"sync"
)

func main() {
	// Simple Error: calling an unexported/non-existent function in fmt package (case sensitive)
	fmt.Println("Starting Processor") // fixed: changed 'println' to 'Println' (case sensitive)

	var wg sync.WaitGroup
	data := make(map[string]int)
	var mu sync.Mutex // Added mutex for concurrent map access

	// High Level Error: Concurrent map write without mutex
	// Go maps are not safe for concurrent use, this will randomly panic at runtime
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			key := fmt.Sprintf("k%d", i)
			mu.Lock() // Lock before map access
			data[key] = i
			mu.Unlock() // Unlock after map access
		}(i)
	}

	wg.Wait()
	fmt.Println("Done")
}