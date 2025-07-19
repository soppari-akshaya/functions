let ar=[3,6,5,7,8];
ar.forEach(function(el)
{
    console.log(el);
})

//map
let m=ar.map(function (el){
    return el/2;
     
})
console.log(m);  //(5) [1.5, 3, 2.5, 3.5, 4]

//map methods

//filter : it will filter the elements based on the condition
let f=ar.filter(function(el){
    return (el%2==0);
})
console.log(f); //(2) [6, 8]

//every :it will return boolean value based on the condition
let e=ar.every(function(el){
    return (el%2==0);
})
console.log(e); //false

//some:it returns boolean value i.e. some values 
let s=ar.some(function(el){
    return (el%2==0);
})
console.log(s); //true

//reduce : it will have accumulator and function based on the condition it gives result
let r=ar.reduce(function(res,el){
    return (res+el);
})
console.log(r); //29


