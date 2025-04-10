def small_enough(array, limit):
    return all(x <= limit for x in array)

print(small_enough([66, 101], 200))     
print(small_enough([78, 117, 110, 99], 100))  
