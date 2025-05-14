def solve(a, b):
    result_a = ''.join([char for char in a if char not in b])
    result_b = ''.join([char for char in b if char not in a])
    return result_a + result_b
