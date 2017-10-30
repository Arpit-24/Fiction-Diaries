var game_index; //index of game to be played 0:GOT 1:HP 2:MARVEL 3:DC
var curr_game; //index of game playing currently ....
var game_info_title=["GOT QUIZ","HP QUIZ","MARVEL QUIZ","DC QUIZ"];
var game_states=[0,0,0,0];
var character=[-1,-1,-1,-1];
var loaded;
var ins=[["1) You are assigned a House based on the Bhawan you are in. All points you earn are added to the House's total to determine Top performing House.","2) There are 30 Randomly Selected Multiple Choice Questions to be answered.","3) Click on the option to select the answer and click Submit to submit the Answer.","4) Each Correct Answer will fetch you and your House 100 points. There will be no points deducted for Wrong Answers.","5) You can check your points and leaderboard's anytime by clicking on the Leaderboard option below."],
            ["1) You are assigned a House randomly. All points you earn are added to the House's total to determine Top performing House.","2) There are 30 Randomly Selected Multiple Choice Questions to be answered.","3) Click on the Radio Button next to an option to select the answer and click Submit to submit the Answer.","4) Each Correct Answer will fetch you and your House 100 points. There will be no points deducted for Wrong Answers.","5) You can check your points and leaderboard's anytime by clicking on the Leaderboard option below."],
            ["1) Choose your favourite Supervillain and show the Heroes how awesome Your skills are. All points you earn are added to the Character's total to determine Top performing Character.","2) There are 30 Randomly Selected Multiple Choice Questions to be answered.","3) Click on the Radio Button next to an option to select the answer and click Submit to submit the Answer.","4) Each Correct Answer will fetch you and your Selected Character 100 points. There will be no points deducted for Wrong Answers.","5) You can check your points and leaderboard's anytime by clicking on the Leaderboard option below."],
            ["1) Choose your favourite Superhero and defeat Steppenwolf from invading the Earth. All points you earn are added to the Character's total to determine Top performing Character.","2) There are 30 Randomly Selected Multiple Choice Questions to be answered.","3) Click on the Radio Button next to an option to select the answer and click Submit to submit the Answer.","4) Each Correct Answer will fetch you and your Selected Character 100 points. There will be no points deducted for Wrong Answers.","5) You can check your points and leaderboard's anytime by clicking on the Leaderboard option below."]];
