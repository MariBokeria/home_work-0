def descending_order(num):
    # ვაქცევთ რიცხვს სტრინგად, ვალაგებთ ციფრებს კლებადობით და ვაბრუნებთ ისევ მთელ რიცხვად
    return int(''.join(sorted(str(num), reverse=True)))
