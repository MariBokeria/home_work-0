def elevator_distance(floors):
    # ვკრებთ ორი მიმდევრული სართულის სხვაობის აბსოლუტურ მნიშვნელობებს
    return sum(abs(floors[i] - floors[i - 1]) for i in range(1, len(floors)))

# ტესტ შემთხვევები
print(elevator_distance([5, 2, 8]))   # 9
print(elevator_distance([1, 2, 3]))   # 2
print(elevator_distance([7, 1, 7, 1])) # 18
print(elevator_distance([3, 3]))      # 0
