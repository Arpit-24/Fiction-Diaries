var dc_ques_state;
var dc_z;

function assign_dc_vars() {
	dc_ques_state = game_states[3];
	dc_z = character[3];
}
function do_dc() {


	// Get ques_state i.e. First Login = 0, Resumed from a previous quiz = 1, Quiz over = 2

	if (dc_ques_state==0) {
		//NAVIGATION CONTENT
		dc_disp_first_login();
		el("navign-dccomics")[0].style.display="flex";
	} else if (dc_ques_state==1) {
		// Fetch Selected Character from Database
		// Display Dialogs specific to Selected Character as obtained
		// dc_z is the index of selected char by user as fetched from database
		//NAVIGATION CONTENT
		el("navign-dccomics")[0].style.display="flex";
		dc_disp_dialog_charac_resume(dc_z);
	} else {
		// Fetch Selected Charater from Database
		// Display Ending Dialogs
		// z is the index of selected char by user as fetched from database
		//NAVIGATION CONTENT
        if(el("navign-play")[0].style.display=="flex")
		{
			document.getElementsByClassName("next-ans")[3].innerHTML="End of Quiz";
			setTimeout(
				function()
	    {el(game_index+"-ques-box")[0].style.height="0vh";
	    document.getElementsByClassName(game_index+"-ques-title")[0].style.display="none";
	    document.getElementsByClassName(game_index+"-ques-content")[0].style.display="none";
	    document.getElementsByClassName(game_index+"-ques-footer")[0].style.display="none";
		dc_disp_dialog_charac_finished(dc_z);
		},5000); 
		}
        else{
		el("navign-dccomics")[0].style.display="flex";
		dc_disp_dialog_charac_finished(dc_z);}
	}
}

// First Time User Login Dialog

function dc_disp_first_login() {
	document.getElementById('dc-charac').style.display='block';
	document.getElementById('dc-charac-dialog').style.display='block';
	setTimeout('dc_typewriter()', 1800);
	setTimeout('dc_cont()', 4000);
	setTimeout('dc_add_click_cont()', 4520);
}

var dc_aText = new Array("No protectors here. No Lanterns. No Kryptonian. This world will fall, like all the others.", "Who dares to challenge me?");
var dc_iSpeed = 10; // time delay of print out
var dc_iIndex = 0; // start printing array at this posision
var dc_iArrLength = dc_aText[0].length; // the length of the text array
var dc_iScrollAt = 20; // start scrolling up at this many lines
var dc_iTextPos = 0; // initialise text position
var dc_sContents = ''; // initialise contents variable
var dc_iRow; // initialise current row
function dc_typewriter() {
	dc_sContents = ' ';
	dc_iRow = Math.max(0, dc_iIndex - dc_iScrollAt);
	var dc_destination = document.getElementById("dc-typedtext");
	while (dc_iRow < dc_iIndex) {
		dc_sContents += dc_aText[dc_iRow++] + '<br />';
	}
	dc_destination.innerHTML = dc_sContents + dc_aText[dc_iIndex].substring(0, dc_iTextPos) + "<span class='cursor'>|</span>";
	if (dc_iTextPos++ == dc_iArrLength) {
		dc_iTextPos = 0;
		dc_iIndex++;
		if (dc_iIndex != dc_aText.length) {
			dc_iArrLength = dc_aText[dc_iIndex].length;
			setTimeout("dc_typewriter()", 10);
		}
	} else {
		setTimeout("dc_typewriter()", dc_iSpeed);
	}
}

// Click Anywhere to continue text

var dc_cText = new Array("Click Anywhere To Continue");
var dc_cSpeed = 10; // time delay of print out
var dc_cIndex = 0; // start printing array at this posision
var dc_cArrLength = dc_cText[0].length; // the length of the text array
var dc_cScrollAt = 20; // start scrolling up at this many lines
var dc_cTextPos = 0; // initialise text position
var dc_cContents = ''; // initialise contents variable
var dc_cRow; // initialise current row

