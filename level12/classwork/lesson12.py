# იწყებთ ციკლს რიცხვით 20
number = 20

# While ციკლი, რომელიც მუშაობს სანამ number არ გახდება 0-ზე ნაკლები
while number >= 1:
    print(number)  # დაბეჭდეთ მიმდინარე რიცხვი
    number -= 1    # გაანახევრეთ რიცხვი (ნაკლებად იქცევა)

# ციკლი დასრულდა
print("ციკლი დასრულდა")





# იწყებთ ციკლს რიცხვით 0
number = 0

# While ციკლი, რომელიც მუშაობს სანამ number არ გახდება 11-ზე მეტი
while number <= 10:
    print(number)  # დაბეჭდეთ მიმდინარე ლუწი რიცხვი
    number += 2    # დაამატეთ 2 ყოველ ჯერზე (შემდეგი ლუწი რიცხვი)

# ციკლი დასრულდა
print("ციკლი დასრულდა")




# საწყისი მნიშვნელობები
number = 0
total_sum = 0

# While ციკლი, რომელიც მუშაობს სანამ number არ გახდება 11-ზე მეტი
while number <= 10:
    total_sum += number  # მიმდინარე რიცხვის დამატება ჯამში
    number += 1          # გადადით შემდეგ რიცხვზე

# დაბეჭდეთ ჯამი
print("რიცხვების ჯამი 0-დან 10-ის ჩათვლით არის:", total_sum)