$(document).ready(function(){
    main_load();
});
function main_load() {
    document.getElementsByTagName('body')[0].style.overflow='hidden';
    var main_queue = new createjs.LoadQueue(false);
    main_queue.on("complete",main_handleComplete,this);
    main_queue.loadManifest([
        "/static/media/Batman-load.svg",
        "/static/media/got_loader.gif",
        "/static/media/Joker-load.svg",
        "/static/media/loadBlood.gif",
        "/static/media/GOT/Got.png",
        "/static/media/HP/hp-card.svg",
        "/static/media/Marvel/Anti.svg",
        "/static/media/DC/DC_card.svg",
    ]);
    function main_handleComplete() {
        document.getElementsByTagName('body')[0].style.overflow='auto';
        // Hide Main Loader
        // Display Swiper
    }
}
function el(x)
{
    return document.getElementsByClassName(x);
}
function expand(b)
{
    //alert(b.id);
    c=b.parentNode;
    //alert(c.id);
    el("message-home")[0].style.height="92vh";
    el("message-title")[0].style.display="flex";
    el("message-content")[0].style.display="flex";
    el("message-title")[0].innerHTML=game_info_title[game_index];
    c.style.opacity="0.9";

}
function leadofgame()
{
    el("navign-play")[0].style.display="none";
    el("navign-back")[0].style.display="flex";
    var leaderboard_class= el("gameleaderboard-"+game_index)[0];
    leaderboard_class.style.display="block";
    leaderboard_class.style.height="92vh";
    getLeaderboardData(game_index);
}
function hometoconf(a)
{
    var elem=el("home-swiper-slide swiper-slide-active")[0];
    game_index=elem.id;
    // alert(game_index);
    //alert(a.id);
    expand(a);
    //home to confirm
    el("navign-home")[0].style.display="none";
    el("navign-confirm")[0].style.display="flex";
}
function conftohome()
{
    el("message-home")[0].style.height="0vh";
    el("message-title")[0].style.display="none";
    el("message-content")[0].style.display="none";
    el("navign-home")[0].style.display="flex";
    el("navign-confirm")[0].style.display="none";
}
function conftoload()
{
    var elem=el("home-swiper-slide swiper-slide-active")[0];
    game_index=elem.id;
    currgame_class="game-"+game_index;
    loader_class="loader-"+game_index;
    curringame_class="ingame-"+game_index;
    // alert(currgame_class);

    var d = document.getElementById("flip");
            d.className += " flipped";
    el(loader_class)[0].style.display="flex";

    el("message-home")[0].style.height="0vh";
    el("message-title")[0].style.display="none";
    el("message-content")[0].style.display="none";
    el("navign-confirm")[0].style.display="none";

    el("card")[0].style.display="none";

    el("navign-loading")[0].style.display="flex";

    el(currgame_class)[0].style.display="block";
    el(curringame_class)[0].style.display="none";
el("message-title")[0].innerHTML="Title";
    setTimeout(load(game_index),5000);
}
function load(ind)
{
    loaded=0;
    // alert("loading assets for game-"+ind);
    if(game_index==0)
        load_got_images();
    else if (game_index==1)
        load_hp_images();
    else if(game_index==2)
        load_marvel_images();
    else if(game_index==3)
        load_dc_images();
    //to load assets
    //check if assets are loaded
    //loaded=1;
    //yes_loaded();
}
function yes_loaded()  
{   //assets have been loaded
    if(loaded)
    {   
        currgame_class="game-"+game_index;
        loader_class="loader-"+game_index;
        curringame_class="ingame-"+game_index;
        //loader invisible... ingame visible..
        el(loader_class)[0].style.display="none";
        el(curringame_class)[0].style.display="block";
        el("navign-loading")[0].style.display="none";
        if(game_index==0 && check==0)
            {el("navign-got")[0].style.display="flex";}
        else if(game_index==0 && check==1)
            {el("navign-play")[0].style.display="flex"; document.getElementById("b1").style.visibility="hidden"; show_ques_div(0);}
        else if (game_index==0 && check==2) {
            got_finished();
        }
        else if(game_index==1)
        {el(currgame_class)[0].style.display="flex"; map();el("navign-play")[0].style.display="flex";document.getElementsByTagName("body")[0].style.overflow="hidden";show_ques_div(1);}
        //MARVEL
        else if(game_index==2)
        {do_marv(); update_marv(); }

        else if(game_index==3)
        {do_dc(); update_dc();}
    }

}
function loadtohome()
{
    currgame_class="game-"+game_index;
    loader_class="loader-"+game_index;
    el("navign-loading")[0].style.display="none";
    el(currgame_class)[0].style.display="none";
    el(loader_class)[0].style.display="none";
    //el("message-home")[0].style.height="0vh";
    //el("message-title")[0].style.display="none";
    //el("message-content")[0].style.display="none";
    el("navign-home")[0].style.display="flex";
    el("card")[0].style.display="flex";
    //el("message-title")[0].innerHTML="Title";
    update_home();
}
/*function conftogame()
{
    var elem=el("swiper-slide swiper-slide-active")[0];
    game_index=elem.id;
    currgame_class="game-"+game_index;
    alert(currgame_class);
    el(currgame_class)[0].style.display="block";
    el("message-home")[0].style.height="0vh";
    el("message-title")[0].style.display="none";
    el("message-content")[0].style.display="none";
    el("navign-confirm")[0].style.display="none";
    //el("navign-play")[0].style.display="flex";
    el("card")[0].style.display="none";
    el("message-title")[0].innerHTML="Title";
    if(game_index==1)
        {el(currgame_class)[0].style.display="flex"; map();}
    else if(game_index==2)
        {do_marv(); update_marv();}
    else if(game_index==3)
        {do_dc(); update_dc(); el("navign-dccomics")[0].style.display="flex";}
}
*/
/*function gametohome()
{
    currgame_class="game-"+game_index;
    alert(currgame_class);
    el(currgame_class)[0].style.display="none";
    el("message-home")[0].style.height="0vh";
    el("message-title")[0].style.display="none";
    el("message-content")[0].style.display="none";
    el("navign-play")[0].style.display="none";
    if(game_index==3)
        el("navign-dccomics")[0].style.display="none";       
    el("navign-home")[0].style.display="flex";
    el("card")[0].style.display="flex";
    el("message-title")[0].innerHTML="Title";
    update_home();
}
*/
function gametohome()
{
    currgame_class="game-"+game_index;
    // alert(currgame_class);
    curringame_class="ingame-"+game_index;
    // alert(curringame_class);
    el(currgame_class)[0].style.display="none";
    el(curringame_class)[0].style.display="none";

    el("navign-play")[0].style.display="none";

    el("navign-home")[0].style.display="flex";
    el("card")[0].style.display="flex";

    el("message-home")[0].style.height="0vh";
    el("message-title")[0].style.display="none";
    el("message-content")[0].style.display="none";
    

    el(game_index+"-ques-box")[0].style.height="0vh";
    document.getElementsByClassName(game_index+"-ques-title")[0].style.display="none";
    document.getElementsByClassName(game_index+"-ques-content")[0].style.display="none";
    document.getElementsByClassName(game_index+"-ques-footer")[0].style.display="none"; 

    update_home();

}
function insofgame()
{

    el("message-home")[0].style.height="92vh";
    // alert(game_index);
    el("message-title")[0].innerHTML=game_info_title[game_index];   
    el("message-title")[0].style.display="flex";
    el("message-content")[0].style.display="flex";
    //el("message-content")[0].innerHTML=inst[game_index];
    el("navign-play")[0].style.display="none";
    el("navign-back")[0].style.display="flex";
    for(p=0;p<5;p++)
    document.getElementById("game-ins-"+(p+1)).innerHTML=ins[game_index][p];
}
function backonly()
{
    el("message-home")[0].style.height="0vh";
    el("message-title")[0].style.display="none";
    el("message-content")[0].style.display="none";
    el("message-title")[0].innerHTML="Title";
    el("navign-play")[0].style.display="flex";
    el("navign-back")[0].style.display="none";
     for(p=0;p<5;p++)
        document.getElementById("game-ins-"+(p+1)).innerHTML="";
    var leaderboard_class= el("gameleaderboard-"+game_index)[0];
    leaderboard_class.style.height="0vh";
}

