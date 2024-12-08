let arr = [5, 6, 3, 2, 1];

const selectionSort = (array) => {
    let n = array.length;
    for(let i=0;i<n-1;i++){
        let smallindex = i;
        
        for(j=i+1;j<n;j++){
            if(array[j] < array[smallindex]){
                smallindex = j;
            }
        }
        [array[i], array[smallindex]] = [array[smallindex], array[i]];
    }
    return array;
}

console.log(selectionSort(arr));