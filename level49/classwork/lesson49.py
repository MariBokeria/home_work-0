# თავდაპირველი მასივი
matrix = [
    [True, False, True],
    [False, True, False],
    [True, True, False]
]

# მნიშვნელობების შეცვლა
for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        matrix[i][j] = not matrix[i][j]

# შედეგის ბეჭდვა
for row in matrix:
    print(row)
