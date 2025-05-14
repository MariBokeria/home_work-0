def solve(a, b):
    result = ""
    
    # Add characters from 'a' that are not in 'b'
    for char in a:
        if char not in b:
            result += char
    
    # Add characters from 'b' that are not in 'a'
    for char in b:
        if char not in a:
            result += char
    
    return result
