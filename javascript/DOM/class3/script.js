const divv=document.getElementById("c211");
console.log("all content",divv);
console.log("ALL attribute ",divv.attributes);
console.log("Div ka sab Attribute and value nikalne k liy");
for(let i=0;i<3;i++){
    console.log(divv.attributes[i]); 
}

//change attribute value
divv.attributes[0].value="container";
//Set attribute
divv.setAttribute("data-info","student of grow tech");
//remove attribute
divv.removeAttribute("data-info");

gg.style.color = 'blue';
h.style.color ="green";
h.style.backgroundColor="yellow";