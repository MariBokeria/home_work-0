def solve(a, b):
    # Collect characters from a not in b
    result_a = ''.join([char for char in a if char not in b])
    
    # Collect characters from b not in a
    result_b = ''.join([char for char in b if char not in a])
    
    # Return the concatenated result
    return result_a + result_b
