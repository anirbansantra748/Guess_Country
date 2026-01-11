def analyze_data(data, cache=None):
    # Fixed: Changed mutable default argument to None and initialized as empty list
    if cache is None:
        cache = []
    cache.append(data)
    return len(cache)

def main():
    # Fixed: Corrected case sensitivity in print function
    print("Starting analysis")

    print(analyze_data("User1"))
    print(analyze_data("User2"))  # Fixed: Now returns 1 as expected with fresh cache

if __name__ == "__main__":
    main()