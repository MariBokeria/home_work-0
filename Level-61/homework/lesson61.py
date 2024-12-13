def hq9_plus(command):
    if command == 'H':
        return 'Hello World!'
    elif command == 'Q':
        return 'Q'
    elif command == '9':
        lyrics = []
        for i in range(99, 0, -1):
            if i > 1:
                lyrics.append(f"{i} bottles of beer on the wall, {i} bottles of beer.")
                lyrics.append(f"Take one down and pass it around, {i-1} {'bottles' if i-1 > 1 else 'bottle'} of beer on the wall.")
            else:
                lyrics.append("1 bottle of beer on the wall, 1 bottle of beer.")
                lyrics.append("Take one down and pass it around, no more bottles of beer on the wall.")
        lyrics.append("No more bottles of beer on the wall, no more bottles of beer.")
        lyrics.append("Go to the store and buy some more, 99 bottles of beer on the wall.")
        return '\n'.join(lyrics)
    else:
        return None

# Example test cases
print(hq9_plus('H'))  # Hello World!
print(hq9_plus('Q'))  # Q
print(hq9_plus('9'))  # Lyrics for 99 Bottles of Beer
print(hq9_plus('+'))  # None
