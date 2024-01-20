//binary search you have to find middle point and then divide array into two part left side and right side 
//then compare left side with middle element is it greater than or not same for the right side code 

//time complexity= T(N)=T(N/2) like n->N/2->n/4->n/2K.....
//T(N)=K=>N/2K=1=>N=pow(2)k=>log2N=k
//o(N)=Log2N
const BinarySearch=(arr,target)=>{
    let start=0,end=arr.length-1;
    while(start <= end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] > target)
        {
            end=mid-1;
        }
        else {
            start=mid+1;
        }
    }
    return -1
}

console.log('binary',BinarySearch([1,2,3,4,5,6],5))



// Binary search using
const BinarySearchr=(arr,target)=>{
    return BinarySearchUtil(arr,target,0,arr.length)
}

const BinarySearchUtil=(arr,target,start,end)=>{
       if(start>end)
       {
        return -1;
       }     
        let mid=Math.floor((start+end)/2);
        if(arr[mid]===target)
        {
            return mid

        }
        else if(arr[mid]>target)
        {
            return BinarySearchUtil(arr,target,0,mid-1);
        }
        else{
            return BinarySearchUtil(arr,target,mid+1,end);
        }
    

}
const recursionResult=BinarySearchr([2,3,6,7,9],6)
console.log('recurssion reusult',recursionResult)


// Givan an array:[1,5,8,10,15] find floor and ceil value of 9;
//floor value of 9 will be 8
//ceil value of 9 will be 11

const floorCeil=(arr,target)=>{
    let start=0, end=arr.length;
    let floor=-1,ceil=-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid]===target){
            floor=mid
            ceil=mid
            return [ceil,mid]
        }
        else if(arr[mid]>target)
        {
            ceil=mid;
            end=mid-1;
        }
        else{
            floor=mid;
            start=mid+1
        }
    }
    return [floor,ceil]
}
console.log('florc',floorCeil([2,4,5,3,7],5))