def solution(string, ending):
    # ვამოწმებთ, მთავრდება თუ არა string-ის ბოლო ნაწილში ending-ით
    return string.endswith(ending)

# ტესტის შემთხვევები
print(solution('abc', 'bc'))  # True (მართალია, რადგან 'abc' მთავრდება 'bc'-ით)
print(solution('abc', 'd'))   # False (მცდარია, რადგან 'abc' არ მთავრდება 'd'-ით)
