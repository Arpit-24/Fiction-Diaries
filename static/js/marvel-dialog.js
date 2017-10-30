
var ques_state;
var z;

function assign_marvel_vars() {
	ques_state= game_states[2];
	z = character[2];
}
function do_marv() {


	// Get ques_state i.e. First Login = 0, Resumed from a previous quiz = 1, Quiz over = 2

	if (ques_state==0) {
		disp_first_login();
		//NAVIGATION CONTENT
		el("navign-marvcomics")[0].style.display="flex";
	} else if (ques_state==1) {
		// Fetch Selected Character from Database
		// Display Dialogs specific to Selected Character as obtained
		// z is the index of selected char by user as fetched from database
		//NAVIGATION CONTENT
		el("navign-marvcomics")[0].style.display="flex";
		disp_dialog_nick_resume(z);
	} else {
		// Fetch Selected Charater from Database
		// Display Ending Dialogs
		// z is the index of selected char by user as fetched from database
		//NAVIGATION CONTENT
		if(el("navign-play")[0].style.display=="flex")
		{
			document.getElementsByClassName("next-ans")[2].innerHTML="End of Quiz";
			setTimeout(
				function()
	    {el(game_index+"-ques-box")[0].style.height="0vh";
	    document.getElementsByClassName(game_index+"-ques-title")[0].style.display="none";
	    document.getElementsByClassName(game_index+"-ques-content")[0].style.display="none";
	    document.getElementsByClassName(game_index+"-ques-footer")[0].style.display="none";
		disp_dialog_char_finished(z);
		},5000); 
		}
		else{
		el("navign-marvcomics")[0].style.display="flex";disp_dialog_char_finished(z);
		}
		
	}
}

// First Time User Login Dialog

function disp_first_login() {
	document.getElementById('nick-fury').style.display='block';
	document.getElementById('nick-dialog').style.display='block';
	setTimeout('typewriter()', 1800);
	setTimeout('cont()', 4000);
	setTimeout('add_click_cont()', 4520);
}

var aText = new Array("Who the hell are you?", "State your purpose for coming here.");
var iSpeed = 10; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
function typewriter() {
	sContents = ' ';
	iRow = Math.max(0, iIndex - iScrollAt);
	var destination = document.getElementById("typedtext");
	while (iRow < iIndex) {
		sContents += aText[iRow++] + '<br />';
	}
	destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "<span class='cursor'>|</span>";
	if (iTextPos++ == iArrLength) {
		iTextPos = 0;
		iIndex++;
		if (iIndex != aText.length) {
			iArrLength = aText[iIndex].length;
			setTimeout("typewriter()", 10);
		}
	} else {
		setTimeout("typewriter()", iSpeed);
	}
}

// Click Anywhere to continue text

var cText = new Array("Click Anywhere To Continue");
var cSpeed = 10; // time delay of print out
var cIndex = 0; // start printing array at this posision
var cArrLength = cText[0].length; // the length of the text array
var cScrollAt = 20; // start scrolling up at this many lines
var cTextPos = 0; // initialise text position
var cContents = ''; // initialise contents variable
var cRow; // initialise current row

function cont() {
	cContents = ' ';
	cRow = Math.max(0, cIndex - cScrollAt);
	var cdestination = document.getElementById("continue");
	while (cRow < cIndex) {
		cContents += cText[cRow++] + '<br />';
	}
	cdestination.innerHTML = cContents + cText[cIndex].substring(0, cTextPos) + "<span id='c-cursor'>_</span>";
	if (cTextPos++ == cArrLength) {
		cTextPos = 0;
		cIndex++;
		if (cIndex != cText.length) {
			cArrLength = cText[cIndex].length;
			setTimeout("cont()", 10);
		}
	} else {
		setTimeout("cont()", iSpeed);
	}
}

// Unknown Character Dialog

var uText = new Array("I am ........");
var uSpeed = 10; // time delay of print out
var uIndex = 0; // start printing array at this posision
var uArrLength = uText[0].length; // the length of the text array
var uScrollAt = 20; // start scrolling up at this many lines
var uTextPos = 0; // initialise text position
var uContents = ''; // initialise contents variable
var uRow; // initialise current row

