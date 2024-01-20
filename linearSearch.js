//linear search 
const linearSearch=(arr,target)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target)
    {
       
    return i
       }
    
        }
return -1
}
    
 let t=linearSearch([1,3,6,7,8,12],12);
console.log('linearSearch isfff',t)
    


//given two string needle and haystack,return the index of the  first occurrence of needle in haystack or -1 if needle  is not  part of haystack.
//input: haystack="sadbutsad",needle=sad
//output: 0  sad occurs at index 0 and 6

var strStr=function(mainString,subString)
{
    let m=mainString.length,s=subString.length
    for(let i=0;i<=m-s;i++)
    {
        let flag=true;
       for (let j=0;j<s;j++)
       {
    
     
        if(mainString[i+j]!==subString[j])
        {
            console.log('mainstrining',mainString[i])
            console.log('substring s',subString[j])
            flag=false
            break;
        }   
       
       }
       if(flag){
        return i
       }

    }
return -1

}

const oc=strStr("sadtyyttsbbutsad","tsad")
console.log("oc is =>>>>>",oc)