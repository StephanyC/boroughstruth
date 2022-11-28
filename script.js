var entry= document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row= 1;

function displayDetails() {
    var response= document.getElementById("response").value;
    var age= document.getElementById("age").value;

    if(!response ||!age) {
        alert("Please fill all the boxes");
        return;
    }
    var display= document.getElementById("display");

var newRow= display.insertRow(row);

var cell1= newRow.insertCell(0);
var cell2= newRow.insertCell(1);

cell1.innerHTML=response;
cell2.innerHTML=age;

row++;

};

 var video = document.getElementById("myVideo");
    
var btn = document.getElementById("myBtn");

function myFunction(){
    if(video.paused){
        VideoColorSpace.play();
        btn.innerHTML="Pause";
    } else {
        VideoColorSpace.pause();
        btn.innerHTML="Play";
    }
}


