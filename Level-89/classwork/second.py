def calculator(a, b, op):
    # ვამოწმებთ, არის თუ არა a და b რიცხვები
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        return "unknown value"
    
    # ვამოწმებთ, არის თუ არა ოპერაცია დაშვებულ სიმბოლოებში
    if op == "+":
        return a + b
    elif op == "-":
        return a - b
    elif op == "*":
        return a * b
    elif op == "/":
        # ვამოწმებთ ნულზე გაყოფას
        return a / b if b != 0 else "unknown value"
    else:
        return "unknown value"

# ტესტის შემთხვევები
print(calculator(1, 2, "+"))  # 3
print(calculator(1, 2, "&"))  # "unknown value"
print(calculator(1, "k", "*"))  # "unknown value"
print(calculator(10, 5, "/"))  # 2.0
print(calculator(10, 0, "/"))  # "unknown value"
