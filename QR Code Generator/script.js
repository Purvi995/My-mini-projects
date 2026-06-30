function generateQR(){
    let text= document.getElementById("text").value;

    let qrImage= document.getElementById("qrimage");

    if(text==""){
        alert("Please enter text or URL");
        return;
    }

    let qrURL=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;

    qrImage.src = qrURL;
}

