function dc_choose_char() {
	var dc_hero_id = document.getElementsByClassName('dc-swiper-slide swiper-slide-active')[0].getAttribute('id');
	var dc_hero_card = document.getElementsByClassName('dc-swiper-slide swiper-slide-active')[0];
	dc_hero_card.style.transform = 'rotateY(180deg)';
	dc_hero_card.style.transitionDuration = '1s';
	var x=0;
	if (dc_hero_id=='superman') {
		x=0;
	} else if (dc_hero_id=='wonderwoman') {
		x=1;
	} else if (dc_hero_id=='batman') {
		x=2;
	} else if (dc_hero_id=='greenlantern') {
		x=3;
	} else if (dc_hero_id=='flash') {
		x=4;
	} else if (dc_hero_id=='aquaman') {
		x=5;
	} else {
		x=100;
	}
	dc_disp_dialog_char(x);
	sendSelectedChar(3,x);
}

function load_dc_images() {
	document.getElementsByTagName('body')[0].style.overflow='hidden';
	var dc_queue = new createjs.LoadQueue(false);
	dc_queue.on("complete", dc_handleComplete, this);
	dc_queue.loadManifest([
		"./media/dc-cards/Aquaman-logo.svg",
		"./media/dc-cards/Batman-logo.svg",
		"./media/dc-cards/Flash-logo.svg",
		"./media/dc-cards/Lantern-logo.svg",
		"./media/dc-cards/Superman-logo.svg",
		"./media/dc-cards/Wonder-woman-logo.svg",
		"./media/dc-cards/dc-default.svg",
		"./media/chatbox.svg",
		"./media/chatbox-right.svg",
		"./media/step-face.svg",
		"./media/unknown.svg"
	]);
	function dc_handleComplete() {
		loaded=1;
		yes_loaded();
		document.getElementsByTagName('body')[0].style.overflow='auto';
	}
}