const arr=[];
while(true)
{
     
    let request=prompt("Enter your request : add,delete,display,quit")
    if(request==="add")
    {
        let item=prompt("enter your list items");
        arr.push(item);
    }
    else if(request==="delete")
    {
        let index=prompt("enter index to delete");
        arr=splice(index,3);
    }
    else if(request==="display")
    {
        result=" ";
        for(let i=0;i<arr.length;i++)
        {
           result+=arr[i];
           console.log(result);
        }
    }
    else if(request==="quit")
        {
            break;
        }
    else{
        console.log("incorrect request");
    }
    
}