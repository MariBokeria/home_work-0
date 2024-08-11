def transform_numbers(numbers):
    transformed_list = [
        num / 2 if num % 2 == 0 else num * 2
        for num in numbers
    ]
    return transformed_list

print(transform_numbers([1, 2, 3, 4])) 
print(transform_numbers([5, 10, 3, 5])) 