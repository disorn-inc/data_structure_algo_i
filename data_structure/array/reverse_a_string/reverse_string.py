def reverse_string(string):
    item = len(string)
    reverse = ""
    for i in range(item - 1, -1, -1):
        reverse = reverse + string[i]
    return reverse

test1 = "abcde"

print(reverse_string(test1))