# pop


# integer_list = [1, 2, 3, 4, 5]

# if integer_list:
#     last_element = integer_list.pop()
#     print(f"Removed and printed: {last_element}")
# else:
#     print("List is empty, cannot pop.")


# string_list = ["apple", "banana", "cherry", "date"]

# if string_list:
#     first_element = string_list.pop(0)
#     print(f"Removed element: {first_element}")
# else:
#     print("List is empty, cannot pop.")


# char_list = ['a', 'b', 'c', 'd', 'e']

# if len(char_list) > 2:
#     popped_element = char_list.pop(2)
#     print(f"Popped element at index 2: {popped_element}")
# else:
#     print("Index 2 is out of range. Cannot pop.")



# tuple_list = [(1, 'a'), (2, 'b'), (3, 'c')]

# if tuple_list:
#     last_tuple = tuple_list.pop()
#     print(f"Removed tuple: {last_tuple}")
# else:
#     print("List is empty, cannot pop.")


# empty_list = []

# try:
#     popped_element = empty_list.pop()
#     print(f"Popped element from empty list: {popped_element}")
# except IndexError:
#     print("Cannot pop from empty list.")


# count


# integer_list = [1, 5, 2, 5, 3, 5, 4, 5]

# count_5 = integer_list.count(5)
# print(f"Number of times 5 appears: {count_5}")



# string_list = ["apple", "banana", "orange", "grape"]

# count_a = sum(s.count('a') for s in string_list)
# print(f"Number of times 'a' appears: {count_a}")



# boolean_list = [True, False, True, False, True, True]

# count_true = boolean_list.count(True)
# print(f"Number of True values: {count_true}")




# nested_list = [[1, 2, 3, 4], [3, 4], [5, 6, 3, 4, 3, 4]]

# sublist_count = sum(1 for sublist in nested_list if sublist == [3, 4])
# print(f"Number of times [3, 4] appears: {sublist_count}")


# max


# integer_list = [10, 5, 8, 15, 3, 12]

# max_number = max(integer_list)
# print(f"The maximum number in the list is: {max_number}")




# string_list = ["apple", "banana", "orange", "grapefruit"]

# max_length = max(len(s) for s in string_list)
# print(f"The maximum string length in the list is: {max_length}")




# age_list = [25, 30, 22, 40, 35]

# oldest_age = max(age_list)
# print(f"The oldest person's age in the list is: {oldest_age}")



# from datetime import datetime

# date_list = [
#     datetime(2023, 7, 1),
#     datetime(2023, 6, 15),
#     datetime(2023, 7, 10),
#     datetime(2023, 5, 20)
# ]

# most_recent_date = max(date_list)
# print(f"The most recent date in the list is: {most_recent_date}")


# min

# numbers = [10, 5, 8, 15, 3, 12]
# smallest_number = min(numbers)
# print(f"The smallest number in the list is: {smallest_number}")



# words = ["apple", "banana", "orange", "grapefruit"]
# shortest_word = min(words, key=len)
# print(f"The shortest word in the list is: {shortest_word}")



# temperatures = [20, 18, 22, 15, 25]
# lowest_temperature = min(temperatures)
# print(f"The lowest temperature in the list is: {lowest_temperature}")



# prices = [25.50, 30.25, 20.75, 18.99]
# minimum_price = min(prices)
# print(f"The minimum price in the list is: {minimum_price}")


# sum



# numbers = [10, 5, 8, 15, 3, 12]
# total_sum = sum(numbers)
# print("Sum of numbers:", total_sum)



# strings = ["apple", "banana", "orange", "grapefruit"]
# total_length = sum(len(word) for word in strings)
# print("Total length of strings:", total_length)



# game_results = [3, 2, 4, 1, 2]
# total_score = sum(game_results)
# print("Total score:", total_score)



# nested_lists = [[1, 2, 3], [4, 5], [6, 7, 8]]
# flattened_sum = sum(sum(sublist) for sublist in nested_lists)
# print("Flattened sum of nested lists:", flattened_sum)



# len


# random_integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# length = len(random_integers)
# print("Length of list:", length)


# weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
# num_days = len(weekdays)
# print("Number of weekdays:", num_days)


# nested_list = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
# total_elements = sum(len(sublist) for sublist in nested_list)
# print("Total number of elements in nested list:", total_elements)