function dc_cont() {
	dc_cContents = ' ';
	dc_cRow = Math.max(0, dc_cIndex - dc_cScrollAt);
	var dc_cdestination = document.getElementById("dc-continue");
	while (dc_cRow < dc_cIndex) {
		dc_cContents += dc_cText[dc_cRow++] + '<br />';
	}
	dc_cdestination.innerHTML = dc_cContents + dc_cText[dc_cIndex].substring(0, dc_cTextPos) + "<span id='dc-c-cursor'>_</span>";
	if (dc_cTextPos++ == dc_cArrLength) {
		dc_cTextPos = 0;
		dc_cIndex++;
		if (dc_cIndex != dc_cText.length) {
			dc_cArrLength = dc_cText[dc_cIndex].length;
			setTimeout("dc_cont()", 10);
		}
	} else {
		setTimeout("dc_cont()", dc_iSpeed);
	}
}

// Unknown Character Dialog

var dc_uText = new Array("I am ........");
var dc_uSpeed = 10; // time delay of print out
var dc_uIndex = 0; // start printing array at this posision
var dc_uArrLength = dc_uText[0].length; // the length of the text array
var dc_uScrollAt = 20; // start scrolling up at this many lines
var dc_uTextPos = 0; // initialise text position
var dc_uContents = ''; // initialise contents variable
var dc_uRow; // initialise current row

function dc_unkn_writer() {
	dc_uContents = ' ';
	dc_uRow = Math.max(0, dc_uIndex - dc_uScrollAt);
	var dc_udestination = document.getElementById("dc-unkn-typedtext");
	while (dc_uRow < dc_uIndex) {
		dc_uContents += dc_uText[dc_uRow++] + '<br />';
	}
	dc_udestination.innerHTML = dc_uContents + dc_uText[dc_uIndex].substring(0, dc_uTextPos) + "<span class='cursor'>|</span>";
	if (dc_uTextPos++ == dc_uArrLength) {
		dc_uTextPos = 0;
		dc_uIndex++;
		if (dc_uIndex != dc_uText.length) {
			dc_uArrLength = dc_uText[dc_uIndex].length;
			setTimeout("dc_unkn_writer()", 10);
		}
	} else {
		setTimeout("dc_unkn_writer()", dc_uSpeed);
	}
}

//Adds the first onclick to display unknown character dialog

function dc_add_click_cont() {
	document.getElementById('dc-div').setAttribute('onclick','dc_click_cont()');
}

//The first onclick to display cards

function dc_click_cont() {
	document.getElementById('dc-div').removeAttribute('onclick');
	document.getElementById('dc-continue').innerHTML='';
	document.getElementById('dc-charac').style.display='none';
	document.getElementById('dc-charac-dialog').style.display='none';
	document.getElementById('dc-unknown').style.display='block';
	document.getElementById('dc-unknown-dialog').style.display='block';
	setTimeout('dc_unkn_writer()', 1800);
	setTimeout('dc_disp_cards()', 3000);
}

function dc_disp_cards() {
	//NAVIGATION CONTENT
		el("navign-dccomics")[0].style.display="none";
		el("navign-dc")[0].style.display="flex";
	document.getElementsByClassName('dc-swiper-container')[0].style.setProperty('z-index', 50, 'important');
	document.getElementById('dc-div').removeAttribute('onclick');
	document.getElementById('dc-unknown').style.display='none';
	document.getElementById('dc-unknown-dialog').style.display='none';
	
	//document.getElementById('dc-confirm-div').style.display='block';
}

function dc_hide_cards() {
	//NAVIGATION CONTENT
		el("navign-dccomics")[0].style.display="flex";
		el("navign-dc")[0].style.display="none";
	document.getElementsByClassName('dc-swiper-container')[0].style.setProperty('z-index', -1, 'important');
	

	dc_ques_state = 1; //oh you chose
}

// Character Dialog

