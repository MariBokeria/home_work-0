def get_characters_after_letter(s, letter):
    s = s.lower()
    letter = letter.lower()
    
    result = ""
    
    for i in range(len(s) - 1):  
        if s[i] == letter and s[i+1].isalpha():  
            result += s[i+1]  
    
    return result
