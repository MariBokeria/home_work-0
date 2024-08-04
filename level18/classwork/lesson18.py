# მანქანის ინფორმაციის დიქტორის შექმნა
car = {
    'mark': 'Toyota',
    'name': 'Corolla',
    'year': 2022,
    'engine': '1.8L'
}

# გამოიტანეთ დიქტორი
print("მანქანის ინფორმაცია:", car)


# შექმენით თქვენი მონაცემების დიქტორი
my_info = {
    'name': 'John Doe',
    'age': 30
}

# დაამატეთ email და surname ახალი მონაცემები
my_info.update({
    'email': 'john.doe@example.com',
    'surname': 'Grdzelishvili'
})

# ან შეგიძლიათ პირდაპირ დაუმატოთ surname
# my_info['surname'] = 'Grdzelishvili'

# გამოიტანეთ საბოლოო დიქტორი
print("ჩემი ინფორმაცია:", my_info)


# შექმენით თქვენი მონაცემების დიქტორი
my_info = {
    'name': 'John Doe',
    'age': 30,
    'email': 'john.doe@example.com',
    'surname': 'Grdzelishvili'
}

# გამოიყენეთ for ციკლი, რომ გამოიტანოს თითოეული მნიშვნელობა
for key, value in my_info.items():
    print(f"{key}: {value}")



# შექმენით ცარიელი დიქტორი
my_dict = {}

# დაამატეთ 1000 კლავიში და მათ შესაბამისი ციფრები
for i in range(1, 1001):
    key = f'item_{i}'
    value = i
    my_dict[key] = value

# გამოიტანეთ ზოგიერთი იმ კლავიშების და მნიშვნელობების მაგალითები
for key in list(my_dict.keys())[:10]:  # მხოლოდ პირველ 10 კლავიშზე და მნიშვნელობაზე
    print(f"{key}: {my_dict[key]}")
