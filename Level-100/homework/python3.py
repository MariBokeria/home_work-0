def elevator_distance(floors):
    distance = 0
    for i in range(1, len(floors)):
        distance += abs(floors[i] - floors[i - 1])
    return distance
