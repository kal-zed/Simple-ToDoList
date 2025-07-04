const input=document.getElementById("inputInsert");
const addButton=document.getElementById("add");
const newTaskcontianer=document.getElementById("taskContianer");
const divAll=document.getElementById("bodySection");
addButton.addEventListener("click",addNew);

function addNew(){
    if(input.value==""){
        let para=document.createElement("p");
        para.textContent="please insert your task!!";
        para.style.color="red";
        divAll.appendChild(para);
        setTimeout(()=>para.remove(),1000);
    }
    else{
        let li=document.createElement("li");
        li.textContent=input.value;
        li.style.border="2px solid white";
        li.style.borderRadius = "10px";
        li.style.padding="5px";
        li.style.margin="15px";
        li.style.fontSize="large";
        li.style.color="white";
        li.style.listStyle="none";
        
        newTaskcontianer.appendChild(li);
        input.value="";

        let deletebtn=document.createElement("button");
        deletebtn.textContent="Remove";
        deletebtn.style.color="white";
        deletebtn.style.backgroundColor="red";
        deletebtn.style.fontSize="large";
        deletebtn.style.marginLeft="15px";
        deletebtn.style.borderRadius = "50px";
        deletebtn.style.textAlign = "center"; 

        li.appendChild(deletebtn);

        deletebtn.addEventListener("click",()=>{
            li.remove();
        });
    }
}