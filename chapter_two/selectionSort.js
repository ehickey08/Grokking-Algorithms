const swap = (arr, indexA, indexB) => {
    let temp = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = temp
}
const selectionSort = arr => {
    for ( let i = 0; i < arr.length; i += 1 ) {
        let smallestIndex = i
        for ( let j = i + 1; j < arr.length; j += 1 ) {
            if ( arr[j] < arr[smallestIndex] ){
                smallestIndex = j
            }
        }
        swap(arr, smallestIndex, i)
    }
}

let testArr = []

for ( let i = 0; i < 100; i += 1 ) {
    let randomNum = Math.floor((Math.random() * 100))
    testArr.push(randomNum)
}

console.log(testArr)
selectionSort(testArr)
console.log(testArr)