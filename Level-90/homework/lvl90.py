def battle(string1, string2):
    # Function to calculate the total power of a string
    def calculate_power(s):
        return sum(ord(char) - ord('A') + 1 for char in s)

    # Calculate the total power for both strings
    power1 = calculate_power(string1)
    power2 = calculate_power(string2)

    # Compare the powers and return the result
    if power1 > power2:
        return string1
    elif power2 > power1:
        return string2
    else:
        return "Tie!"

# Example Test Cases
print(battle("ONE", "TWO"))  # Output: "TWO"
print(battle("ONE", "NEO"))  # Output: "Tie!"