function load_got_images(){
    document.getElementsByTagName('body')[0].style.overflow='hidden';
    document.getElementsByTagName('html')[0].style.overflow='hidden';
    var got_queue = new createjs.LoadQueue(false);
    got_queue.on("complete", got_handleComplete, this);
    got_queue.loadManifest([
        "/static/media/GOT/Cards/0.svg",
        "/static/media/GOT/Cards/1.svg",
        "/static/media/GOT/Cards/2.svg",
        "/static/media/GOT/Cards/3.svg",
        "/static/media/GOT/Cards/4.svg",
        "/static/media/GOT/Cards/5.svg",
        "/static/media/GOT/Cards/6.svg",
        "/static/media/GOT/Cards/7.svg",
        "/static/media/GOT/Cards/GOT.svg",
        "/static/media/GOT/Cards/gotend.svg",
        "/static/media/GOT/Dani.svg",
        "/static/media/GOT/Dani-1.svg",
        "/static/media/got-cards/default.svg",
        "/static/media/got-cards/arryn.svg",
        "/static/media/got-cards/baratheon.svg",
        "/static/media/got-cards/greyjoy.svg",
        "/static/media/got-cards/lannister.svg",
        "/static/media/got-cards/mormont.svg",
        "/static/media/got-cards/stark.svg",
        "/static/media/got-cards/targaryen.svg",
        "/static/media/got-cards/tyrell.svg"
    ]);
    function got_handleComplete() {
        loaded=1;
        yes_loaded();
        document.getElementsByTagName('body')[0].style.overflow='auto';
        document.getElementsByTagName('body')[0].style.overflow='auto';
    }
}
//HP LOAD
function load_hp_images() {
    document.getElementsByTagName('body')[0].style.overflow='hidden';
    var hp_queue = new createjs.LoadQueue(false);
    hp_queue.on("complete", hp_handleComplete, this);
    hp_queue.loadManifest([
        "https://static.pexels.com/photos/34950/pexels-photo.jpg",
        "https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg",
        "https://i.pinimg.com/originals/5a/e5/8f/5ae58f5036997cfd4636917403c3c951.jpg",
        "https://thecraft.shorthand.com/editing-tricks-using-picmonkey-to-add-filters-layers-to-images/media/sunflowers-mr.jpg",
        "/static/media/cards/Arryn.svg",
        "/static/media/cards/Greyjoy.svg",
        "/static/media/cards/Lannister.svg",
        "/static/media/cards/Mormont.svg"
    ]);
    function hp_handleComplete() {
        loaded=1;
        yes_loaded();
        document.getElementsByTagName('body')[0].style.overflow='hidden';
    }
}

