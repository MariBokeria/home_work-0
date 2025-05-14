def sharePrice(invested, changes):
    from functools import reduce

    # ვიყენებთ reduce-ს ყოველდღიური ცვლილებების შესაბამისად ინვესტიციის ცვლილებისთვის
    final_value = reduce(lambda total, change: total * (1 + change / 100), changes, invested)

    # ვაბრუნებთ სტრინგს ორი ათწილადის სიზუსტით
    return f"{final_value:.2f}"
