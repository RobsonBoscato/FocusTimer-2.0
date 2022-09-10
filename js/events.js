import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
} from './elements.js';

export default function factoryEvents({ controls, sound, configTimer }) {
  buttonPlay.addEventListener('click', handleButtonPlay);
  buttonPause.addEventListener('click', handleButtonPause);
  buttonStop.addEventListener('click', handleButtonStop);
  buttonSoundOn.addEventListener('click', handleButtonSoundOn);
  buttonSoundOff.addEventListener('click', handleButtonSoundOff);
  buttonSet.addEventListener('click', handleButtonSet);

  function handleButtonPlay() {
    controls.play();
    configTimer.countdown();
    sound.pressButton();
  }

  function handleButtonPause() {
    controls.pause();
    configTimer.hold();
    sound.pressButton();
  }

  function handleButtonStop() {
    configTimer.resetTimer();
    controls.reset();
    sound.pressButton();
  }

  function handleButtonSoundOn() {
    controls.soundOn();
    sound.bgAudio.pause();
  }

  function handleButtonSoundOff() {
    controls.soundOff();
    sound.bgAudio.play();
  }

  function handleButtonSet() {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      configControls.reset();
      return;
    }

    configTimer.updateMinutes(newMinutes);
    configTimer.updateDisplay(newMinutes, 0);
  }

  return {
    handleButtonPlay,
    handleButtonPause,
    handleButtonStop,
    handleButtonSet,
    handleButtonSoundOn,
    handleButtonSoundOff,
  };
}
