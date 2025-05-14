def battle(group1, group2):
    power1 = sum(ord(char) - ord('A') + 1 for char in group1)
    power2 = sum(ord(char) - ord('A') + 1 for char in group2)

    if power1 > power2:
        return group1
    elif power2 > power1:
        return group2
    else:
        return "Tie"
