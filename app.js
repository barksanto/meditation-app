const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');


  //sounds
  const sounds = document.querySelectorAll('.sound-picker button');
  //time display
  const timeDisplay = document.querySelector('.timeDisplay');
  //get length of outline
  const outlineLength = outline.getTotalLength();
  // console.log(outlineLength)
  // 'fake' Duration - 
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

//play sound
  play.addEventListener('click', () => {
    song.play();
  });
// create a function to stop and play the sounds
};

app();