from functools import reduce

# საწყისი სია
numbers = [1, 2, 3, 4, 5]

# reduce-ის გამოყენება რიცხვების ჯამის დასათვლელად
sum_result = reduce(lambda x, y: x + y, numbers)

# შედეგის პრინტერება
print(sum_result)  # გამოიტანს: 15
