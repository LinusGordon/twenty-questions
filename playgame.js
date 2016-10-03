document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('play-button').onclick = function() {
		var playButtonText = document.getElementById('play-button-text');
		var gameboardText = document.getElementById("gameboard-text")
		
		if (playButtonText.innerHTML == "Play") {
			playButtonText.innerHTML = "Replay";
			gameboardText.className = "";
		}
		else {
			playButtonText.innerHTML = "Play";
			gameboardText.className = "hidden";
		}
	};
});