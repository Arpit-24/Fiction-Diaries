function got_openLeaderboard(evt, leaderboardName) {
	var i, got_tabcontent, got_tablinks;
	got_tabcontent = document.getElementsByClassName("got-tab-content");
	for (i = 0; i < got_tabcontent.length; i++) {
		got_tabcontent[i].style.display = "none";
	}
	got_tablinks = document.getElementsByClassName("got-tablinks");
	for (i = 0; i < got_tablinks.length; i++) {
		got_tablinks[i].className = got_tablinks[i].className.replace(" active", "");
	}
	document.getElementById(leaderboardName).style.display = "block";
	evt.currentTarget.className += " active";
}

function marvel_openLeaderboard(evt, leaderboardName) {
	var i, marvel_tabcontent, marvel_tablinks;
	marvel_tabcontent = document.getElementsByClassName("marvel-tab-content");
	for (i = 0; i < marvel_tabcontent.length; i++) {
		marvel_tabcontent[i].style.display = "none";
	}
	marvel_tablinks = document.getElementsByClassName("marvel-tablinks");
	for (i = 0; i < marvel_tablinks.length; i++) {
		marvel_tablinks[i].className = marvel_tablinks[i].className.replace(" active", "");
	}
	document.getElementById(leaderboardName).style.display = "block";
	evt.currentTarget.className += " active";
}

function dc_openLeaderboard(evt, leaderboardName) {
	var i, dc_tabcontent, dc_tablinks;
	dc_tabcontent = document.getElementsByClassName("dc-tab-content");
	for (i = 0; i < dc_tabcontent.length; i++) {
		dc_tabcontent[i].style.display = "none";
	}
	dc_tablinks = document.getElementsByClassName("dc-tablinks");
	for (i = 0; i < dc_tablinks.length; i++) {
		dc_tablinks[i].className = dc_tablinks[i].className.replace(" active", "");
	}
	document.getElementById(leaderboardName).style.display = "block";
	evt.currentTarget.className += " active";
}

