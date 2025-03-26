def type_validation(variable, type_str):
    # ვქმნით ლექსიკონს, სადაც ვუთანაბრებთ სტრიქონის ტიპებს Python-ის ტიპებთან
    type_map = {
        "int": int,
        "str": str,
        "float": float,
        "bool": bool,
        "list": list,
        "dict": dict,
        "tuple": tuple,
        "set": set
    }
    # ვამოწმებთ, არის თუ არა გადაცემული ცვლადი მითითებული ტიპის
    return isinstance(variable, type_map.get(type_str, None))

# ტესტ შემთხვევები
print(type_validation(42, "int"))     # True
print(type_validation("42", "int"))   # False
print(type_validation(3.14, "float")) # True
print(type_validation(True, "bool"))  # True
print(type_validation([], "list"))    # True
print(type_validation({}, "dict"))    # True
