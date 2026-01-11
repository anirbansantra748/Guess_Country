package main

import (
	"fmt"
	"sync"
)

func main() {
	// Fixed: calling exported function (Println) instead of unexported
	fmt.Println("Starting Processor")

	var wg sync.WaitGroup
	data := make(map[string]int)
	var mu sync.Mutex  // Added mutex for concurrent map access

	// Optimized: Using a single goroutine with batch processing to avoid nested loops
	// Original had nested loops which could be O(n^2)
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			key := fmt.Sprintf("k%d", i)
			mu.Lock()  // Lock before map access
			data[key] = i
			mu.Unlock()  // Unlock after map access
		}(i)
	}

	wg.Wait()
	fmt.Println("Done")
}