const mainDiv=document.getElementsByTagName("div");
const formHtml=mainDiv[0].innerHTML;
const form=document.getElementsByTagName("form");

function mainFunction()
{
submitButton.addEventListener("click",(e)=>
{
    e.preventDefault();
 const fname=document.getElementsByClassName("fname");
const fnamekey= fname[0].textContent;

const age=document.getElementsByClassName("age");
const ageKey= age[0].textContent;

const email=document.getElementsByClassName("email");
const emailKey= email[0].textContent;

const dob=document.getElementsByClassName("dob");
const dobKey= dob[0].textContent;

const number=document.getElementsByClassName("number");
const numberKey= number[0].textContent;

const password=document.getElementsByClassName("password");
const passwordKey= password[0].textContent;

const submitButton=document.getElementById("submitButton");

    const fnameValue= fname[1].value;
const ageValue= age[1].value;
const emailValue= email[1].value;
const dobValue= dob[1].value;
const numberValue= number[1].value;
const passwordValue= password[1].value;

    mainDiv[0].innerHTML=`
     <h3>Submitted Data</h3>
        <p><strong>${fnamekey}:</strong> ${fnameValue}</p>
        <p><strong>${ageKey}:</strong> ${ageValue}</p>
        <p><strong>${emailKey}:</strong> ${emailValue}</p>
        <p><strong>${dobKey}:</strong> ${dobValue}</p>
        <p><strong>${numberKey}:</strong> ${numberValue}</p>
        <p><strong>${passwordKey}:</strong> ${passwordValue}</p>
        <button id="defaultButton">Default</button>
    `
   const submittedFormHtml=mainDiv[0].innerHTML;
    const defaultButton=document.getElementById("defaultButton");
    defaultButton.addEventListener("click",()=>
    {
        mainDiv[0].innerHTML=formHtml;
        mainFunction();
    })
   
})
}
mainFunction();