function unkn_writer() {
	uContents = ' ';
	uRow = Math.max(0, uIndex - uScrollAt);
	var udestination = document.getElementById("unkn-typedtext");
	while (uRow < uIndex) {
		uContents += uText[uRow++] + '<br />';
	}
	udestination.innerHTML = uContents + uText[uIndex].substring(0, uTextPos) + "<span class='cursor'>|</span>";
	if (uTextPos++ == uArrLength) {
		uTextPos = 0;
		uIndex++;
		if (uIndex != uText.length) {
			uArrLength = uText[uIndex].length;
			setTimeout("unkn_writer()", 10);
		}
	} else {
		setTimeout("unkn_writer()", uSpeed);
	}
}

//Adds the first onclick to display unknown character dialog

function add_click_cont() {
	document.getElementById('marvel-div').setAttribute('onclick','click_cont()');
}

//The first onclick to display cards

function click_cont() {
	document.getElementById('marvel-div').removeAttribute('onclick');
	document.getElementById('continue').innerHTML='';
	document.getElementById('nick-fury').style.display='none';
	document.getElementById('nick-dialog').style.display='none';
	document.getElementById('unknown').style.display='block';
	document.getElementById('unknown-dialog').style.display='block';
	setTimeout('unkn_writer()', 1800);
	setTimeout('disp_cards()', 3000);
}

function disp_cards() {
	//NAVIGATION CONTENT
		el("navign-marvcomics")[0].style.display="none";
		el("navign-marvel")[0].style.display="flex";
	document.getElementsByClassName('marvel-swiper-container')[0].style.setProperty('z-index', 50, 'important');
	document.getElementById('marvel-div').removeAttribute('onclick');
	document.getElementById('unknown').style.display='none';
	document.getElementById('unknown-dialog').style.display='none';
	document.getElementById('marvel-div').removeAttribute('onclick');
	//document.getElementById('confirm-div').style.display='block';
}

function hide_cards() {
	//NAVIGATION CONTENT
		el("navign-marvcomics")[0].style.display="flex";
		el("navign-marvel")[0].style.display="none";
	document.getElementsByClassName('marvel-swiper-container')[0].style.setProperty('z-index', -1, 'important');
	

	ques_state = 1; // chose again
}

// Character Dialog

var chText = new Array("Display name");
var chName = ["Magneto", "Dr. Doom", "Kingpin", "Thanos", "Red Skull" , "Venom"];
var chDialog = ["Does the trainer explain his reasons to the dog? I tire of this idiotic banter.", "And you S.H.I.E.L.D Agent, you have some learning to do before you dare to confront Viktor von Doom.",  "And You're a child playing at being a hero. Your part ends tonight.", "Your politics bore me. Your demeanor is that of a pouty child. Earth. That is my price.", "Achtung, S.H.I.E.L.D.! I have returned! I'm glad that I did not destroy this city earlier. It'll be much more pleasant to rule it.", "We create our own chaos where we find none. We have realized... with great power comes hunger for greater power..."];
var chSpeed = 10; // time delay of print out
var chIndex = 0; // start printing array at this posision
var chArrLength = chText[0].length; // the length of the text array
var chScrollAt = 20; // start scrolling up at this many lines
var chTextPos = 0; // initialise text position
var chContents = ''; // initialise contents variable
var chRow; // initialise current row



function char_dialog_writer(x) {
	z = x;
	chText = new Array("I am " + chName[x], chDialog[x]);
	chContents = ' ';
	chRow = Math.max(0, chIndex - chScrollAt);
	var chdestination = document.getElementsByClassName('char-typedtext')[x];
	while (chRow < chIndex) {
		chContents += chText[chRow++] + '<br />';
	}
	chdestination.innerHTML = chContents + chText[chIndex].substring(0, chTextPos) + "<span class='cursor'>|</span>";
	if (chTextPos++ == chArrLength) {
		chTextPos = 0;
		chIndex++;
		if (chIndex != chText.length) {
			chArrLength = chText[chIndex].length;
			setTimeout("char_dialog_writer(" + x + ")", 10);
		}
	} else {
		setTimeout("char_dialog_writer(" + x + ")", chSpeed);
	}
}

