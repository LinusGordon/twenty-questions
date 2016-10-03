document.addEventListener('DOMContentLoaded', function() {

	function play() {
		document.getElementById("gameboard").innerHTML = "????????????????????"
	}
	document.getElementById('play').onclick = play;

	function clear() {
		document.getElementById("gameboard").innerHTML = ""
	}
	document.getElementById('clear').onclick = clear;
});