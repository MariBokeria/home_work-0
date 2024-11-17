def calculator():
    print("კალკულატორი: არჩევეთ ოპერაცია:")
    print("1. დამატება (+)")
    print("2. გამოკლება (-)")
    print("3. გამრავლება (*)")
    print("4. გაყოფა (/)")

    try:
        operation = int(input("შეიყვანეთ ოპერაციის ნომერი (1-4): "))
        
        if operation not in [1, 2, 3, 4]:
            print("არასწორი ოპერაცია! სცადეთ თავიდან.")
            return

        num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
        num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))

        if operation == 1:
            print(f"შედეგი: {num1} + {num2} = {num1 + num2}")
        elif operation == 2:
            print(f"შედეგი: {num1} - {num2} = {num1 - num2}")
        elif operation == 3:
            print(f"შედეგი: {num1} * {num2} = {num1 * num2}")
        elif operation == 4:
            if num2 != 0:
                print(f"შედეგი: {num1} / {num2} = {num1 / num2}")
            else:
                print("გაყოფა ნულზე შეუძლებელია!")
    except ValueError:
        print("გთხოვთ, შეიყვანეთ სწორი რიცხვი.")

# ფუნქციის გამოძახება
calculator()
