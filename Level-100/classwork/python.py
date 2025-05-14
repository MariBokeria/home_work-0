def billboard(name, price=30):
    total_cost = 0
    for _ in name:  # Loop through each character in the name
        total_cost += price  # Add the price per character to the total cost
    return total_cost