var ans_select=-1;
var corr_ans=-1;
function show_ques_div(curr) {
    document.getElementsByClassName(curr+"-ques-box")[0].style.height="92vh"; 
    document.getElementsByClassName(curr+"-ques-title")[0].style.display="flex";
    document.getElementsByClassName(curr+"-ques-content")[0].style.display="flex";
    document.getElementsByClassName(curr+"-ques-footer")[0].style.display="flex"; 
    document.getElementsByClassName("sub-ans")[game_index].style.display="flex";
    // document.getElementsByClassName("sub-ans")[2*game_index+1].style.display="flex";
    document.getElementsByClassName("next-ans")[game_index].style.display="none";
    getInitialQuestions();
}
// selecting different single options
function select_answer(sel) {
    ans_select=sel;
    restore_again();
    document.getElementsByClassName("choice-"+sel+"-"+game_index)[0].style.color="white";
    document.getElementsByClassName("choice-"+sel+"-"+game_index)[0].style.background="black";
}
// submitting answer
function submit_ans() {
    if(document.getElementsByClassName("choice-"+ans_select+"-"+game_index)[0].style.color=="white") {
        getSubmitResponse();
        //retrieve true answer "corr_ans"
        //correct answer has been retrieved
    }
}
function checkAns() {
    document.getElementsByClassName("sub-ans")[game_index].style.display="none";
    // document.getElementsByClassName("sub-ans")[2*game_index+1].style.display="none";
    document.getElementsByClassName("next-ans")[game_index].style.display="flex";
    //CORRECT ANSWER
    if(corr_ans==ans_select) {
        //GREEN COLOUR
        document.getElementsByClassName("choice-"+ans_select+"-"+game_index)[0].style.background="green";
        //CHANGE FORMAT FOR NEW QUESTION DIV AFTER TWO SECONDS
        //setTimeout(restore_again(),50000);
    } 
    // wrong answer
    else {
        document.getElementsByClassName("choice-"+corr_ans+"-"+game_index)[0].style.background="green";
        document.getElementsByClassName("choice-"+ans_select+"-"+game_index)[0].style.background="red";
    }
}
//restore again to turn format correctly
function restore_again() {
    for(i=0;i<4;i++) {
        document.getElementsByClassName("choice-"+i+"-"+game_index)[0].style.color="black";
        document.getElementsByClassName("choice-"+i+"-"+game_index)[0].style.background="white";
    }
}
//to display next question
function next_ques() {
    restore_again();
    document.getElementsByClassName("sub-ans")[game_index].style.display="flex";
    // document.getElementsByClassName("sub-ans")[2*game_index+1].style.display="flex";
    document.getElementsByClassName("next-ans")[game_index].style.display="none";
    //display new question and new options
    updateQues(nextQues,nextOp1,nextOp2,nextOp3,nextOp4,nextQuesNo);
}
// leaving question
// HP CANVAS
function map()
{
    // create a canvas and add it to the DOM

var createImage=function(w,h){var i=document.createElement("canvas");i.width=w;i.height=h;i.ctx=i.getContext("2d");return i;}
var canvas = createImage(1024, 512);
var ctx = canvas.ctx;

//var canvas = document.getElementById('foo'),
 //   context = canvas.getContext('2d');

//canvas.style.scale(1.5);

// Rotates the canvas 90 degrees
if(1.2*window.innerHeight>window.innerWidth)
    {canvas.style.transform="rotate(90deg)";
}
canvas.style.maxWidth="100vw";
canvas.style.maxHeight="92vh";
canvas.style.border="2px solid #cc8800";        
document.getElementById("HP").appendChild(canvas);

// shapes for the foot. Left foot
const foot = [
    [50.86759744022923,-21.798383338076917,54.16000854997335,-23.917474843549847,57.778065334829385,-25.310771525314685,61.579706305344985,-24.823762596975733,65.0168431653022,-22.69100336700319,65.22736925598322,-19.777045647294724,63.09649708656406,-16.826669881834157,59.66512409715465,-15.356252875428147,56.12216018899968,-14.92259970211097,52.06404407417057,-16.231839553378,50.2945579442406,-18.938589556263246],
    [60.12039562389232,-12.45714817900668,63.92394094034509,-14.994440399059425,68.75013312287521,-15.737202635924493,73.10937504616481,-14.878459739068003,76.36064492186433,-12.559833524837757,77.6863729180915,-9.181208344485064,75.4625672565435,-5.673231626251427,71.79886053681197,-3.7381471592011817,66.8618942467243,-3.4903609701416993,62.29264392518654,-5.1248680438596885,58.98975517513061,-8.760952968033395],
    [65.57414109270752,1.1797411270282658,69.37768640916029,-1.3575510930244814,74.20387859169041,-2.1003133298895467,78.56312051498001,-1.241570433033059,81.81439039067953,1.0770557811971881,83.14011838690669,4.455680961549877,80.9163127253587,7.963657679783514,77.25260600562717,9.898742146833756,72.3156397155395,10.146528335893239,67.74638939400174,8.512021262175251,64.44350064394581,4.875936338001546],
    [65.89915812212375,15.917267748549033,69.97688522977245,12.635767809535894,76.25232402290966,11.736330263416008,81.47328014710077,12.477566678331382,86.09545897877996,15.579569438835726,86.99032987455637,21.425830739951824,83.82647235747945,24.97297628549917,79.18353918133074,27.064789354098487,73.69821507617947,27.23418460503707,68.46309469655478,24.972976285499172,64.88602415530316,20.55351481505123],
    [58.48881251239855,36.09589759380796,65.7080603859302,29.82038065752831,74.19222753183148,28.331948884004674,82.75081761131048,31.085582242549528,88.10923922724437,34.28575070762116,91.45825273720305,41.65358042953028,87.067323913035,47.45853718012533,79.77391671356942,50.28659303297933,71.73628428966856,50.06332546564875,64.14518700042888,47.45853718012533,60.12637078847845,42.69549574373964],
    [-73.48953442580058,20.579088801900756,-80.48690958722098,13.959950657259256,-81.93681598574045,6.269142804242765,-81.49554012532147,-1.6107832746678348,-77.90207999991593,-9.181527272091415,-71.6611785393426,-14.98115303708649,-64.60076477263831,-17.880965834138024,-57.35123278004056,-19.078714598132443,-50.09111381970131,-19.902008890566687,-42.96765884171789,-19.08249722231963,-35.655087439697766,-18.51514254492067,-28.90987071615029,-18.578181953551955,-21.74774447703016,-19.60773669210723,-14.309090001741001,-20.364210136314323,-6.933479190821032,-21.688037717705875,0.33383104043200396,-22.888118253462963,7.772483543580581,-23.77067027395373,15.274173171058239,-24.338024951681817,22.460665755024706,-24.590182586206954,29.710197747622452,-23.707630865368966,36.8557533915613,-22.565778766908277,44.16832856198768,-19.28772830000901,51.48089996424725,-14.370654426435763,56.713170880643965,-7.499358885625703,60.24016927073608,-0.41616112008138906,61.75311234056134,6.518193267525415,62.38350642684393,13.515567625813127,61.67231220934209,20.50500542283382,59.08769637136125,27.56541945045329,54.35974072401175,34.87799085169213,48.686193947196124,39.41682827314464,41.87793781501736,42.379680478815025,34.313208779263185,43.26223219965301,27.063676786665432,42.25360166155246,19.625026568173826,38.28211891778152,13.457927624759604,31.720792179781256,9.486440924356895,25.290772320002496,6.019273449215143,18.7346738223298,0.21964785513691965,13.565442314564446,-5.832135373466421,9.467880753530935,-12.632472285211591,8.882365666622222,-19.188577231399584,11.277861070017005,-26.31203040678842,14.49287091019486,-32.99420772170462,17.833959567652954,-39.2981485848331,20.670732956060768,-45.854247082486715,23.192309301312157,-52.47338498877162,24.89437333435685,-59.5968381641068,25.020452151619416,-67.33461307855538,23.697386555044208],
]
const footScale = 0.2; // how big the foot is
const stepLen = 60; // distance between steps
var stepCount = 0;  // current set num so left and right can be known
var stepTime = 500; // time ms between steps
// path to walk
const path = [56.77,162.7,83.44,172.07,107.08,192.72,121.68,221.07,124.95,256.9,141.62,293.7,168.36,311.9,203.16,336.6,238.7,344.9,278.6,341.4,316.66,329.76,343.35,310.4,370.04,275.5,359.46,244.25,344.66,207.44,355.93,168.3,394.3,137.8,438.7,137.04,487.07,174.4,507.2,221.3,513.2,269.,500.47,318.43,480.2,354.74,453.34,396.07,414.1,427.6,372.2,447.4,320.2,442.,272.24,427.4,218.75,441.8,185.98,472.15,160.,514.8,168.2,557.2,200.95,598.4,232.3,627.1,273.94,651.1,320.7,663.5,368.6,663.7,417.1,649.1,460.3,626.,509.44,593.9,530.9,556.6,559.1,517.9,582.3,484.23,597.9,459.96,621.6,438.54,651.8,429.67,686.4,432.03,726.3,421.4,748.6,397.3,778.7,367.3,792.4,335.3,795.3,294.2,790.7,255.39,776.2,225.,746.8,192.03,713.6,199.94,674.9,207.1,638.7,190.82,613.5,146.98,621.7,103.,665.4,60.31,716.3,48.88,763.3,51.03,810.9,71.65,842.,97.05,879.7,131.36,903.6,175.06,915.1,219.96,902.4,270.7,880.6,315.3,884.8,370.07,909.3,407.6,947.2,439.8,990.9,439.56,1036.6,414.94,1070.2,387.4,1100.7,351.4,1119.,306.8,1128.9,259.14,1122.8,208.07,1106.3,162.32,1082.5,108.17,1050.8,81.88,1016.,46.29];

const pLen = path.length;
// fix the path so it starts at zero
for(var i = 2; i < pLen; i += 2){
    path[i] -= path[0];
    path[i+1] -= path[1];
}
path[0] = path[1] = 0;

// tracks the foot pos
var pos = {
    x : path[0],
    y : path[1],
    index : 0,
};
// tracks the foot pointing to pos
var pos1 = {
    x : path[0],
    y : path[1],
    index : 0,
};
// get a distance alone the path
function getDistOnPath(dist,pos){
    var nx = path[(pos.index + 2) % pLen] - pos.x;
    var ny = path[(pos.index + 3) % pLen] - pos.y;
    var d = Math.hypot(nx, ny);
    if(d > dist){
        pos.x += (nx / d) * dist;
        pos.y += (ny / d) * dist;
        return pos;
    }
    dist -= d;
    pos.index += 2;
    pos.x = path[pos.index % pLen];
    pos.y = path[(pos.index + 1) % pLen];
    return getDistOnPath(dist, pos);
}

function drawFoot(x,y,dir,left){
    var i,j,shape;
    var xdx = Math.cos(dir) * footScale;
    var xdy = Math.sin(dir) * footScale;
    
    if(left){
        ctx.setTransform(xdx, xdy, -xdy, xdx, x + xdy * 50, y - xdx * 50);
        ctx.rotate(-0.1); // make the foot turn out a bit
    }else{

        ctx.setTransform(xdx, xdy, -xdy, xdx, x - xdy * 50, y + xdx * 50);
        ctx.rotate(-0.1); // make the foot turn out a bit
        ctx.scale(1,-1);  // right foot needs to be mirrored
    }
    // draw the foot as a set of paths points
    ctx.beginPath();
    for(j = 0; j < foot.length; j ++){
        shape = foot[j];
        i = 0;
        ctx.moveTo(shape[i++],shape[i++]);
        while(i < shape.length){
            ctx.lineTo(shape[i++],shape[i++]);
        }
        ctx.closePath();
    }
    ctx.fill();
}

ctx.setTransform(1,0,0,1,0,0);
ctx.clearRect(0,0,canvas.width,canvas.height);
pos1 = getDistOnPath(stepLen/10,pos1); // put the second pos infront so that a direction can be found

function drawStep(){
    if(pos.index > pLen){  // if past end of path clear and restart
        ctx.setTransform(1,0,0,1,0,0);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        pos.index = 0;
        pos1.index = 0;
        pos1.x = pos.x = path[0];
        pos1.y = pos.y = path[1];
        pos1 = getDistOnPath(stepLen/10,pos1);
    }
    pos = getDistOnPath(stepLen,pos);
    pos1 = getDistOnPath(stepLen,pos1);
    drawFoot(pos.x,pos.y,Math.atan2(pos1.y - pos.y, pos1.x - pos.x),(stepCount++) % 2 === 0);
    setTimeout(drawStep,stepTime);
}
drawStep();
}

