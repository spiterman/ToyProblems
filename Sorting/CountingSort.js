function countingSort(arr, min, max) {
    let count = new Array(max - min + 1)

    count.fill(0)

    for(let i = 0; i < arr.length; i++){
        count[arr[i] - min] = count[arr[i] - min] + 1

    }

    let z = 0

    for(let j = min; j < max; j++){
        if(count[j - min] > 0) {
            arr[z] = j
            z++
            count[j - min] = count[j - min] - 1
        }
    }

    return arr;
}

// console.log(countingSort([57, 87, 98, 95, 68, 62, 51, 93], 50, 100))
module.exports = countingSort;
