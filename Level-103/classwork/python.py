def ask(s):
    if s == "":
        return s
    return s[::-1] if s[0].isupper() else s
