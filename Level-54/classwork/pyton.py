def process_input(value):
    """
    ამოწმებს არგუმენტის ტიპს და აბრუნებს შესაბამის შედეგს:
    - თუ არის სტრინგი: აბრუნებს სიგრძეს.
    - თუ არის ინტეჯერი: აბრუნებს True ან False (თუ მეტი 100-ზე).
    - თუ არის ბულეანი: აბრუნებს მის მეორე ფორმას.
    """
    if isinstance(value, str):
        return len(value)
    elif isinstance(value, int):
        return value > 100
    elif isinstance(value, bool):
        return not value
    else:
        return "Unsupported type"

# ტესტები
print(process_input("hello"))    # 5
print(process_input(150))        # True
print(process_input(50))         # False
print(process_input(True))       # False
print(process_input(False))      # True