var dc_chText = new Array("Display name");
var dc_chName = ["Superman", "Wonder Woman", "Batman", "Green Lantern", "Flash", "Aquaman"];
var dc_chDialog = ["You picked the wrong time pal. If we fight we fight for real. I have Earth covered, This world needs me.", "A beast like you doesn't scare me. You face a goddess of war. You'd be wise to surrender.", "I have had enough of your banter. Crashing into a wall head on will be least painful activity of your evening.", "Beware my Power, Get out of my sector now or you are going to regret this one.", "And You are not getting away with this. Speed is my game so let's see what you got.", "Surrender and I won't break your bones. The Trident is formidable, I will mow you down like seaweed."];
var dc_chSpeed = 10; // time delay of print out
var dc_chIndex = 0; // start printing array at this posision
var dc_chArrLength = dc_chText[0].length; // the length of the text array
var dc_chScrollAt = 20; // start scrolling up at this many lines
var dc_chTextPos = 0; // initialise text position
var dc_chContents = ''; // initialise contents variable
var dc_chRow; // initialise current row


function dc_char_dialog_writer(x) {
	dc_z=x;
	dc_chText = new Array("I am " + dc_chName[x], dc_chDialog[x]);
	dc_chContents = ' ';
	dc_chRow = Math.max(0, dc_chIndex - dc_chScrollAt);
	var dc_chdestination = document.getElementsByClassName('dc-char-typedtext')[x];
	while (dc_chRow < dc_chIndex) {
		dc_chContents += dc_chText[dc_chRow++] + '<br />';
	}
	dc_chdestination.innerHTML = dc_chContents + dc_chText[dc_chIndex].substring(0, dc_chTextPos) + "<span class='cursor'>|</span>";
	if (dc_chTextPos++ == dc_chArrLength) {
		dc_chTextPos = 0;
		dc_chIndex++;
		if (dc_chIndex != dc_chText.length) {
			dc_chArrLength = dc_chText[dc_chIndex].length;
			setTimeout("dc_char_dialog_writer(" + x + ")", 10);
		}
	} else {
		setTimeout("dc_char_dialog_writer(" + x + ")", dc_chSpeed);
	}
}

function dc_disp_dialog_char(x) {
	dc_hide_cards();
	document.getElementsByClassName('dc-char')[x].style.display='block';
	document.getElementsByClassName('dc-char-dialog')[x].style.display='block';
	setTimeout('dc_char_dialog_writer(' + x + ')', 1800);
	setTimeout('dc_add_cont_2nd(' + x + ')', 4000);
}

function dc_add_cont_2nd(x) {
	document.getElementById('dc-div').setAttribute('onclick','dc_click_cont_2nd(' + x + ')');
	dc_cText = new Array("Click Anywhere To Continue");
	dc_cSpeed = 10; // time delay of print out
	dc_cIndex = 0; // start printing array at this posision
	dc_cArrLength = dc_cText[0].length; // the length of the text array
	dc_cScrollAt = 20; // start scrolling up at this many lines
	dc_cTextPos = 0; // initialise text position
	dc_cContents = ''; // initialise contents variable
	dc_cont();
}

function dc_click_cont_2nd(x) {
	document.getElementById('dc-continue').innerHTML='';
	document.getElementById('dc-div').removeAttribute('onclick');
	document.getElementsByClassName('dc-char')[x].style.display='none';
	document.getElementsByClassName('dc-char-dialog')[x].style.display='none';
	document.getElementById('dc-charac').style.display='block';
	document.getElementById('dc-charac-dialog').style.display='block';
	document.getElementById("dc-typedtext").innerHTML='';
	setTimeout('alien_counter_dialog_writer(' + x + ')', 1800);
	setTimeout('dc_add_click_cont_ques(' + x + ')', 4000);
}

