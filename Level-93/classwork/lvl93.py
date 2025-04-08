# საწყისი სიი (list)
numbers = [1, 3, 5, 6, 7, 9, 12, 15, 17]

# filter-ის გამოყენება, სადაც მხოლოდ 3-ის ჯერადებს ვარჩევთ
result = list(filter(lambda x: x % 3 == 0, numbers))

# შედეგის პრინტერება
print(result)  # გამოიტანს: [3, 6, 9, 12, 15]
