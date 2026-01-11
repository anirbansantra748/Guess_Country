
def analyze_data(data, cache=[]):
    # High Level Error: Mutable default argument 'cache' retains state between calls
    # leading to unexpected data leakage across different function calls.
    cache.append(data)
    return len(cache)

def main():
    # Simple Error: Syntax error (Case sensitivity in function name)
    Print("Starting analysis")
    
    print(analyze_data("User1"))
    print(analyze_data("User2")) # Will return 2, expected 1 if creating fresh cache

if __name__ == "__main__":
    main()
