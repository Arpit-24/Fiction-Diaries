function choose_char() {
	var hero_id = document.getElementsByClassName('marvel-swiper-slide swiper-slide-active')[0].getAttribute('id');
	var hero_card = document.getElementsByClassName('marvel-swiper-slide swiper-slide-active')[0];
	hero_card.style.transform = 'rotateY(180deg)';
	hero_card.style.transitionDuration = '1s';
	var x=0;
	if (hero_id=='magneto') {
		x=0;
	} else if (hero_id=='doom') {
		x=1;
	} else if (hero_id=='kingpin') {
		x=2;
	} else if (hero_id=='thanos') {
		x=3;
	} else if (hero_id=='redskull') {
		x=4;
	} else if (hero_id=='venom') {
		x=5;
	}else {
		x=100;
	}
	disp_dialog_char(x);
	sendSelectedChar(2,x);
}

//load_marvel_images();

function load_marvel_images() {
	document.getElementsByTagName('body')[0].style.overflow='hidden';
	//document.getElementById('marvel-div').style.overflow='hidden';
	var marvel_queue = new createjs.LoadQueue(false);
	marvel_queue.on("complete", marvel_handleComplete, this);
	marvel_queue.on("progress", marvel_handleOverallProgress);
	marvel_queue.loadManifest([
		"./media/marvel-cards/Doom.svg",
		"./media/marvel-cards/Kingpin.svg",
		"./media/marvel-cards/Magneto.svg",
		"./media/marvel-cards/Redskull.svg",
		"./media/marvel-cards/Thanos.svg",
		"./media/marvel-cards/Venom.svg",
		"./media/marvel-cards/marvel-default.svg",
		"./media/chatbox.svg",
		"./media/chatbox-right.svg",
		"./media/nick.svg",
		"./media/unknown.svg"
	]);
	function marvel_handleComplete() {
		loaded=1; yes_loaded();
		document.getElementsByTagName('body')[0].style.overflow='auto';
//		document.getElementById('marvel-div').style.overflow='auto';
	}
	function marvel_handleOverallProgress() {
		var marvel_loading_water_progress = marvel_queue.progress * 14;
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
		{
			document.getElementById('marvel-loading-text').style.fontSize='10vh';
			document.getElementById('marvel-loading-text').style.backgroundPosition="left -10px top calc(-160px - " + marvel_loading_water_progress + "vh)";
		} else {
			document.getElementById('marvel-loading-text').style.backgroundPosition="left -10px top calc(-190px - " + marvel_loading_water_progress + "vh)";
		}
	}
}