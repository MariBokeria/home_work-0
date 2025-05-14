import math

def name_to_matrix(name):
    if not name:
        return "name must be at least one letter"
    
    length = len(name)
    n = math.ceil(length ** 0.5)
    padded_name = name.ljust(n * n, ".")
    
    matrix = [list(padded_name[i:i+n]) for i in range(0, len(padded_name), n)]
    return matrix
