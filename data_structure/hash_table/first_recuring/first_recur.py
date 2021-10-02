def first_recurring_char(input_char):
    length = len(input_char)
    for i in range(length):
        for j in range(i+1,length):
            if input_char[i] == input_char[j]:
                return input_char[i]
    return 'not found recurring'

def first_recurring_char2(input_char):
    dict_input = dict()
    for i in input_char:
        # print(dict_input.keys())
        if i in dict_input:
            return i
        else:
            dict_input[i] = True
    return 'not found recurring'


a = [8 , 7, 9, 4, 2, 3, 7, 9]
b = [8 , 7, 9, 6, 4, 2, 3]
c = [8]
d = [8 ,3, 3]
print(first_recurring_char(b))
print(first_recurring_char2(b))