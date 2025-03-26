import string

def count_letters_and_digits(s):
    # ვფილტრავთ მხოლოდ ასოებს (ლათინურ ანბანს) და ციფრებს
    return sum(1 for char in s if char in string.ascii_letters or char.isdigit())

# ტესტები
print(count_letters_and_digits("hel2!lo"))      # 6
print(count_letters_and_digits("wicked .. !")) # 6
print(count_letters_and_digits("!?..A"))       # 1
