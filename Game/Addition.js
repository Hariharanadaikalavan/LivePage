var num1=document.getElementById("box1").innerHTML=Math.floor(Math.random() * 100);
var num2=document.getElementById("box2").innerHTML=Math.floor(Math.random() * 100);

function submit(){
    var num3 = document.getElementById("box3").value

    if((num1+num2)==num3){
        document.getElementById("result").innerHTML="🌟Correct Answer";

        document.getElementById("result").className="green";
        document.getElementById('body').style.backgroundColor="Green";
    }
    else{
        document.getElementById("result").innerHTML="👎Please try again"
        document.getElementById("result").className="red";
        document.getElementById('body').style.backgroundColor="red";
    }
}
