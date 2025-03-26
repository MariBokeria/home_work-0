def comfortable_word(word):
    # განსაზღვრავს რომელ სიმბოლოებს წერს მარცხენა ხელი
    left_hand = set('qwertasdfgzxcvb')
    # განსაზღვრავს რომელ სიმბოლოებს წერს მარჯვენა ხელი
    right_hand = set('yuiophjklmn')

    # პირველ სიმბოლოისთვის იწყებთ, იმის მიხედვით თუ რომელი ხელი დაწერს მას
    # True ნიშნავს მარცხენა ხელს, False - მარჯვენა ხელს
    previous_hand = None

    # ვ遍ივით ყველაფერს სიტყვაში
    for char in word:
        # ადგენს, რომელ ხელს ეკუთვნის ამ სიმბოლოს
        if char in left_hand:
            current_hand = True  # მარცხენა ხელი
        elif char in right_hand:
            current_hand = False  # მარჯვენა ხელი
        else:
            continue  # იმ შემთხვევაში თუ სხვა სიმბოლოებია, არ ვგულისხმობთ

        # ვამოწმებთ, თუ ხელი სწორად ალტერნირებს
        if previous_hand is not None and previous_hand == current_hand:
            return False

        # ახლიდან ვწერთ იმ ხელს, რომელიც ამჯერად დაინიშნა
        previous_hand = current_hand

    return True

# ტესტირების მაგალითები
print(comfortable_word("yams"))  # შედეგი: True
print(comfortable_word("test"))  # შედეგი: False
