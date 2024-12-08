let arr = [5, 6, 3, 2, 1];

const insertionSort = (array) => {
    let n = array.length;
    for(let i=1;i<n;i++){
        let curr = array[i];
        let prev = i - 1;
        while(prev >= 0 && array[prev] >= curr){
            array[prev+1] = array[prev];
            prev--;
        }
        array[prev+1] = curr;
    }
    return array;
}

console.log(insertionSort(arr))