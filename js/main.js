$(document).ready(function() {
	
	//First Scene
	var prev = document.querySelector('#prevLoc');
	var next = document.querySelector('#nextLoc');
	prev.addEventListener('click', function () {
	prev.emit('prevshrink');
	window.location.assign("/location3/");
	});
	next.addEventListener('click', function () {
	next.emit('nextshrink');
	window.location.assign("/location2/");
	});

	//Second Scene
	// var prev2 = document.querySelector('#prevLoc2');
	// var next2 = document.querySelector('#nextLoc2');
	// prev2.addEventListener('click', function () {
	// prev2.emit('prevshrink');
	// window.location.assign("../index.html");
	// });
	// next2.addEventListener('click', function () {
	// next2.emit('nextshrink');
	// window.location.assign("/location3/");
	// });

	//Third Scene
	// var prev3 = document.querySelector('#prevLoc3');
	// var next3 = document.querySelector('#nextLoc3');
	// prev3.addEventListener('click', function () {
	// prev3.emit('prevshrink');
	// window.location.assign("/location2/");
	// });
	// next3.addEventListener('click', function () {
	// next3.emit('nextshrink');
	// window.location.assign("../index.html");
	// });

});