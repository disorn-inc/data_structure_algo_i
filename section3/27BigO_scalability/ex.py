import time

nemo = ['dory','bruce','martin','nemo','gill','bloat','nigel','squirt','darla','hank']

def find_nemo(array):
    # t0 = time.time()
    for i in nemo:
        if(i == 'nemo'):
            print('Found nemo')
            break
    # t1 = time.time()
    # print(t1-t0)
            
find_nemo(nemo)