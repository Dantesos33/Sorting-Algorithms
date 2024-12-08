let arr = [5, 6, 3, 2, 1];

const bubbleSort = (array) => {
    let n = array.length;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if(array[i] > array[j]){
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

console.log(bubbleSort(arr));