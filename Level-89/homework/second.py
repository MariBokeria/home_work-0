# მომხმარებლისგან ვიღებთ სტრინგს
text = input("შეიყვანეთ სტრინგი: ")

# ვიღებთ slicing-ის პარამეტრებს
start = int(input("შეიყვანეთ საწყისი ინდექსი (start): "))
stop = int(input("შეიყვანეთ საბოლოო ინდექსი (stop): "))
step = int(input("შეიყვანეთ ნაბიჯი (step): "))

# ვიყენებთ slicing-ს
result = text[start:stop:step]

# გამოვიტანთ შედეგს
print("ამოჭრილი სტრინგი:", result)
