
const mergeSortInPlace=(arr ,low,high)=>{
if(low<high)
{
    let mid=Math.floor((low+high)/2)
    mergeSortInPlace(arr,low,mid)
    mergeSortInPlace(arr,mid+1,high)
    mergeInPlace(arr,low,mid,high)
}
}

const mergeInPlace=(arr,low,mid,high)=>{
const result=[]
let leftIndex=low,rightIndex=mid+1;
while(leftIndex<=mid && rightIndex<=high){
    if(arr[leftIndex]<arr[rightIndex])
    {
        result.push(arr[leftIndex])
        leftIndex++
        
    }
    else{
        result.push(arr[rightIndex])
        rightIndex++;
    }
}
while(leftIndex <=mid)
{
    result.push(arr[leftIndex])
    leftIndex++;
}
while(rightIndex<=high)
{
    result.push(arr[rightIndex])
    rightIndex++;
}
for(let i=low;i<=high;i++)
{
    arr[i]=result[i-low];
}

}
const arr1=[-2,4,5,1,-5,-3]

console.log('mergesort is',mergeSortInPlace(arr1,0,arr1.length-1))
console.log('arr is',arr1)