var alienText = new Array("Ohh you are gonna regret saying that.", "Your enthusiasm is premature. I will crush you like a nut.");
var alienSpeed = 10; // time delay of print out
var alienIndex = 0; // start printing array at this posision
var alienArrLength = alienText[0].length; // the length of the text array
var alienScrollAt = 20; // start scrolling up at this many lines
var alienTextPos = 0; // initialise text position
var alienContents = ''; // initialise contents variable
var alienRow; // initialise current row
function alien_counter_dialog_writer() {
	
	alienContents = ' ';
	alienRow = Math.max(0, alienIndex - alienScrollAt);
	var aliendestination = document.getElementById("dc-typedtext");
	while (alienRow < alienIndex) {
		alienContents += alienText[alienRow++] + '<br />';
	}
	aliendestination.innerHTML = alienContents + alienText[alienIndex].substring(0, alienTextPos) + "<span class='cursor'>|</span>";
	if (alienTextPos++ == alienArrLength) {
		alienTextPos = 0;
		alienIndex++;
		if (alienIndex != alienText.length) {
			alienArrLength = alienText[alienIndex].length;
			setTimeout("alien_counter_dialog_writer()", 10);
		}
	} else {
		setTimeout("alien_counter_dialog_writer()", alienSpeed);
	}
}

function dc_add_click_cont_ques(x) {
	document.getElementById('dc-div').setAttribute('onclick', 'dc_click_cont_ques(' + x + ')');
	dc_cText = new Array("Click Anywhere To Continue");
	dc_cSpeed = 10; // time delay of print out
	dc_cIndex = 0; // start printing array at this posision
	dc_cArrLength = dc_cText[0].length; // the length of the text array
	dc_cScrollAt = 20; // start scrolling up at this many lines
	dc_cTextPos = 0; // initialise text position
	dc_cContents = ''; // initialise contents variable
	dc_cont();
}

function dc_click_cont_ques(x) {
	document.getElementById('dc-div').removeAttribute('onclick');
	document.getElementById('dc-continue').innerHTML='';
	document.getElementById('dc-charac').style.display='none';
	document.getElementById('dc-charac-dialog').style.display='none';
	document.getElementById("dc-typedtext").innerHTML='';
	//NAVIGATION CONTENT
		el("navign-dccomics")[0].style.display="none";
		el("navign-play")[0].style.display="flex";
	//QUESTION DIV CALL
		show_ques_div(3);
	// Open Questions Div with x as index of character selected 
}

// Resume Game Dialogs

function dc_disp_dialog_charac_resume(x) {
	document.getElementById('dc-continue').innerHTML='';
	document.getElementById('dc-charac').style.display='none';
	document.getElementById('dc-charac-dialog').style.display='none';
	document.getElementById('dc-charac').style.display='block';
	document.getElementById('dc-charac-dialog').style.display='block';
	dc_rText = new Array("Back for some more beating I see.. This will be good hunting.", "Parademons Attack!!");
	dc_rSpeed = 10; // time delay of print out
	dc_rIndex = 0; // start printing array at this posision
	dc_rArrLength = dc_rText[0].length; // the length of the text array
	dc_rScrollAt = 20; // start scrolling up at this many lines
	dc_rTextPos = 0; // initialise text position
	dc_rContents = ''; // initialise contents variable
	dc_rRow; // initialise current row
	setTimeout('dc_resume_charac_dialog()', 1800);
	setTimeout('dc_add_cont_resume(' + x + ')', 3400);
}

var dc_rText = new Array("Back for some more beating I see.. I look forward to adding a new trophy to my collection.", "Parademons Attack!!");
var dc_rSpeed = 10; // time delay of print out
var dc_rIndex = 0; // start printing array at this posision
var dc_rArrLength = dc_rText[0].length; // the length of the text array
var dc_rScrollAt = 20; // start scrolling up at this many lines
var dc_rTextPos = 0; // initialise text position
var dc_rContents = ''; // initialise contents variable
var dc_rRow; // initialise current row
function dc_resume_charac_dialog() {
	dc_rContents = ' ';
	dc_rRow = Math.max(0, dc_rIndex - dc_rScrollAt);
	var dc_rdestination = document.getElementById("dc-typedtext");
	while (dc_rRow < dc_rIndex) {
		dc_rContents += dc_rText[dc_rRow++] + '<br />';
	}
	dc_rdestination.innerHTML = dc_rContents + dc_rText[dc_rIndex].substring(0, dc_rTextPos) + "<span class='cursor'>|</span>";
	if (dc_rTextPos++ == dc_rArrLength) {
		dc_rTextPos = 0;
		dc_rIndex++;
		if (dc_rIndex != dc_rText.length) {
			dc_rArrLength = dc_rText[dc_rIndex].length;
			setTimeout("dc_resume_charac_dialog()", 10);
		}
	} else {
		setTimeout("dc_resume_charac_dialog()", dc_rSpeed);
	}
}

