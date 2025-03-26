def count_zeros(N):
    zero_count = 0
    # Loop through all numbers from 1 to N
    for num in range(1, N + 1):
        # Convert the number to a string and count the '0's
        zero_count += str(num).count('0')
    return zero_count

# Example test cases
print(count_zeros(10))   # Output: 1
print(count_zeros(20))   # Output: 2
print(count_zeros(100))  # Output: 11
print(count_zeros(200))  # Output: 31
