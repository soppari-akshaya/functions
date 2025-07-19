let x=7;//global scope
function myfun()
{
    let y=3;//function scope
    console.log(x);
    console.log(y);
    function out()
    {                   //lexical scope tells which variable is defined at which scope.
       let z=9;
       console.log(z);
       console.log(x);
       console.log(y);
    }
    out();
}
console.log(x);
myfun()   

const sum = function(a,b)
{
    return a+b;
};
console.log("The sum is " + sum(3,7));

//higher order function
function m(func,count)
{
    for(let i=1;i<=count;i++)
    {
        func();
    }
}
let greet=function()
{
    console.log("Hello")

}
m(greet,100);
//we can also call higher order function in this way.
m(function(){
    console.log("hi");
},1000); 

//object using functions
const cal={
    add:function(a,b)
    {
        return a+b;      //cal.add(4,7) ,output 11
         
    },
    sub:function(a,b)
    {
        return a-b;
    },
    mul:function(a,b)
    {
        return a*b;
    }
     
}
console.log(cal.add(6,9))

 

//Arrow function
     
const student1={
   name:"Akshaya",
    maths:35,
    physics:37,
    social:40,
}
let getavg=()=>
{
    console.log("avg");
}



  