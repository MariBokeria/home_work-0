def categorize_members(members):
    result = []
    for member in members:
        age, handicap = member
        if age >= 55 and handicap > 7:
            result.append("Senior")
        else:
            result.append("Open")
    return result

# ტესტის შემთხვევა
input_data = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output_data = categorize_members(input_data)
print(output_data)
