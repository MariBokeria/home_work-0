def count_red_beads(n):
    if n < 2:
        return 0
    return (n - 1) * 2

print(count_red_beads(5))  
print(count_red_beads(1))  
