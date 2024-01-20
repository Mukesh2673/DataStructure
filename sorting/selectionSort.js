//https://github.com/FrontendFreaks/DSA-in-JavaScript
const arr=[-2,-7,6,-3,2]
const selectionSort=(arr)=>{
 for(let i=0;i<arr.length-1;i++)
 {
    let minIndex=i
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[j]<arr[minIndex])
        {
            minIndex=j
        }
    }
    if(minIndex !==i)
    {
        [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
    }
 }
 return arr;
 
}
console.log('slection sort is',selectionSort(arr))
//maximum number of swaping is n-1
//maximum number of swaping in bubble soer is n(n-1)/2
//time complexity of selection sort is n square
