# რიცხვების შეყვანა და ოპერაციის არჩევა
num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))
operation = input("მიუთითეთ ოპერაცია (+ ან -): ")

# ოპერაციის შესრულება
if operation == "+":
    result = num1 + num2
elif operation == "-":
    result = num1 - num2
else:
    result = "არასწორი ოპერაცია!"

print(f"შედეგი: {result}")
