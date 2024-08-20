

function myfunc(){
    document.getElementById("demo").style.backgroundColor="teal";
}
function myfunc1(){
    document.getElementById("demo").style.backgroundColor="white";
}
function func(){
    document.getElementById("demo1").style.backgroundColor="teal";
}
function func1(){
    document.getElementById("demo1").style.backgroundColor="white";
}

//creators//

function hovering(valued){
    if(valued==1){
        document.getElementById(valued).src="img/instagram.jpeg";
    }
    else if(valued==2){
        document.getElementById(valued).src="img/instagram.jpeg";
    }
    else if(valued==3){
        document.getElementById(valued).src="img/instagram.jpeg";
    }
    else if(valued==4){
        document.getElementById(valued).src="img/instagram.jpeg";
    }
    else if(valued==5){
        document.getElementById(valued).src="img/instagram.jpeg";
    }
}
function unhovering(valued){
    if(valued==1){
        document.getElementById(valued).src="img/Arjun.jpeg";
    }
    else if(valued==2){
        document.getElementById(valued).src="img/Eniyan.jpeg";
    }
    else if(valued==3){
        document.getElementById(valued).src="img/Pierre.jpeg";
    }
    else if(valued==4){
        document.getElementById(valued).src="img/Suyash.jpeg";
    }
    else if(valued==5){
        document.getElementById(valued).src="img/Varun Aditya.jpeg";
    }
}
function opening(valued){
    if(valued==1){
        open('https://www.instagram.com/arjunkartha_/');
    }
    else if(valued==2){
        open('https://www.instagram.com/eniyan.photography/');
    }
    else if(valued==3){
        open('https://www.instagram.com/pierretlambert');
    }
    else if(valued==4){
        open('https://www.instagram.com/suyashkeshari/');
    }
    else if(valued==5){
        open('https://www.instagram.com/varun.aditya/');
    }
}

//pictures//

//heart//
function mycl(){
    document.getElementById("img").src="img/nfill/3.png"
}
function myclk(){
    document.getElementById("img").src="img/nfill/4.png"
}

//save//
function mycl1(){
    document.getElementById("img1").src="img/fill/7.png"
}
function myclk1(){
    document.getElementById("img1").src="img/heart/6.png"
}

//heart//
function mycl2(){
    document.getElementById("img2").src="img/nfill/3.png"
}
function myclk2(){
    document.getElementById("img2").src="img/nfill/4.png"
}

//save//
function mycl3(){
    document.getElementById("img3").src="img/fill/7.png"
}
function myclk3(){
    document.getElementById("img3").src="img/heart/6.png"
}

//heart//
function mycl4(){
    document.getElementById("img4").src="img/nfill/3.png"
}
function myclk4(){
    document.getElementById("img4").src="img/nfill/4.png"
}

//save//
function mycl5(){
    document.getElementById("img5").src="img/fill/7.png"
}
function myclk5(){
    document.getElementById("img5").src="img/heart/6.png"
}

//heart//
function mycl6(){
    document.getElementById("img6").src="img/nfill/3.png"
}
function myclk6(){
    document.getElementById("img6").src="img/nfill/4.png"
}

//save//
function mycl7(){
    document.getElementById("img7").src="img/fill/7.png"
}
function myclk7(){
    document.getElementById("img7").src="img/heart/6.png"
}

//heart//
function mycl8(){
    document.getElementById("img8").src="img/nfill/3.png"
}
function myclk8(){
    document.getElementById("img8").src="img/nfill/4.png"
}

//save//
function mycl9(){
    document.getElementById("img9").src="img/fill/7.png"
}
function myclk9(){
    document.getElementById("img9").src="img/heart/6.png"
}

//heart//
function mycl10(){
    document.getElementById("img10").src="img/nfill/3.png"
}
function myclk10(){
    document.getElementById("img10").src="img/nfill/4.png"
}

//save//
function mycl11(){
    document.getElementById("img11").src="img/fill/7.png"
}
function myclk11(){
    document.getElementById("img11").src="img/heart/6.png"
}

//password//

//Pass Validate//

function matchpass(){  
    var firstpassword=document.getElementById("pass").value;  
    var secondpassword=document.getElementById("pass1").value;  
      
    if(firstpassword==secondpassword && firstpassword!=""){  
    return true;  
    }  
    else{ 
    return false;  
    }
}

//sub//

function sub(){
    if(matchpass()){
        alert("password is correct");
        location.href="login.html"
    }
    else{
        alert("password must be same!"); 
        location.href="ca.html"
    }
}

//alerty//

function alerty(){
    let len=phoneno.length;
    if(phoneno!=""&&len!=10){
        alert("Enter number again.");
    }
    else{
        alert("The code has been sent.");
    }
}