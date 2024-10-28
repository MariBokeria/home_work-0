def print_positions(rows, cols):
    for row in range(1, rows + 1):
        for col in range(1, cols + 1):
            print(f"row: {row} col: {col}")

# ტესტირება
print_positions(2, 2)




def multiplication_table():
    table = []
    for i in range(1, 11):
        row = []
        for j in range(1, 11):
            row.append(i * j)
        table.append(row)
    return table

# ტესტირება
table = multiplication_table()
for row in table:
    print(row)


def print_valid_pairs(n):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if j > i:
                print(f"({i}, {j})")

# ტესტირება
print_valid_pairs(3)