function dc_add_cont_resume(x) {
	document.getElementById('dc-div').setAttribute('onclick','dc_click_cont_resume(' + x + ')');
	dc_cText = new Array("Click Anywhere To Continue");
	dc_cSpeed = 10; // time delay of print out
	dc_cIndex = 0; // start printing array at this posision
	dc_cArrLength = dc_cText[0].length; // the length of the text array
	dc_cScrollAt = 20; // start scrolling up at this many lines
	dc_cTextPos = 0; // initialise text position
	dc_cContents = ''; // initialise contents variable
	dc_cont();
}

function dc_click_cont_resume(x) {
	document.getElementById('dc-div').removeAttribute('onclick');
	document.getElementById('dc-continue').innerHTML='';
	document.getElementById('dc-charac').style.display='none';
	document.getElementById('dc-charac-dialog').style.display='none';
	document.getElementById("dc-typedtext").innerHTML='';
	//NAVIGATION CONTENT
		el("navign-dccomics")[0].style.display="none";
		el("navign-play")[0].style.display="flex";
	show_ques_div(3);
	// Open Questions Div with x as index of character selected 
}

// Finished Game Dialogs

function dc_disp_dialog_charac_finished(x) {
	document.getElementById('dc-charac').style.display='none';
	document.getElementById('dc-charac-dialog').style.display='none';
	document.getElementById('dc-continue').innerHTML='';
	document.getElementsByClassName('dc-char')[x].style.display='block';
	document.getElementsByClassName('dc-char-dialog')[x].style.display='block';
	setTimeout('dc_char_dialog_finished_writer(' + x + ')', 1800);
	setTimeout('dc_add_cont_finished(' + x + ')', 3400);
}

var dc_finished_chText = new Array("Display name");
var dc_finished_chName = ["Superman", "Wonder Woman", "Batman", "Green Lantern", "Flash", "Aquaman"];
var dc_finished_chDialog = ["I am going to Guard Earth until I die..", "The Daughter of Zeus can't fail.. I have wrestled with the Gods", "What part of Dark Knight don't you get? Let me give you something to fear.", "The Ring will help me protect the Earth from Evil like you.", "I'm Flash, The fastest man alive. You could never keep up with me.", "The Trident never fails. Now leave my people at peace or I won't hesitate to break all your bones."];
var dc_finished_chSpeed = 10; // time delay of print out
var dc_finished_chIndex = 0; // start printing array at this posision
var dc_finished_chArrLength = dc_finished_chText[0].length; // the length of the text array
var dc_finished_chScrollAt = 20; // start scrolling up at this many lines
var dc_finished_chTextPos = 0; // initialise text position
var dc_finished_chContents = ''; // initialise contents variable
var dc_finished_chRow; // initialise current row

function dc_char_dialog_finished_writer(x) {
	dc_finished_chText = new Array("You never stood a chance Stepenwolf.", dc_finished_chDialog[x]);
	dc_finished_chContents = ' ';
	dc_finished_chRow = Math.max(0, dc_finished_chIndex - dc_finished_chScrollAt);
	var dc_finished_chdestination = document.getElementsByClassName('dc-char-typedtext')[x];
	while (dc_finished_chRow < dc_finished_chIndex) {
		dc_finished_chContents += dc_finished_chText[dc_finished_chRow++] + '<br />';
	}
	dc_finished_chdestination.innerHTML = dc_finished_chContents + dc_finished_chText[dc_finished_chIndex].substring(0, dc_finished_chTextPos) + "<span class='cursor'>|</span>";
	if (dc_finished_chTextPos++ == dc_finished_chArrLength) {
		dc_finished_chTextPos = 0;
		dc_finished_chIndex++;
		if (dc_finished_chIndex != dc_finished_chText.length) {
			dc_finished_chArrLength = dc_finished_chText[dc_finished_chIndex].length;
			setTimeout("dc_char_dialog_finished_writer(" + x + ")", 10);
		}
	} else {
		setTimeout("dc_char_dialog_finished_writer(" + x + ")", dc_finished_chSpeed);
	}
}

