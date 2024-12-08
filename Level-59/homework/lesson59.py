def find_odd_occurrence(arr):
    for i in arr:
        count = 0
        for j in arr:
            if i == j:
                count += 1
        if count % 2 != 0:
            return i
