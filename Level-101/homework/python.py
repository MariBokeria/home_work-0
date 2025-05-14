def is_solved(board):
    n = len(board)
    expected = 0
    for row in board:
        for tile in row:
            if tile != expected:
                return False
            expected += 1
    return True
