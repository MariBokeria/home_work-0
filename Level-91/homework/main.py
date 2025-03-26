import random

# შექმნით შემთხვევით ფერის გენერატორს
def get_random_color():
    colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#F5D300', '#00BFAE', '#9C27B0', '#FF5733', '#FFC300']
    return random.choice(colors)

def create_divs():
    divs = ""  # წამოწყების ცვლადი, სადაც შეგროვდება ყველა დივი
    
    # ციკლი ათჯერ, ამორჩევს შემთხვევით ფერს
    for i in range(1, 11):
        bg_color = get_random_color()  # შემთხვევითი ფერის არჩევა
        div_tag = f'<div style="background-color: {bg_color}; padding: 10px; margin: 5px;">Content {i}</div>'
        
        # ქმნით დივს, ჯერ თავში, შემდეგ ბოლოში
        divs = div_tag + divs + div_tag  # ჩანაცვლება - დივი დამატებულია ორივე მხრიდან
        
    return divs

# გამოიტანეთ შედეგი
print(create_divs())