function hp_openLeaderboard(evt, leaderboardName) {
	var i, hp_tabcontent, hp_tablinks;
	hp_tabcontent = document.getElementsByClassName("hp-tab-content");
	for (i = 0; i < hp_tabcontent.length; i++) {
		hp_tabcontent[i].style.display = "none";
	}
	hp_tablinks = document.getElementsByClassName("hp-tablinks");
	for (i = 0; i < hp_tablinks.length; i++) {
		hp_tablinks[i].className = hp_tablinks[i].className.replace(" active", "");
	}
	document.getElementById(leaderboardName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Call these Functions after updating the Leaderboard. No need for setTimeout

function got_assign_image_house() {
	var got_house_house = document.getElementsByClassName('got-house-house');
	var got_house_house_image = document.getElementsByClassName('got-house-house-image');
	for (var i = 0; i < 8; i++) {
		if (got_house_house[i].innerHTML=="House Stark") {
			got_house_house_image[i].style.backgroundImage="url('./media/got-cards/stark.svg')";
		} else if (got_house_house[i].innerHTML=="House Arryn") {
			got_house_house_image[i].style.backgroundImage="url('./media/got-cards/arryn.svg')";
		} else if (got_house_house[i].innerHTML=="House Lannister") {
			got_house_house_image[i].style.backgroundImage="url('./media/got-cards/lannister.svg')";
		} else if (got_house_house[i].innerHTML=="House Mormont") {
			got_house_house_image[i].style.backgroundImage="url('./media/got-cards/mormont.svg')";
		} else if (got_house_house[i].innerHTML=="House Greyjoy") {
			got_house_house_image[i].style.backgroundImage="url('./media/got-cards/greyjoy.svg')";
		} else if (got_house_house[i].innerHTML=="House Targaryen") {
			got_house_house_image[i].style.backgroundImage="url('./media/got-cards/targaryen.svg')";
		} else if (got_house_house[i].innerHTML=="House Baratheon") {
			got_house_house_image[i].style.backgroundImage="url('./media/got-cards/baratheon.svg')";
		} else if (got_house_house[i].innerHTML=="House Tyrell") {
			got_house_house_image[i].style.backgroundImage="url('./media/got-cards/tyrell.svg')";
		} else {
			got_house_house_image[i].style.backgroundImage="url('./media/got-cards/default.svg')";
		}
	}
}

function got_assign_image_individual() {
	var got_individual_house = document.getElementsByClassName('got-individual-house');
	var got_individual_house_image = document.getElementsByClassName('got-individual-house-image');
	for (var i = 0; i < 10; i++) {
		if (got_individual_house[i].innerHTML=="House Stark") {
			got_individual_house_image[i].style.backgroundImage="url('./media/got-cards/stark.svg')";
		} else if (got_individual_house[i].innerHTML=="House Arryn") {
			got_individual_house_image[i].style.backgroundImage="url('./media/got-cards/arryn.svg')";
		} else if (got_individual_house[i].innerHTML=="House Lannister") {
			got_individual_house_image[i].style.backgroundImage="url('./media/got-cards/lannister.svg')";
		} else if (got_individual_house[i].innerHTML=="House Mormont") {
			got_individual_house_image[i].style.backgroundImage="url('./media/got-cards/mormont.svg')";
		} else if (got_individual_house[i].innerHTML=="House Greyjoy") {
			got_individual_house_image[i].style.backgroundImage="url('./media/got-cards/greyjoy.svg')";
		} else if (got_individual_house[i].innerHTML=="House Targaryen") {
			got_individual_house_image[i].style.backgroundImage="url('./media/got-cards/targaryen.svg')";
		} else if (got_individual_house[i].innerHTML=="House Baratheon") {
			got_individual_house_image[i].style.backgroundImage="url('./media/got-cards/baratheon.svg')";
		} else if (got_individual_house[i].innerHTML=="House Tyrell") {
			got_individual_house_image[i].style.backgroundImage="url('./media/got-cards/tyrell.svg')";
		} else {
			got_individual_house_image[i].style.backgroundImage="url('./media/got-cards/default.svg')";
		}
	}
}

function got_assign_image_standalone() {
	var got_standalone_house = document.getElementsByClassName('got-standalone-house');
	var got_standalone_house_image = document.getElementsByClassName('got-standalone-house-image');
	for (var i = 0; i < 1; i++) {
		if (got_standalone_house[i].innerHTML=="House Stark") {
			got_standalone_house_image[i].style.backgroundImage="url('./media/got-cards/stark.svg')";
		} else if (got_standalone_house[i].innerHTML=="House Arryn") {
			got_standalone_house_image[i].style.backgroundImage="url('./media/got-cards/arryn.svg')";
		} else if (got_standalone_house[i].innerHTML=="House Lannister") {
			got_standalone_house_image[i].style.backgroundImage="url('./media/got-cards/lannister.svg')";
		} else if (got_standalone_house[i].innerHTML=="House Mormont") {
			got_standalone_house_image[i].style.backgroundImage="url('./media/got-cards/mormont.svg')";
		} else if (got_standalone_house[i].innerHTML=="House Greyjoy") {
			got_standalone_house_image[i].style.backgroundImage="url('./media/got-cards/greyjoy.svg')";
		} else if (got_standalone_house[i].innerHTML=="House Targaryen") {
			got_standalone_house_image[i].style.backgroundImage="url('./media/got-cards/targaryen.svg')";
		} else if (got_standalone_house[i].innerHTML=="House Baratheon") {
			got_standalone_house_image[i].style.backgroundImage="url('./media/got-cards/baratheon.svg')";
		} else if (got_standalone_house[i].innerHTML=="House Tyrell") {
			got_standalone_house_image[i].style.backgroundImage="url('./media/got-cards/tyrell.svg')";
		} else {
			got_standalone_house_image[i].style.backgroundImage="url('./media/got-cards/default.svg')";
		}
	}
}

// Call these Functions after updating the Leaderboard. No need for setTimeout

function marvel_assign_image_house() {
	var marvel_house_house = document.getElementsByClassName('marvel-house-house');
	var marvel_house_house_image = document.getElementsByClassName('marvel-house-house-image');
	for (var i = 0; i < 6; i++) {
		if (marvel_house_house[i].innerHTML=="Character Thanos") {
			marvel_house_house_image[i].style.backgroundImage="url('./media/marvel-cards/Thanos.svg')";
		} else if (marvel_house_house[i].innerHTML=="Character Doom") {
			marvel_house_house_image[i].style.backgroundImage="url('./media/marvel-cards/Doom.svg')";
		} else if (marvel_house_house[i].innerHTML=="Character Magneto") {
			marvel_house_house_image[i].style.backgroundImage="url('./media/marvel-cards/Magneto.svg')";
		} else if (marvel_house_house[i].innerHTML=="Character Redskull") {
			marvel_house_house_image[i].style.backgroundImage="url('./media/marvel-cards/Redskull.svg')";
		} else if (marvel_house_house[i].innerHTML=="Character Venom") {
			marvel_house_house_image[i].style.backgroundImage="url('./media/marvel-cards/Venom.svg')";
		} else if (marvel_house_house[i].innerHTML=="Character Kingpin") {
			marvel_house_house_image[i].style.backgroundImage="url('./media/marvel-cards/Kingpin.svg')";
		} else {
			marvel_house_house_image[i].style.backgroundImage="url('./media/marvel-cards/marvel-default.svg')";
		}
	}
}

function marvel_assign_image_individual() {
	var marvel_individual_house = document.getElementsByClassName('marvel-individual-house');
	var marvel_individual_house_image = document.getElementsByClassName('marvel-individual-house-image');
	for (var i = 0; i < 10; i++) {
		if (marvel_individual_house[i].innerHTML=="Character Thanos") {
			marvel_individual_house_image[i].style.backgroundImage="url('./media/marvel-cards/Thanos.svg')";
		} else if (marvel_individual_house[i].innerHTML=="Character Doom") {
			marvel_individual_house_image[i].style.backgroundImage="url('./media/marvel-cards/Doom.svg')";
		} else if (marvel_individual_house[i].innerHTML=="Character Magneto") {
			marvel_individual_house_image[i].style.backgroundImage="url('./media/marvel-cards/Magneto.svg')";
		} else if (marvel_individual_house[i].innerHTML=="Character Redskull") {
			marvel_individual_house_image[i].style.backgroundImage="url('./media/marvel-cards/Redskull.svg')";
		} else if (marvel_individual_house[i].innerHTML=="Character Venom") {
			marvel_individual_house_image[i].style.backgroundImage="url('./media/marvel-cards/Venom.svg')";
		} else if (marvel_individual_house[i].innerHTML=="Character Kingpin") {
			marvel_individual_house_image[i].style.backgroundImage="url('./media/marvel-cards/Kingpin.svg')";
		} else {
			marvel_individual_house_image[i].style.backgroundImage="url('./media/marvel-cards/marvel-default.svg')";
		}
	}
}

function marvel_assign_image_standalone() {
	var marvel_standalone_house = document.getElementsByClassName('marvel-standalone-house');
	var marvel_standalone_house_image = document.getElementsByClassName('marvel-standalone-house-image');
	for (var i = 0; i < 1; i++) {
		if (marvel_standalone_house[i].innerHTML=="Character Thanos") {
			marvel_standalone_house_image[i].style.backgroundImage="url('./media/marvel-cards/Thanos.svg')";
		} else if (marvel_standalone_house[i].innerHTML=="Character Doom") {
			marvel_standalone_house_image[i].style.backgroundImage="url('./media/marvel-cards/Doom.svg')";
		} else if (marvel_standalone_house[i].innerHTML=="Character Magneto") {
			marvel_standalone_house_image[i].style.backgroundImage="url('./media/marvel-cards/Magneto.svg')";
		} else if (marvel_standalone_house[i].innerHTML=="Character Redskull") {
			marvel_standalone_house_image[i].style.backgroundImage="url('./media/marvel-cards/Redskull.svg')";
		} else if (marvel_standalone_house[i].innerHTML=="Character Venom") {
			marvel_standalone_house_image[i].style.backgroundImage="url('./media/marvel-cards/Venom.svg')";
		} else if (marvel_standalone_house[i].innerHTML=="Character Kingpin") {
			marvel_standalone_house_image[i].style.backgroundImage="url('./media/marvel-cards/Kingpin.svg')";
		} else {
			marvel_standalone_house_image[i].style.backgroundImage="url('./media/marvel-cards/marvel-default.svg')";
		}
	}
}

// Call these Functions after updating the Leaderboard. No need for setTimeout

function dc_assign_image_house() {
	var dc_house_house = document.getElementsByClassName('dc-house-house');
	var dc_house_house_image = document.getElementsByClassName('dc-house-house-image');
	for (var i = 0; i < 6; i++) {
		if (dc_house_house[i].innerHTML=="Character Aquaman") {
			dc_house_house_image[i].style.backgroundImage="url('./media/dc-cards/Aquaman-logo.svg')";
		} else if (dc_house_house[i].innerHTML=="Character Batman") {
			dc_house_house_image[i].style.backgroundImage="url('./media/dc-cards/Batman-logo.svg')";
		} else if (dc_house_house[i].innerHTML=="Character Flash") {
			dc_house_house_image[i].style.backgroundImage="url('./media/dc-cards/Flash-logo.svg')";
		} else if (dc_house_house[i].innerHTML=="Character Green-Lantern") {
			dc_house_house_image[i].style.backgroundImage="url('./media/dc-cards/Lantern-logo.svg')";
		} else if (dc_house_house[i].innerHTML=="Character Superman") {
			dc_house_house_image[i].style.backgroundImage="url('./media/dc-cards/Superman-logo.svg')";
		} else if (dc_house_house[i].innerHTML=="Character Wonder-Woman") {
			dc_house_house_image[i].style.backgroundImage="url('./media/dc-cards/Wonder-woman-logo.svg')";
		} else {
			dc_house_house_image[i].style.backgroundImage="url('./media/dc-cards/dc-default.svg')";
		}
	}
}

function dc_assign_image_individual() {
	var dc_individual_house = document.getElementsByClassName('dc-individual-house');
	var dc_individual_house_image = document.getElementsByClassName('dc-individual-house-image');
	for (var i = 0; i < 10; i++) {
		if (dc_individual_house[i].innerHTML=="Character Aquaman") {
			dc_individual_house_image[i].style.backgroundImage="url('./media/dc-cards/Aquaman-logo.svg')";
		} else if (dc_individual_house[i].innerHTML=="Character Batman") {
			dc_individual_house_image[i].style.backgroundImage="url('./media/dc-cards/Batman-logo.svg')";
		} else if (dc_individual_house[i].innerHTML=="Character Flash") {
			dc_individual_house_image[i].style.backgroundImage="url('./media/dc-cards/Flash-logo.svg')";
		} else if (dc_individual_house[i].innerHTML=="Character Green-Lantern") {
			dc_individual_house_image[i].style.backgroundImage="url('./media/dc-cards/Lantern-logo.svg')";
		} else if (dc_individual_house[i].innerHTML=="Character Superman") {
			dc_individual_house_image[i].style.backgroundImage="url('./media/dc-cards/Superman-logo.svg')";
		} else if (dc_individual_house[i].innerHTML=="Character Wonder-Woman") {
			dc_individual_house_image[i].style.backgroundImage="url('./media/dc-cards/Wonder-woman-logo.svg')";
		} else {
			dc_individual_house_image[i].style.backgroundImage="url('./media/dc-cards/dc-default.svg')";
		}
	}
}

function dc_assign_image_standalone() {
	var dc_standalone_house = document.getElementsByClassName('dc-standalone-house');
	var dc_standalone_house_image = document.getElementsByClassName('dc-standalone-house-image');
	for (var i = 0; i < 1; i++) {
		if (dc_standalone_house[i].innerHTML=="Character Aquaman") {
			dc_standalone_house_image[i].style.backgroundImage="url('./media/dc-cards/Aquaman-logo.svg')";
		} else if (dc_standalone_house[i].innerHTML=="Character Batman") {
			dc_standalone_house_image[i].style.backgroundImage="url('./media/dc-cards/Batman-logo.svg')";
		} else if (dc_standalone_house[i].innerHTML=="Character Flash") {
			dc_standalone_house_image[i].style.backgroundImage="url('./media/dc-cards/Flash-logo.svg')";
		} else if (dc_standalone_house[i].innerHTML=="Character Green-Lantern") {
			dc_standalone_house_image[i].style.backgroundImage="url('./media/dc-cards/Lantern-logo.svg')";
		} else if (dc_standalone_house[i].innerHTML=="Character Superman") {
			dc_standalone_house_image[i].style.backgroundImage="url('./media/dc-cards/Superman-logo.svg')";
		} else if (dc_standalone_house[i].innerHTML=="Character Wonder-Woman") {
			dc_standalone_house_image[i].style.backgroundImage="url('./media/dc-cards/Wonder-woman-logo.svg')";
		} else {
			dc_standalone_house_image[i].style.backgroundImage="url('./media/dc-cards/dc-default.svg')";
		}
	}
}

// Call these Functions after updating the Leaderboard. No need for setTimeout

function hp_assign_image_house() {
	var hp_house_house = document.getElementsByClassName('hp-house-house');
	var hp_house_house_image = document.getElementsByClassName('hp-house-house-image');
	for (var i = 0; i < 4; i++) {
		if (hp_house_house[i].innerHTML=="House Gryffindor") {
			hp_house_house_image[i].style.backgroundImage="url('./media/hp-cards/Gryffindor.svg')";
		} else if (hp_house_house[i].innerHTML=="House Hufflepuff") {
			hp_house_house_image[i].style.backgroundImage="url('./media/hp-cards/Hufflepuff.svg')";
		} else if (hp_house_house[i].innerHTML=="House Ravenclaw") {
			hp_house_house_image[i].style.backgroundImage="url('./media/hp-cards/Ravenclaw.svg')";
		} else if (hp_house_house[i].innerHTML=="House Slytherin") {
			hp_house_house_image[i].style.backgroundImage="url('./media/hp-cards/Slytherin.svg')";
		} else {
			hp_house_house_image[i].style.backgroundImage="url('./media/hp-cards/hp-default.svg')";
		}
	}
}

function hp_assign_image_individual() {
	var hp_individual_house = document.getElementsByClassName('hp-individual-house');
	var hp_individual_house_image = document.getElementsByClassName('hp-individual-house-image');
	for (var i = 0; i < 10; i++) {
		if (hp_individual_house[i].innerHTML=="House Gryffindor") {
			hp_individual_house_image[i].style.backgroundImage="url('./media/hp-cards/Gryffindor.svg')";
		} else if (hp_individual_house[i].innerHTML=="House Hufflepuff") {
			hp_individual_house_image[i].style.backgroundImage="url('./media/hp-cards/Hufflepuff.svg')";
		} else if (hp_individual_house[i].innerHTML=="House Ravenclaw") {
			hp_individual_house_image[i].style.backgroundImage="url('./media/hp-cards/Ravenclaw.svg')";
		} else if (hp_individual_house[i].innerHTML=="House Slytherin") {
			hp_individual_house_image[i].style.backgroundImage="url('./media/hp-cards/Slytherin.svg')";
		} else {
			hp_individual_house_image[i].style.backgroundImage="url('./media/hp-cards/hp-default.svg')";
		}
	}
}

function hp_assign_image_standalone() {
	var hp_standalone_house = document.getElementsByClassName('hp-standalone-house');
	var hp_standalone_house_image = document.getElementsByClassName('hp-standalone-house-image');
	for (var i = 0; i < 1; i++) {
		if (hp_standalone_house[i].innerHTML=="House Gryffindor") {
			hp_standalone_house_image[i].style.backgroundImage="url('./media/hp-cards/Gryffindor.svg')";
		} else if (hp_standalone_house[i].innerHTML=="House Hufflepuff") {
			hp_standalone_house_image[i].style.backgroundImage="url('./media/hp-cards/Hufflepuff.svg')";
		} else if (hp_standalone_house[i].innerHTML=="House Ravenclaw") {
			hp_standalone_house_image[i].style.backgroundImage="url('./media/hp-cards/Ravenclaw.svg')";
		} else if (hp_standalone_house[i].innerHTML=="House Slytherin") {
			hp_standalone_house_image[i].style.backgroundImage="url('./media/hp-cards/Slytherin.svg')";
		} else {
			hp_standalone_house_image[i].style.backgroundImage="url('./media/hp-cards/hp-default.svg')";
		}
	}
}