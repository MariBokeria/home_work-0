def XO(s):
    # ვაქცევთ სტრინგს ქვედა რეგისტრში და ვითვლით 'x' და 'o' სიმბოლოებს
    s = s.lower()
    return s.count('x') == s.count('o')
