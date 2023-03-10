
let player;
const playerContainer = $(".player");

let iventsInit = () => {
	$(".player__start").click(e => {
		e.preventDefault();

		if (playerContainer.hasClass("paused")) {
			
			player.pauseVideo()
		} else {
			
			player.playVideo()
		}
		
	});

	$(".player__playback").click(e => {
		const bar = $(e.currentTarget);
		const clickedPosition =  e.originalEvent.layerX;
		const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
		const newPlayerBackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;


		$(".player__playback-button").css({
			left: `${newButtonPositionPercent}%`
		});

		player.seekTo(newPlayerBackPositionSec);

	});

	$(".player__splash").click(e => {
		player.playVideo();
	})

};

const formatTime = timeSec => {
	const roundTime = Math.round(timeSec);

	const minutes = addZero(Math.floor(roundTime / 60));
	const seconds = addZero(roundTime - minutes * 60);

	function addZero(num) {
		return num < 10 ? `0${num}` : num;
		}

	return `${minutes} : ${seconds}`
}

const onPlayerReady = () => {
	let interval;
	const durationSec = player.getDuration();

	$(".player__duration-estimate").text(formatTime(durationSec));

	if (typeof interval !== 'undefined') {
		clearInterval(interval);
	}

	interval = setInterval(() => {
		const completedSec = player.getCurrentTime();
		const complitedPercent = (completedSec / durationSec) * 100;

		$(".player__playback-button").css({
			left: `${complitedPercent}%`
		});

		$(".player__duration-completed").text(formatTime(completedSec));

	}, 1000);
}

const onPlayerStateChange = event => {
	switch (event.data) {
		case 1:
			playerContainer.addClass("active");
			playerContainer.addClass("paused");
			break;

		case 2:
			playerContainer.removeClass("active");
			playerContainer.removeClass("paused");
			break;

	}
};

function onYouTubeIframeAPIReady() {
	console.log('onYouTubeIframeAPIReady');

	player = new YT.Player('yt-player', {
		height: '405',
		width: '660',
		videoId: 'hk3KPa6zWzo',
		playerVars: {
			'playsinline': 1
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		},
		playerVars: {
			controls: 0,
			disablekb: 0,
			showinfo: 0,
			rel: 0,
			autoplay: 0,
			modestbranding: 0,

		}
	});
}

iventsInit ();

// ;(function() {

// })()