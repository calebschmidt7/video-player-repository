window.onload = function () {
  var video = document.getElementById("video");

  var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");
  var fullScreenButton = document.getElementById("full-screen");

  var seekBar = document.getElementById("seek-bar");
  var timePlayed = document.getElementById("timeplayed");
  var timeDuration = document.getElementById("timeduration");
  
  var spanOne = document.getElementById("one");
  var spanTwo = document.getElementById("two");
  var spanThree = document.getElementById("three");
  var spanFour = document.getElementById("four");
  var spanFive = document.getElementById("five");
  var spanSix = document.getElementById("six");
  var spanSeven = document.getElementById("seven");
  var spanEight = document.getElementById("eight");
  var spanNine = document.getElementById("nine");
  var spanTen = document.getElementById("ten");
  var spanEleven = document.getElementById("eleven");
  var spanTwelve = document.getElementById("twelve");
  var spanThirteen = document.getElementById("thirteen");
  var spanFourteen = document.getElementById("fourteen");
  var spanFifteen = document.getElementById("fifteen");
  var spanSixteen = document.getElementById("sixteen");  
  
  
  

  playButton.addEventListener("click", function() {
    if (video.paused == true) {
      video.play();
      document.getElementById("play-pause-png").src = "icons/pause-icon.png";
    } else {
      video.pause();
      document.getElementById("play-pause-png").src = "icons/play-icon.png";
    }

  });


  muteButton.addEventListener("click", function() {
    if (video.muted == false) {
      video.muted = true;
      document.getElementById("mute-png").src = "icons/volume-off-icon.png";
    } else {
      video.muted = false;
      document.getElementById("mute-png").src = "icons/volume-on-icon.png";
    }

  });



  fullScreenButton.addEventListener("click", function () {
    if (video.requestFullScreen) {
      video.requestFullScreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullScreen) {
      video.webkitRequestFullScreen();
    }

  });



   seekBar.addEventListener("change", function() {
     var time = video.duration * (seekBar.value / 100);
     video.currentTime = time;
   });


    video.addEventListener("timeupdate", function() {
      var value = (100 / video.duration) * video.currentTime;
      seekBar.value = value;

      var curmins = Math.floor(video.currentTime / 60);
      var cursecs = Math.floor(video.currentTime - curmins * 60);
      var durmins = Math.floor(video.duration / 60);
      var dursecs = Math.floor(video.duration - durmins * 60);

      if (cursecs < 10) { cursecs = "0"+cursecs;}
      if (dursecs < 10) { dursecs = "0"+dursecs;}
      if (curmins < 10) { curmins = "0"+curmins;}
      if (durmins < 10) { durmins = "0"+durmins;}

      timePlayed.innerHTML = curmins+":"+cursecs+" / ";
      timeDuration.innerHTML = durmins+":"+dursecs;
      
      
      
      if (video.currentTime < 4.13) {spanOne.classList.add("transcript");}
      else if (video.currentTime < 7.535) {spanTwo.classList.add("transcript"); spanOne.classList.remove("transcript"); }
      else if (video.currentTime < 11.27) {spanThree.classList.add("transcript"); spanTwo.classList.remove("transcript");}
      else if (video.currentTime < 13.96) {spanFour.classList.add("transcript"); spanThree.classList.remove("transcript");}
      else if (video.currentTime < 17.9) {spanFive.classList.add("transcript"); spanFour.classList.remove("transcript");}
      else if (video.currentTime < 22.37) {spanSix.classList.add("transcript"); spanFive.classList.remove("transcript");}
      else if (video.currentTime < 26.88) {spanSeven.classList.add("transcript"); spanSix.classList.remove("transcript");}
      else if (video.currentTime < 30.92) {spanEight.classList.add("transcript"); spanSeven.classList.remove("transcript");}
      else if (video.currentTime < 34.73) {spanNine.classList.add("transcript"); spanEight.classList.remove("transcript");}
      else if (video.currentTime < 39.43) {spanTen.classList.add("transcript"); spanNine.classList.remove("transcript");}
      else if (video.currentTime < 41.19) {spanEleven.classList.add("transcript"); spanTen.classList.remove("transcript");}
      else if (video.currentTime < 46.3) {spanTwelve.classList.add("transcript"); spanEleven.classList.remove("transcript");}
      else if (video.currentTime < 49.27) {spanThirteen.classList.add("transcript"); spanTwelve.classList.remove("transcript");}
      else if (video.currentTime < 53.76) {spanFourteen.classList.add("transcript"); spanThirteen.classList.remove("transcript");}
      else if (video.currentTime < 57.78) {spanFifteen.classList.add("transcript"); spanFourteen.classList.remove("transcript");}
      else if (video.currentTime < 58.5) {spanSixteen.classList.add("transcript"); spanFifteen.classList.remove("transcript");}

      
      
    });



   



   seekBar.addEventListener("mousedown", function() {
     video.pause();
   });

   seekBar.addEventListener("mouseup", function() {
     video.play();
   });















}