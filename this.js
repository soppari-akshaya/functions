//this
// const student={
//     name:"Akshaya",
//     maths:35,
//     physics:37,
//     social:40,
//     getavg()
//     {
//         let avg=(this.maths+this.physics+this.social)/3;
//         console.log(avg);
//     }
     
// }
const student1={
   name:"Akshaya",
    maths:35,
    physics:37,
    social:40,
    get()
    {
        console.log(this);
    },
    getavg:()=>
    {
       console.log(this);
    }
}