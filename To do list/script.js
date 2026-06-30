let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");


function addTask(){


    if(input.value==""){
        alert("Please enter a task");
        return;
    }


    let li=document.createElement("li");


    li.innerHTML = `
        <span>${input.value}</span>
        <button class="delete">Delete</button>
    `;



    // complete task
    li.querySelector("span").onclick=function(){

        li.classList.toggle("completed");

    }



    // delete task
    li.querySelector(".delete").onclick=function(){

        li.remove();

    }



    list.appendChild(li);


    input.value="";

}