def likes(names):
    n = len(names)
    if n == 0:
        return "no one likes this"
    elif n == 1:
        return f"{names[0]} likes this"
    elif n == 2:
        return f"{names[0]} and {names[1]} like this"
    elif n == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {n-2} others like this"

# Example test cases
print(likes([]))                                # "no one likes this"
print(likes(["Peter"]))                         # "Peter likes this"
print(likes(["Jacob", "Alex"]))                 # "Jacob and Alex like this"
print(likes(["Max", "John", "Mark"]))           # "Max, John and Mark like this"
print(likes(["Alex", "Jacob", "Mark", "Max"]))  # "Alex, Jacob and 2 others like this"
