class Nodes {
    constructor(data){
        this.data = data;
        this.next = null;
    }   
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

insertAtHead(data){ 
const newNode=new Nodes(data);
newNode.next=this.head;
this.head=newNode;
this.size++;
}
// display linklist
display(){
    let result=''
    let current =this.head;
    while(current!==null){
        result+=`${current.data}->`
        current=current.next
    }
    return result
}

// insert at index
insertAt(index,data)
{
    if(index<0|| index>this.size)
    return "invalid index"

    if(index=0)
    {
        this.insertAtHead(data)
        return;
    }   

let current=this.head
let newNode=new Nodes(data)
for(let i=0;i<index-1;i++)
{
    current=current.next;
}
newNode.next=current.next
current.next=newNode;


}
//remove at head
removeAtHead(){
    if(this.size===0)
    return 'list is already empty'
this.head=this.head.next
}

removeElement(data){
    if(this.size===0)
    {
        return 'list is already empty'
    }
    let current=this.head,prev=null
    while (current)
    {
        if(current.data===data)
        {
            console.log(prev)
         if(prev===null)
         {
            this.head=current.next
         }
         else{
            prev.next=current.next
         }   
        }
        console.log(current)
        prev=current
        current=prev.next

    }
    return -1




}

searchElement(data){
    let curr=this.head
    let index=0
    while(curr)
    {
        if(curr.data===data)
        {
            return index;
        }
        index++
        curr=curr.next
    }
    return -1;
}





}
let list= new LinkedList()
list.insertAtHead(3);
list.insertAtHead(7);
list.insertAtHead(11);
console.log(list.display())
list.insertAt(1,5)
console.log(list.display())
list.removeAtHead()
console.log(list.display())
list.removeElement(3)
console.log(list.display())
console.log(list.searchElement(5))
const arr1=[2,3,4,5,7],  arr2=[] , index=0
for(let i=0;i<arr1.length;i++)
{
 
    if(i=index)
    {
        arr2[i]=arr1[i+1]
    }

  
}
console.log('arr1 is',arr2)
