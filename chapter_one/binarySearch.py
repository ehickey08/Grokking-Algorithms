import random


def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        middle = (low + high) // 2
        if arr[middle] == target:
            return middle
        elif arr[middle] < target:
            low = middle + 1
        else:
            high = middle - 1

    return -1


test_arr = [random.randint(0, 100) for i in range(100)]
test_arr.sort()

print(test_arr, binary_search(test_arr, 5))
