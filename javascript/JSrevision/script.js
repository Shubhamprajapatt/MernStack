console.log("hello this is javascript revision");
// const cooler={
//     name:"Bluestar",
//     id:"dre101",
//     functionality:{
//         kam:"colling",
//         color:"white"
//     },
//     height:3.5,
// };
//shallow copy  // me duplicate obje se orignal obje me change kr skte hai 
// const duplicate=cooler;// first way to shallow copy
// const duplicate=Object.assign({},cooler);//second way to shallow copy
// const duplicate={...cooler};//third way to shallow copy

// cooler.name="dream";
 //duplicate.name="dream";
 //duplicate.functionality.color="blue";

// console.log("orignal",cooler);
// console.log("orignal",duplicate);


//deepcpoy=> me app duplicate obj se orignal obj ke nested wale obje ko change nhi kr pata hai ,but orignal obj se kr skte hai 
// const cooler1={
//     name:"Bluestar",
//     id:"dre101",
//     functionality:{
//         kam:"colling",
//         color:"white"
//     },
//     height:3.5,
// };
// const coller2=JSON.parse(JSON.stringify(cooler1));
// // coller2.name="white";
// cooler1.functionality.color="black";

// console.log("orignal",cooler1);
// console.log("duplicate",coller2);

const coller1={
    name:"bkf",
    id:"drf1230",
    functionality:{
        kaam:"coding",
    },
    height:305
};
// const collers2=coller1;
// coller1.id="55550";

// const collers2=Object.assign(({}),coller1);
// collers2.name="ram";

const collers2={...coller1};
collers2.name="gourav";

console.log("orignal coller1",coller1)
console.log("dublicate coller2",collers2);


