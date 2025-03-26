def reverse_letter(s):
    # ფილტრავს მხოლოდ ანბანური სიმბოლოები და ბრუნავს მიღებულ სტრინგს
    # შემადგენელი სიმბოლოების გასაფილტრებლად იყენებთ list comprehension-ას, რომელიც ირჩევს მხოლოდ ანბანურ სიმბოლოებს
    filtered = ''.join([char for char in s if char.isalpha()])  # მხოლოდ ასოებს ვტოვებთ
    return filtered[::-1]  # ბრუნავს(filtered) სტრინგს

# ტესტირება
print(reverse_letter("krishan"))  # შედეგი: "nahsirk"
print(reverse_letter("ultr53o?n"))  # შედეგი: "nortlu"
