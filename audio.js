"use strict;"
function playPause() {
	if(document.getElementById('audio_play').paused == true){
		document.getElementById('audio_play').play();
		document.getElementById('mute').style.display = "none";
		document.getElementById('speaker').style.display = "block";
	}
	else{
		document.getElementById('audio_play').pause();
		document.getElementById('mute').style.display = "block";
		document.getElementById('speaker').style.display = "none";
	}
}



/*var audioElm = document.getElementById('audio_play'); 
	audioElm.muted = !audioElm.muted;
	document.getElementById('audio_play').muted = true; 
	return false"  
	*/
	