function disp_dialog_char(x) {
	hide_cards();
	document.getElementsByClassName('char')[x].style.display='block';
	document.getElementsByClassName('char-dialog')[x].style.display='block';
	setTimeout('char_dialog_writer(' + x + ')', 1800);
	setTimeout('add_cont_2nd(' + x + ')', 3400);
}

function add_cont_2nd(x) {
	document.getElementById('marvel-div').setAttribute('onclick','click_cont_2nd(' + x + ')');
	cText = new Array("Click Anywhere To Continue");
	cSpeed = 10; // time delay of print out
	cIndex = 0; // start printing array at this posision
	cArrLength = cText[0].length; // the length of the text array
	cScrollAt = 20; // start scrolling up at this many lines
	cTextPos = 0; // initialise text position
	cContents = ''; // initialise contents variable
	cont();
}

function click_cont_2nd(x) {
	document.getElementById('marvel-div').removeAttribute('onclick');
	document.getElementById('continue').innerHTML='';
	document.getElementsByClassName('char')[x].style.display='none';
	document.getElementsByClassName('char-dialog')[x].style.display='none';
	document.getElementById('nick-fury').style.display='block';
	document.getElementById('nick-dialog').style.display='block';
	document.getElementById("typedtext").innerHTML='';
	setTimeout('nick_counter_dialog_writer()', 1800);
	setTimeout('add_click_cont_ques(' + x + ')', 3400);
}

var nickText = new Array("You threatened my world with war. You might not be glad that you did.");
var nickSpeed = 10; // time delay of print out
var nickIndex = 0; // start printing array at this posision
var nickArrLength = nickText[0].length; // the length of the text array
var nickScrollAt = 20; // start scrolling up at this many lines
var nickTextPos = 0; // initialise text position
var nickContents = ''; // initialise contents variable
var nickRow; // initialise current row
function nick_counter_dialog_writer() {
	document.getElementById('marvel-div').removeAttribute('onclick');
	nickContents = ' ';
	nickRow = Math.max(0, nickIndex - nickScrollAt);
	var nickdestination = document.getElementById("typedtext");
	while (nickRow < nickIndex) {
		nickContents += nickText[nickRow++] + '<br />';
	}
	nickdestination.innerHTML = nickContents + nickText[nickIndex].substring(0, nickTextPos) + "<span class='cursor'>|</span>";
	if (nickTextPos++ == nickArrLength) {
		nickTextPos = 0;
		nickIndex++;
		if (nickIndex != nickText.length) {
			nickArrLength = nickText[nickIndex].length;
			setTimeout("nick_counter_dialog_writer()", 10);
		}
	} else {
		setTimeout("nick_counter_dialog_writer()", nickSpeed);
	}
}

function add_click_cont_ques(x) {
	document.getElementById('marvel-div').setAttribute('onclick', 'click_cont_ques(' + x + ')');
	cText = new Array("Click Anywhere To Continue");
	cSpeed = 10; // time delay of print out
	cIndex = 0; // start printing array at this posision
	cArrLength = cText[0].length; // the length of the text array
	cScrollAt = 20; // start scrolling up at this many lines
	cTextPos = 0; // initialise text position
	cContents = ''; // initialise contents variable
	cont();
}

function click_cont_ques(x) {
	document.getElementById('marvel-div').removeAttribute('onclick');
	document.getElementById('continue').innerHTML='';
	document.getElementById('nick-fury').style.display='none';
	document.getElementById('nick-dialog').style.display='none';
	document.getElementById("typedtext").innerHTML='';
		//NAVIGATION CONTENT
		el("navign-marvcomics")[0].style.display="none";
		el("navign-play")[0].style.display="flex";
	show_ques_div(2);
	// Open Questions Div with x as index of character selected 
}

// Resume Game Dialogs

function disp_dialog_nick_resume(x) {
	document.getElementById('nick-fury').style.display='none';
	document.getElementById('nick-dialog').style.display='none';
	document.getElementById('continue').innerHTML='';
	document.getElementById('nick-fury').style.display='block';
	document.getElementById('nick-dialog').style.display='block';
	rText = new Array("So you have returned coward!", "It was a really stupid-ass decision by you.");
	rSpeed = 10; // time delay of print out
	rIndex = 0; // start printing array at this posision
	rArrLength = rText[0].length; // the length of the text array
	rScrollAt = 20; // start scrolling up at this many lines
	rTextPos = 0; // initialise text position
	rContents = ''; // initialise contents variable
	rRow; // initialise current row
	setTimeout('resume_nick_dialog()', 1800);
	setTimeout('add_cont_resume(' + x + ')', 3400);
}

