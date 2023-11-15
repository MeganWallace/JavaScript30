  window.addEventListener('keydown', function(e){ //event listener for whole window
    // console.log(e.keyCode); //returns the keyCode of the key pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //gets the <audio> associated with the data-key [attribute] corresponding to the keys keyCode
    // console.log(audio);
    if(!audio) return; //if there is no <audio> the function stops and resets, otherwise...
    
    audio.currentTime = 0; //restarts audio (allowing audio to play if key is pressed repeatedly)
    audio.play(); //plays audio when the corresponding key is pressed

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); //gets div based on keyCode of key pressed
    key.classList.add("playing"); //applies playing class style for pressed key
  });

  function removeTransition (e) {
    if (e.propertyName !== 'transform')return; //skip if property is not transform
    this.classList.remove('playing'); //remove playing class style from key pressed (e)
  }

  const keys = document.querySelectorAll('.key'); //array of all divs with class of keys
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //loops through each key, applies removeTransition() function
