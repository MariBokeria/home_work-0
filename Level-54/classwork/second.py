def is_in_range(start, end, number):
    """
    აბრუნებს True, თუ number დასაწყისსა (start) და დასასრულს (end) შორისაა.
    """
    return start <= number <= end

# ტესტები
print(is_in_range(1, 10, 5))   # True
print(is_in_range(1, 10, 11))  # False
print(is_in_range(5, 15, 5))   # True
