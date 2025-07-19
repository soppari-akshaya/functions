//set interval : it prints after every 3seconds.
 let id1=setInterval(()=>{
    console.log("hey");
 },3000);

 let id2=setInterval(()=>{
    console.log("hey");
 },5000);
 clearInterval(id1); //used to block the set interval.
 console.log(id1); //1
 