var rText = new Array("So you have returned coward!", "It was a really stupid-ass decision by you.");
var rSpeed = 10; // time delay of print out
var rIndex = 0; // start printing array at this posision
var rArrLength = rText[0].length; // the length of the text array
var rScrollAt = 20; // start scrolling up at this many lines
var rTextPos = 0; // initialise text position
var rContents = ''; // initialise contents variable
var rRow; // initialise current row
function resume_nick_dialog() {
	rContents = ' ';
	rRow = Math.max(0, rIndex - rScrollAt);
	var rdestination = document.getElementById("typedtext");
	while (rRow < rIndex) {
		rContents += rText[rRow++] + '<br />';
	}
	rdestination.innerHTML = rContents + rText[rIndex].substring(0, rTextPos) + "<span class='cursor'>|</span>";
	if (rTextPos++ == rArrLength) {
		rTextPos = 0;
		rIndex++;
		if (rIndex != rText.length) {
			rArrLength = rText[rIndex].length;
			setTimeout("resume_nick_dialog()", 10);
		}
	} else {
		setTimeout("resume_nick_dialog()", rSpeed);
	}
}

function add_cont_resume(x) {
	document.getElementById('marvel-div').setAttribute('onclick','click_cont_resume(' + x + ')');
	cText = new Array("Click Anywhere To Continue");
	cSpeed = 10; // time delay of print out
	cIndex = 0; // start printing array at this posision
	cArrLength = cText[0].length; // the length of the text array
	cScrollAt = 20; // start scrolling up at this many lines
	cTextPos = 0; // initialise text position
	cContents = ''; // initialise contents variable
	cont();
}

function click_cont_resume(x) {
	document.getElementById('marvel-div').removeAttribute('onclick');
	document.getElementById('continue').innerHTML='';
	document.getElementById('nick-fury').style.display='none';
	document.getElementById('nick-dialog').style.display='none';
	document.getElementById("typedtext").innerHTML='';
	//NAVIGATION CONTENT
		el("navign-marvcomics")[0].style.display="none";
		el("navign-play")[0].style.display="flex";
	show_ques_div(2);
	// Open Questions Div with x as index of character selected 
}

// Finished Game Dialogs

function disp_dialog_char_finished(x) {
	document.getElementById('nick-fury').style.display='none';
	document.getElementById('nick-dialog').style.display='none';
	document.getElementById('continue').innerHTML='';
	document.getElementsByClassName('char')[x].style.display='block';
	document.getElementsByClassName('char-dialog')[x].style.display='block';
	setTimeout('char_dialog_finished_writer(' + x + ')', 1800);
	setTimeout('add_cont_finished(' + x + ')', 3400);
}

var finished_chText = new Array("Display name");
var finished_chName = ["Magneto", "Dr. Doom", "Kingpin", "Thanos", "Red Skull", "Venom"];
var finished_chDialog = ["Your courage does you credit, But this is a mutants' world now.", "Greetings S.H.I.E.L.D! You Arrive just in time to see a great performance!", "You don't get to be the man on top without enemies looking to tear you down.", "Fun really isn't something one considers when balancing the universe. But this... does put a smile on my face.", "Untermensch, you and all your kind will soon know what is meant by a Tausendjahriges Reich!", "Well then why don't you listen to the sounds of my shredding you into little teeny bits. It's your funeral! Enjoy!"];
var finished_chSpeed = 10; // time delay of print out
var finished_chIndex = 0; // start printing array at this posision
var finished_chArrLength = finished_chText[0].length; // the length of the text array
var finished_chScrollAt = 20; // start scrolling up at this many lines
var finished_chTextPos = 0; // initialise text position
var finished_chContents = ''; // initialise contents variable
var finished_chRow; // initialise current row

