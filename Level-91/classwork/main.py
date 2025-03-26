def create_divs():
    # წამოწყების ცვლადი
    divs = ""
    
    # ციკლი ათჯერ, თითოეული დივის ზომის გაორმაგება
    for i in range(1, 11):
        div_size = 2 ** i  # დივის ზომა ორჯერ იზრდება
        div_tag = f'<div class="size-{div_size}">Content {div_size}</div>'
        
        # ქმნით დივს, ჯერ თავში, შემდეგ ბოლოში
        divs = div_tag + divs + div_tag  # ჩანაცვლება - დივი დამატებულია ორივე მხრიდან
        
    return divs

# გამოიტანეთ შედეგი
print(create_divs())
