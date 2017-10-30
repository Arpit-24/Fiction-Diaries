var bhawan_select;
var check;

function assign_got_vars() {
    bhawan_select = character[0];
    check = game_states[0];
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function callGo(){
    document.getElementById("b2").style.display="block";
    sendSelectedChar(0,bhawan_select);
}
function selectF(x){
    if(x==1){document.getElementById("b1").innerHTML="Ashok Bhawan";bhawan_select=2;}    
    else if(x==2) {document.getElementById("b1").innerHTML="Bhagirath Bhawan";bhawan_select=0;}
    else if(x==3) {document.getElementById("b1").innerHTML="Budh Bhawan";bhawan_select=5;}
    else if(x==4) {document.getElementById("b1").innerHTML="CVR Bhawan";bhawan_select=2;}
    else if(x==5) {document.getElementById("b1").innerHTML="Gandhi Bhawan";bhawan_select=1;}
    else if(x==6) {document.getElementById("b1").innerHTML="Malviya Bhawan";bhawan_select=4;}
    else if(x==7) {document.getElementById("b1").innerHTML="Meera Bhawan";bhawan_select=6;}
    else if(x==8) {document.getElementById("b1").innerHTML="Ram Bhawan";bhawan_select=3;}
    else if(x==9) {document.getElementById("b1").innerHTML="RP Bhawan";bhawan_select=0;}
    else if(x==10) {document.getElementById("b1").innerHTML="Shankar Bhawan";bhawan_select=4;}
    else if(x==11) {document.getElementById("b1").innerHTML="SR Bhawan";bhawan_select=7;}
    else if(x==12) {document.getElementById("b1").innerHTML="Vyas Bhawan";bhawan_select=4;}
    else if(x==13) {document.getElementById("b1").innerHTML="VK Bhawan";bhawan_select=1;}
    else  {document.getElementById("b1").innerHTML="Others";bhawan_select=2;}
    callGo();
}

function card(){
    var c= document.getElementById("card");
    document.getElementById("dropdown").style.display="none";
    document.getElementById("b2").style.display="none";
    c.style.display="block";
    document.getElementById("body-got").style.position="absolute";
    document.getElementById("body-got").style.position="absolute";
    var oi=setInterval(function check_bhawan(){
    if(check==1) {
        document.getElementById("last").classList.remove("final");document.getElementById("last").src="./media/GOT/Cards/"+bhawan_select+".svg";
        el("navign-got")[0].style.display="none";
        el("navign-play")[0].style.display="flex";
        setTimeout(show_ques_div(0),2000);clearTimeout(oi);}
    },1000);
}

function got_finished() {
alert("1");
    if(el("navign-play")[0].style.display=="flex")
        {
            document.getElementsByClassName("next-ans")[0].innerHTML="End of Quiz";
            setTimeout(
                function()
        {el(game_index+"-ques-box")[0].style.height="0vh";
        document.getElementsByClassName(game_index+"-ques-title")[0].style.display="none";
        document.getElementsByClassName(game_index+"-ques-content")[0].style.display="none";
        document.getElementsByClassName(game_index+"-ques-footer")[0].style.display="none";
        disp_dialog_char_finished(z);
        var c= document.getElementById("card");
    document.getElementById("dropdown").style.display="none";
    document.getElementById("b2").style.display="none";
    c.style.display="block";
    document.getElementById("body-got").style.position="absolute";
  
    document.getElementById("last").classList.remove("final");
    document.getElementById("last").src="./media/GOT/Cards/gotend.svg";
        },5000); 
        }
        else{

    var c= document.getElementById("card");
    document.getElementById("dropdown").style.display="none";
    document.getElementById("b2").style.display="none";
    c.style.display="block";
    document.getElementById("body-got").style.position="absolute";

    document.getElementById("last").classList.remove("final");
    document.getElementById("last").src="./media/GOT/Cards/gotend.svg";
    el("navign-got")[0].style.display="none";
    el("navign-play")[0].style.display="flex";}
}