// -------------------------- Functions and Variables for AJAX -------------------------

var nextQues, nextOp1, nextOp2, nextOp3, nextOp4, nextQuesNo;

$(document).ready(function() {
    getInitialStates();
});

function assignHouse(x,y) {
    if(x==0) {
        if (y==0) {
            return "House Arryn";
        } else if (y==1) {
            return "House Baratheon";
        } else if (y==2) {
            return "House Greyjoy";
        } else if (y==3) {
            return "House Lannister";
        } else if (y==4) {
            return "House Mormont";
        } else if (y==5) {
            return "House Stark";
        } else if (y==6) {
            return "House Targaryen";
        } else {
            return "House Tyrell";
        }
    } else if (x==1) {
        if (y==0) {
            return "House Gryffindor";
        } else if (y==1) {
            return "House Hufflepuff";
        } else if (y==2) {
            return "House Ravenclaw";
        } else {
            return "House Slytherin";
        }
    } else if (x==2) {
        if (y==0) {
            return "Character Magneto";
        } else if (y==1) {
            return "Character Doom";
        } else if (y==2) {
            return "Character Kingpin";
        } else if (y==3) {
            return "Character Thanos";
        } else if (y==4) {
            return "Character Redskull";
        } else {
            return "Character Venom";
        }
    } else {
        if (y==0) {
            return "Character Superman";
        } else if (y==1) {
            return "Character Wonder-Woman";
        } else if (y==2) {
            return "Character Batman";
        } else if (y==3) {
            return "Character Green-Lantern";
        } else if (y==4) {
            return "Character Flash";
        } else {
            return "Character Aquaman";
        }
    }
    return "";
}

