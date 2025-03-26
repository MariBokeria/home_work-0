def even_or_odd(s):
    # ვპოულობთ ყველა ლუწი ციფრის ჯამს
    even_sum = sum(int(digit) for digit in s if int(digit) % 2 == 0)

    # ვპოულობთ ყველა კენტი ციფრის ჯამს
    odd_sum = sum(int(digit) for digit in s if int(digit) % 2 == 1)

    # ვადარებთ ჯამებს და ვაბრუნებთ შესაბამის შედეგს
    if even_sum > odd_sum:
        return "Even is greater than Odd"  # თუ ლუწი ციფრების ჯამი მეტია
    elif odd_sum > even_sum:
        return "Odd is greater than Even"  # თუ კენტი ციფრების ჯამი მეტია
    else:
        return "Even and Odd are the same"  # თუ ჯამები ტოლია

# ტესტის შემთხვევები
print(even_or_odd("123456"))  # "Even is greater than Odd"
print(even_or_odd("112233"))  # "Even and Odd are the same"
print(even_or_odd("13579"))   # "Odd is greater than Even"
