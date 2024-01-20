const bubbleSort=(arr)=>{
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]>arr[i+1])
            {
                // let temp=arr[i]
                // arr[i]=arr[i+1]
                // arr[i+1]=temp

                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapped= true
            }
        }
    }
    while(swapped)
    return arr;

}

console.log('swapped array is',bubbleSort([-2,4,7,-5,3]))