# საწყისი სიი (list)
listn = [1, 3, 5, 6, 7, 10, 15, 21, 25.5, 30, 101, 105]

# filter-ის გამოყენება, სადაც მხოლოდ 5-ის ჯერადებს ვარჩევთ
result = list(filter(lambda x: x % 5 == 0, listn))

# შედეგის პრინტერება
print(result)  # გამოიტანს: [5, 10, 15, 30, 105]
