const arr=[-2,-3,-8,2,5,3]
const insertionSort=(arr)=>{
    for(let i=1;i<arr.length;i++)
    {
        let current=arr[i]
        let j=i-1
    while(j>=0 && arr[j]>current)
    {
        arr[j+1]=arr[j];
        j--


    }
    arr[j+1]=current
}
return arr;
}
console.log('insertion sort is',insertionSort(arr))