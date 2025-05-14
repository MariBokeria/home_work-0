def largest_sum(s):
    # Split the string by '0' to get the substrings
    substrings = s.split('0')
    
    max_sum = 0  # Variable to track the largest sum
    
    # Iterate over each substring
    for substring in substrings:
        # If the substring is not empty, calculate the sum of its digits
        if substring:
            current_sum = sum(int(digit) for digit in substring)
            max_sum = max(max_sum, current_sum)  # Update max_sum if we find a larger sum
    
    return max_sum
