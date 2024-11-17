# შექმენით სია 5 ელემენტით
numbers = [10, 20, 30, 40, 50]

# სლაისინგის გამოყენებით ჩამოაჭერით ნაწილი სიის (1 დან 3-ის ჩათვლით)
sliced_part = numbers[1:4]

# გამოიტანეთ შედეგი
print("ჩამოჭრილი ნაწილი:", sliced_part)



# შექმენით სია რამდენიმე ელემენტით
numbers = [1, 2, 3, 4, 5, 6]

# სლაისინგის გამოყენებით ჩამოაჭერით ნახევარი სიის
half_length = len(numbers) // 2
first_half = numbers[:half_length]

# ახალი სია, რომელშიც იქნება ჩაწერილი ნახევარი
new_list = first_half

# გამოიტანეთ ახალი სია
print("ახალი სია:", new_list)


# შექმენით სია 6 ელემენტით
numbers = [10, 20, 30, 40, 50, 60]

# გამოიყენეთ index მეთოდი პირველ სამი ელემენტის ინდექსების პოვნისთვის
indices = [numbers.index(10), numbers.index(20), numbers.index(30)]

# გამოიტანეთ ინდექსები
print("პირველი სამი ელემენტის ინდექსები:", indices)


# შექმენით სია მხოლოდ ინტეჯერებით
numbers = [15, 22, 8, 19, 30, 5]

# იპოვეთ უმცირესი და უდიდესი მნიშვნელობა
min_value = min(numbers)
max_value = max(numbers)

# ამოაგდეთ ეს მნიშვნელობები სიიდან
numbers.remove(min_value)
numbers.remove(max_value)

# გამოიტანეთ საბოლოო სია
print("სია უმცირესი და უდიდესი მნიშვნელობების გარეშე:", numbers)


# იმავე სია, რაც წინა დავალებაში
numbers = [15, 22, 8, 19, 30, 5]

# ამოაგდებული მნიშვნელობები
removed_values = [min(numbers), max(numbers)]

# ახალი სია, რომელშიც იქნება ამოაგდებული რიცხვები
new_list = removed_values

# გამოიტანეთ ახალი სია
print("ამოაგდებული რიცხვების სია:", new_list)



# შექმენით ორი სია მხოლოდ ინტეჯერებით
list1 = [5, 7, 9, 3, 6]
list2 = [8, 10, 12, 4, 11]

# იპოვეთ მინიმალური და მაქსიმალური მნიშვნელობები ორივე სიაში
min_list1 = min(list1)
max_list1 = max(list1)
min_list2 = min(list2)
max_list2 = max(list2)

# გამოაკლეთ მაქსიმუმი მინიმუმისგან
result = [max_list1 - min_list2, max_list2 - min_list1]

# გამოუტყეთ შედეგი
print("შედეგი:", result)


# შექმენით სია მხოლოდ ინტეჯერებით
numbers = [4, 7, 1, 8, 5]

# იპოვეთ სიის წევრების ჯამი
total_sum = sum(numbers)

# გამოიტანეთ ჯამი
print("სიის ჯამი:", total_sum)


# შექმენით სია, რომელშიც არის როგორც ინტეჯერები ისე სტრინგები
mixed_list = [1, 2, 'apple', 3, 'banana']

# გაწვდეთ ყველა ინტეჯერი
integers = [item for item in mixed_list if isinstance(item, int)]
# გაწვდეთ ყველა სტრინგი
strings = [item for item in mixed_list if isinstance(item, str)]

# შეაერთეთ ინტეჯერები და სტრინგები
combined_integers = sum(integers)
combined_strings = ''.join(strings)

# გამოიტანეთ შედეგი
print("ინტეჯერების ჯამი:", combined_integers)
print("სტრინგების გაწვდვა:", combined_strings)


# შექმენით ორი სია მხოლოდ ინტეჯერებით
list1 = [1, 2, 3]
list2 = [4, 5, 6]

# იპოვეთ სიის წევრების ჯამი
sum_list1 = sum(list1)
sum_list2 = sum(list2)

# შედეგების დაპრინტვა
print("პირველი სიის ჯამი:", sum_list1)
print("მეორე სიის ჯამი:", sum_list2)
