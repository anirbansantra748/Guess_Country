package main

import (
	"fmt"
	"sync"
)

func main() {
	// Fixed: Corrected function name to exported 'Println'
	fmt.Println("Starting Processor")

	var wg sync.WaitGroup
	data := make(map[string]int)
	var mu sync.Mutex // Added mutex for concurrent map access

	// Optimized: Using a single loop with mutex protection
	// Fixed: Nested loops issue by processing all items in one loop
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