def analyze_data(data, cache=None):
    # Fixed: Changed mutable default argument to None
    # Initialize cache as empty list if not provided
    if cache is None:
        cache = []
    cache.append(data)
    return len(cache)

def main():
    # Fixed: Corrected case sensitivity in print function
    print("Starting analysis")

    print(analyze_data("User1"))
    print(analyze_data("User2")) # Will return 2, expected 1 if creating fresh cache

if __name__ == "__main__":
    main()