# Arrays
- Memory is stored contiguously
- Will require reallocation of memory if you need to add more items than currently "reserved"
- May be reserving memory that you are not currently using
- Know the address for every item
- Allow random lookups 
- Insertions are deletions anywhere but the end will require O(n) shifts

# Linked lists
- Items can be anywhere in memory and are linked together with pointers
- Great if you want to read all the items at once as the only way to get to the middle values is to go through the list
- Great for insertions and deletions, especially those in the middle

# Summary Comparisons
| Method | Arrays | Linked Lists |
| ------ | ------ | ------------ |
| Reading | O(1) | O(n) |
| Insertion/Deletion at start | O(n) | O(1) |
|Insertion/Deletion in middle| O(n) | O(n) |
| Insertion/Deletion at end| O(1) | O(1)

# Selection Sort


# Exercises
2.1: List
2.2 Linked list
2.3 Array
2.4 Binary Search needs sorted array so you would have O(n) insertions
2.5 Faster than arrays at inserts, faster than linked lists at searching