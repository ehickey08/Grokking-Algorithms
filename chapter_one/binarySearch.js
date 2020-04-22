const binarySearch = (arr, target) => {
    let low = 0
    let high = arr.length - 1

    while ( low <= high ) {
        let middle = Math.floor( (low + high) / 2)
        let midNum = arr[middle]

        if ( midNum === target ) {
            return middle
        }
        else if ( midNum < target ) {
            low = middle + 1
        }
        else {
            high = middle - 1
        }
    }

    return -1
}

let testArr = []

for ( let i = 0; i < 1000; i += 1 ) {
    let randomNum = Math.floor((Math.random() * 100))
    testArr.push(randomNum)
}
testArr.sort((a,b) => a - b)

console.log(testArr, binarySearch(testArr, 5))