function dc_add_cont_finished(x) {
	document.getElementById('dc-div').setAttribute('onclick', 'dc_click_cont_finished(' + x + ')');
	dc_cText = new Array("Click Anywhere To Continue");
	dc_cSpeed = 10; // time delay of print out
	dc_cIndex = 0; // start printing array at this posision
	dc_cArrLength = dc_cText[0].length; // the length of the text array
	dc_cScrollAt = 20; // start scrolling up at this many lines
	dc_cTextPos = 0; // initialise text position
	dc_cContents = ''; // initialise contents variable
	dc_cont();
}

function dc_click_cont_finished(x) {
	document.getElementById('dc-div').removeAttribute('onclick');
	document.getElementById('dc-continue').innerHTML='';
	document.getElementsByClassName('dc-char')[x].style.display='none';
	document.getElementsByClassName('dc-char-dialog')[x].style.display='none';
	document.getElementById('dc-charac').style.display='block';
	document.getElementById('dc-charac-dialog').style.display='block';
	document.getElementById("dc-typedtext").innerHTML='';
	dc_fText = new Array("Darkseid, I have failed you..", "I will soon return to capture Earth once again. Justice League You better be prepared.");
	dc_fSpeed = 10; // time delay of print out
	dc_fIndex = 0; // start printing array at this posision
	dc_fArrLength = dc_fText[0].length; // the length of the text array
	dc_fScrollAt = 20; // start scrolling up at this many lines
	dc_fTextPos = 0; // initialise text position
	dc_fContents = ''; // initialise contents variable
	dc_fRow; // initialise current row
	setTimeout('dc_char_finished_dialog_writer()', 1800);
	setTimeout('dc_disp_exit_message()', 3400);
}

var dc_fText = new Array("Darkseid, I have failed you..", "I will soon return to capture Earth once again. Justice League You better be prepared.");
var dc_fSpeed = 10; // time delay of print out
var dc_fIndex = 0; // start printing array at this posision
var dc_fArrLength = dc_fText[0].length; // the length of the text array
var dc_fScrollAt = 20; // start scrolling up at this many lines
var dc_fTextPos = 0; // initialise text position
var dc_fContents = ''; // initialise contents variable
var dc_fRow; // initialise current row
function dc_char_finished_dialog_writer() {
	dc_fContents = ' ';
	dc_fRow = Math.max(0, dc_fIndex - dc_fScrollAt);
	var dc_fdestination = document.getElementById("dc-typedtext");
	while (dc_fRow < dc_fIndex) {
		dc_fContents += dc_fText[dc_fRow++] + '<br />';
	}
	dc_fdestination.innerHTML = dc_fContents + dc_fText[dc_fIndex].substring(0, dc_fTextPos) + "<span class='cursor'>|</span>";
	if (dc_fTextPos++ == dc_fArrLength) {
		dc_fTextPos = 0;
		dc_fIndex++;
		if (dc_fIndex != dc_fText.length) {
			dc_fArrLength = dc_fText[dc_fIndex].length;
			setTimeout("dc_char_finished_dialog_writer()", 10);
		}
	} else {
		setTimeout("dc_char_finished_dialog_writer()", dc_fSpeed);
	}
}

function dc_disp_exit_message() {
	//NAVIGATION CONTENT
		el("navign-dccomics")[0].style.display="none";
		el("navign-play")[0].style.display="flex";
	document.getElementById('dc-div').removeAttribute('onclick');
	dc_cText = new Array("Click Back Button To Exit");
	dc_cSpeed = 10; // time delay of print out
	dc_cIndex = 0; // start printing array at this posision
	dc_cArrLength = dc_cText[0].length; // the length of the text array
	dc_cScrollAt = 20; // start scrolling up at this many lines
	dc_cTextPos = 0; // initialise text position
	dc_cContents = ''; // initialise contents variable
	dc_cont();
}