function char_dialog_finished_writer(x) {
	finished_chText = new Array("You are nothing to " + finished_chName[x] + ".", finished_chDialog[x]);
	finished_chContents = ' ';
	finished_chRow = Math.max(0, finished_chIndex - finished_chScrollAt);
	var finished_chdestination = document.getElementsByClassName('char-typedtext')[x];
	while (finished_chRow < finished_chIndex) {
		finished_chContents += finished_chText[finished_chRow++] + '<br />';
	}
	finished_chdestination.innerHTML = finished_chContents + finished_chText[finished_chIndex].substring(0, finished_chTextPos) + "<span class='cursor'>|</span>";
	if (finished_chTextPos++ == finished_chArrLength) {
		finished_chTextPos = 0;
		finished_chIndex++;
		if (finished_chIndex != finished_chText.length) {
			finished_chArrLength = finished_chText[finished_chIndex].length;
			setTimeout("char_dialog_finished_writer(" + x + ")", 10);
		}
	} else {
		setTimeout("char_dialog_finished_writer(" + x + ")", finished_chSpeed);
	}
}

function add_cont_finished(x) {
	document.getElementById('marvel-div').setAttribute('onclick', 'click_cont_finished(' + x + ')');
	cText = new Array("Click Anywhere To Continue");
	cSpeed = 10; // time delay of print out
	cIndex = 0; // start printing array at this posision
	cArrLength = cText[0].length; // the length of the text array
	cScrollAt = 20; // start scrolling up at this many lines
	cTextPos = 0; // initialise text position
	cContents = ''; // initialise contents variable
	cont();
}

function click_cont_finished(x) {
	document.getElementById('marvel-div').removeAttribute('onclick');
	document.getElementById('continue').innerHTML='';
	document.getElementsByClassName('char')[x].style.display='none';
	document.getElementsByClassName('char-dialog')[x].style.display='none';
	document.getElementById('nick-fury').style.display='block';
	document.getElementById('nick-dialog').style.display='block';
	document.getElementById("typedtext").innerHTML='';
	fText = new Array("Well let me know if 'real power' wants a magazine, or something.");
	fSpeed = 10; // time delay of print out
	fIndex = 0; // start printing array at this posision
	fArrLength = fText[0].length; // the length of the text array
	fScrollAt = 20; // start scrolling up at this many lines
	fTextPos = 0; // initialise text position
	fContents = ''; // initialise contents variable
	fRow; // initialise current row
	setTimeout('nick_finished_dialog_writer()', 1800);
	setTimeout('disp_exit_message()', 3400);
}

var fText = new Array("Well let me know if 'real power' wants a magazine, or something.");
var fSpeed = 10; // time delay of print out
var fIndex = 0; // start printing array at this posision
var fArrLength = fText[0].length; // the length of the text array
var fScrollAt = 20; // start scrolling up at this many lines
var fTextPos = 0; // initialise text position
var fContents = ''; // initialise contents variable
var fRow; // initialise current row
function nick_finished_dialog_writer() {
	fContents = ' ';
	fRow = Math.max(0, fIndex - fScrollAt);
	var fdestination = document.getElementById("typedtext");
	while (fRow < fIndex) {
		fContents += fText[fRow++] + '<br />';
	}
	fdestination.innerHTML = fContents + fText[fIndex].substring(0, fTextPos) + "<span class='cursor'>|</span>";
	if (fTextPos++ == fArrLength) {
		fTextPos = 0;
		fIndex++;
		if (fIndex != fText.length) {
			fArrLength = fText[fIndex].length;
			setTimeout("nick_finished_dialog_writer()", 10);
		}
	} else {
		setTimeout("nick_finished_dialog_writer()", fSpeed);
	}
}

function disp_exit_message() {
	//NAVIGATION CONTENT
		el("navign-marvcomics")[0].style.display="none";
		el("navign-play")[0].style.display="flex";
	document.getElementById('marvel-div').removeAttribute('onclick');
	cText = new Array("Click Back Button To Exit");
	cSpeed = 10; // time delay of print out
	cIndex = 0; // start printing array at this posision
	cArrLength = cText[0].length; // the length of the text array
	cScrollAt = 20; // start scrolling up at this many lines
	cTextPos = 0; // initialise text position
	cContents = ''; // initialise contents variable
	cont();
}