function updateQues(questi,op1,op2,op3,op4,qno) {
    var x = game_index;
    document.getElementById(x+'-ques-ques').innerHTML=questi;
    document.getElementsByClassName('option-1')[x].innerHTML=op1;
    document.getElementsByClassName('option-2')[x].innerHTML=op2;
    document.getElementsByClassName('option-3')[x].innerHTML=op3;
    document.getElementsByClassName('option-4')[x].innerHTML=op4;
    document.getElementsByClassName('ques-no')[x].innerHTML=qno;
}

function getInitialStates() {
    $.ajax({
        url: "/start/",
        type: "GET",
        // data: "",
        // dataType: 'json',
        success: function(jsondata) {
            var objReceived = jQuery.parseJSON(JSON.stringify(jsondata));
            for (var i = 0; i < 4; i++) {
                game_states[i] = objReceived.state[i] // Get Array of States here.
                character[i] = objReceived.house[i] // Get Array of Selected House/Chars here
            }
            document.getElementById('user-name-sec').innerHTML = objReceived.user; // Update Name of User
            assign_marvel_vars();
            assign_dc_vars();
            assign_got_vars();
        },
        error: function() {
            console.log('Error Fetching Game States');
            // game_states[2]=0;
            // game_states[3]=0;
            // character[2]=5;
            // character[3]=5;
            // assign_dc_vars();
            // assign_marvel_vars();
            // game_states[0]=0;
            // character[0]=0;
            // assign_got_vars();
        }
    });
}

