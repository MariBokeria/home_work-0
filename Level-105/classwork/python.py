def luhn_check(card_number):
    card_number = card_number.replace(" ", "")
    total_sum = 0
    for i in range(len(card_number)):
        digit = int(card_number[-(i + 1)])  
        if i % 2 == 1:  
            digit = digit * 2  
            if digit > 9:
                digit -= 9  
        total_sum += digit  
    return total_sum % 10 == 0
