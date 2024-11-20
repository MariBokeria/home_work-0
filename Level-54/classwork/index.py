def compare_first_two_chars(str1, str2):
    """
    აბრუნებს True, თუ str1 და str2-ის პირველი და მეორე ასოები ტოლია, თუ არა False.
    """
    return str1[:2] == str2[:2]

# ტესტები
print(compare_first_two_chars("hello", "heaven"))  # True
print(compare_first_two_chars("world", "word"))    # True
print(compare_first_two_chars("test", "best"))     # False
