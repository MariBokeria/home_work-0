def check_text():
    # მომხმარებლის ტექსტის შეყვანა
    text = input("შეიყვანეთ ტექსტი: ")

    # რიცხვების ან ნიშნების ძიება
    errors = [(i, char) for i, char in enumerate(text) if not char.isalpha() and not char.isspace()]

    if errors:
        print("ერორი: ტექსტი შეიცავს რიცხვ(ებს) ან ნიშნ(ებ)ს.")
        print("პოზიციები და სიმბოლოები:")
        for index, char in errors:
            print(f"ინდექსი: {index}, სიმბოლო: '{char}'")
    else:
        print("წარმატებული ოპერაცია")

# ფუნქციის გამოძახება
check_text()