function sendSelectedChar(x,y) {
    $.ajax({
        url: "/main/"+x+"/"+y+"/",
        type: "GET",
         data: {'variable':x,'house':y},
         dataType: 'json',
        success: function(jsondata) {
            var objReceived = jQuery.parseJSON(JSON.stringify(jsondata));
            console.log(objReceived.vgv);
            if (x==0) {
                check=1;
            }
        },
        error: function() {
            console.log('Error Sending Selected Char');
            // check=1;
        }
    });
}
function getLeaderboardData(x) {
    var y;
    var quiz_name;
    if (x==0) {
        y=8;
        quiz_name="got";
    } else if (x==1) {
        y=4;
        quiz_name="hp";
    } else if (x==2) {
        y=6;
        quiz_name="marvel";
    } else {
        y=6;
        quiz_name="dc";
    }
    $.ajax({
        url: "/"+x+"/leaderboard/",
        type: "GET",
        // data: {'variable':x},
        // dataType: 'json',
        beforeSend: function() {
            document.getElementsByClassName(quiz_name+'-standalone-name')[0].innerHTML="Loading...";
            document.getElementsByClassName(quiz_name+'-standalone-house')[0].innerHTML="Loading...";
            document.getElementsByClassName(quiz_name+'-standalone-points')[0].innerHTML="Loading...";
            document.getElementsByClassName('rank')[x].innerHTML="Loading...";
            for (var i = 0; i < 10; i++) {
                document.getElementsByClassName(quiz_name+'-individual-name')[i].innerHTML="Loading...";
                document.getElementsByClassName(quiz_name+'-individual-house')[i].innerHTML="Loading...";
                document.getElementsByClassName(quiz_name+'-individual-points')[i].innerHTML="Loading...";
            }
            for (var i = 0; i < y; i++) {
                document.getElementsByClassName(quiz_name+'-house-house')[i].innerHTML="Loading...";
                document.getElementsByClassName(quiz_name+'-house-points')[i].innerHTML="Loading...";
            }
        },
        success: function(jsondata) {
            var objReceived = jQuery.parseJSON(JSON.stringify(jsondata));
            document.getElementsByClassName(quiz_name+'-standalone-name')[0].innerHTML=objReceived.current_user[0];
            document.getElementsByClassName(quiz_name+'-standalone-house')[0].innerHTML=assignHouse(x,objReceived.current_user[2]);
            document.getElementsByClassName(quiz_name+'-standalone-points')[0].innerHTML=objReceived.current_user[3];
            document.getElementsByClassName('rank')[x].innerHTML=objReceived.current_user[1];
            for (var i = 0; i < 10; i++) {
                document.getElementsByClassName(quiz_name+'-individual-name')[i].innerHTML=objReceived.username[i];
                document.getElementsByClassName(quiz_name+'-individual-house')[i].innerHTML=assignHouse(x,objReceived.house[i]);
                document.getElementsByClassName(quiz_name+'-individual-points')[i].innerHTML=objReceived.score[i];
            }
            for (var i = 0; i < y; i++) {
                document.getElementsByClassName(quiz_name+'-house-house')[i].innerHTML=assignHouse(x,objReceived.house_leaderboard[0][i]);
                document.getElementsByClassName(quiz_name+'-house-points')[i].innerHTML=objReceived.house_leaderboard[1][i];
            }
            setTimeout(quiz_name+"_assign_image_house()", 500);
            setTimeout(quiz_name+"_assign_image_individual()", 500);
            setTimeout(quiz_name+"_assign_image_standalone()", 500);
        },
        error: function() {
            console.log('Error Getting Leaderboard Data')
        }
    });
}
function getInitialQuestions() {
    // Get Questions and Display..
    var x = game_index;
    $.ajax({
        url: "/"+x+"/detail/",
        type: "GET",
        // data: {'variable': x},
        // dataType: 'json',
        beforeSend: function() {
            updateQues("Loading","Loading","Loading","Loading","Loading","Loading");
        },
        success: function(jsondata) {
            var objReceived = jQuery.parseJSON(JSON.stringify(jsondata));
            var currQues=objReceived.question_text;
            var currOp1=objReceived.option_1;
            var currOp2=objReceived.option_2;
            var currOp3=objReceived.option_3;
            var currOp4=objReceived.option_4;
            var currQno=objReceived.qsno;
            updateQues(currQues,currOp1,currOp2,currOp3,currOp4,currQno);
        },
        error: function() {
            console.log('Error Fetching Question');
            // updateQues("Hi","Hi","Hi","Hi","hi","hi");
        }
    });
}
function getSubmitResponse() {
    //Get Submit Response..
    var x = game_index;
    $.ajax({
        url: "/"+x+"/answer/",
        type: "GET",
        data: {'variable': x,'answerof':ans_select},
        dataType: 'json',
        beforeSend: function() {
            // Change Cursor on hover on Submit to Loading Circle
        },
        success: function(jsondata) {
            var objReceived = jQuery.parseJSON(JSON.stringify(jsondata));
            // Update Details..
            corr_ans=objReceived.correctanswer;
            checkAns();
            nextQues=objReceived.question_text;
            nextOp1=objReceived.option_1;
            nextOp2=objReceived.option_2;
            nextOp3=objReceived.option_3;
            nextOp4=objReceived.option_4;
            nextQuesNo=objReceived.qsno;
            if (objReceived.NoQuesLeft==0) {
                if (x==0) {
                    check=2;
                    got_finished();
                } else if (x==1) {
                    // Display Finished HP
                } else if(x==2) {
                    ques_state=2;
                    do_marv();
                } else {
                    dc_ques_state=2;
                    do_dc();
                }
            }
        },
        error: function() {
            console.log('Error Submitting Respose');
            // ques_state=2;
            // do_marv();
            // corr_ans=3;
            // checkAns();
            // updateQues("Hi","Hi","Hi","Hi","Hi","Hi");
        }
    });
}