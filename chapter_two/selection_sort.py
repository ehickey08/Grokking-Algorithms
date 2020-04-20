import random

def selection_sort(arr):
    for i in range(len(arr)):
        smallest_index = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[smallest_index]:
                smallest_index = j
        arr[i], arr[smallest_index] = arr[smallest_index], arr[i]


test_arr = [random.randint(0,100) for i in range(100)]

print(test_arr)
selection_sort(test_arr)
print(test_arr)