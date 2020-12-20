const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');
  const timeSelect = document.querySelectorAll('.time-select button')

  //sounds
  const sounds = document.querySelectorAll('.sound-picker button');
  //time display
  const timeDisplay = document.querySelector('.time-display');
  //get length of outline
  const outlineLength = outline.getTotalLength();
  // console.log(outlineLength)
  // 'fake' Duration - 
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //pick different sounds
  sounds.forEach(sound => {
    sound.addEventListener('click', function(){
      song.src = this.getAttribute('data-sound');
      video.src = this.getAttribute('data-video');
      checkPlaying(song);
    })
  })

//play sound
  play.addEventListener('click', () => {
    checkPlaying(song)
  });

  //select sound
  timeSelect.forEach(option => {
    option.addEventListener('click', function() {
      fakeDuration = this.getAttribute('data-time');
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
    });
  });

// create a function to stop and play the sounds
const checkPlaying = song => {
    if(song.paused){
      song.play()
      play.src = './svg/pause.svg'
      video.play()
    } else {
      song.pause();
      play.src = './svg/play.svg'
      video.pause()
    }
  }

  // we can animate the circle when playing and check the time
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    //animate the circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;
    //animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`
    if (currentTime >= fakeDuration){
      song.pause();
      song.currentTime = 0;
      play.src = './svg/play.svg'
      video.pause();
    }
  }
};

app();