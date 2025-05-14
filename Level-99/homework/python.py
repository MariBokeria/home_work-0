def most_frequent_item_count(collection):
    # თუ მასივი ცარიელია, ვაბრუნებთ 0-ს
    if not collection:
        return 0

    # ვქმნით ლექსიკონს ელემენტების დათვლისთვის
    freq = {}

    # გადავუვლით ელემენტებს და ვზრდით შესაბამისი ელემენტის რაოდენობას
    for item in collection:
        if item in freq:
            freq[item] += 1
        else:
            freq[item] = 1

    # ვაბრუნებთ მაქსიმალურ მნიშვნელობას ლექსიკონიდან (ყველაზე ხშირად განმეორებადი ელემენტის რაოდენობა)
    return max(freq.values())
