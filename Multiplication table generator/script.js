function generateTable(){

    let num = document.getElementById("num").value;

    let result = document.getElementById("result");


    if(num==""){
        result.innerHTML="Please enter a number";
        return;
    }


    let table="";


    for(let i=1;i<=10;i++){

        table += `${num} × ${i} = ${num*i}<br>`;

    }


    result.innerHTML = table;

}