import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  buttonIncMinutes,
  buttonDecMinutes,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundStore,
  buttonSoundFire,
} from './elements.js';

export default function factoryEvents({ controls, sound, configTimer }) {
  buttonPlay.addEventListener('click', handleButtonPlay);
  buttonPause.addEventListener('click', handleButtonPause);
  buttonStop.addEventListener('click', handleButtonStop);
  buttonSoundOn.addEventListener('click', handleButtonSoundOn);
  buttonSoundOff.addEventListener('click', handleButtonSoundOff);
  buttonSet.addEventListener('click', handleButtonSet);
  buttonIncMinutes.addEventListener('click', handleButtonIncrementTime);
  buttonDecMinutes.addEventListener('click', handleButtonDecrementTime);
  buttonSoundForest.addEventListener('click', handleButtonSoundForest);
  buttonSoundRain.addEventListener('click', handleButtonSoundRain);
  buttonSoundStore.addEventListener('click', handleButtonSoundStore);
  buttonSoundFire.addEventListener('click', handleButtonSoundFire);

  function handleButtonSoundForest() {
    controls.soundForest();
    sound.pressButton();
    sound.forestPlay();
    controls.soundOn();
  }

  function handleButtonSoundRain() {
    controls.soundRain();
    sound.pressButton();
    sound.rainPlay();
  }

  function handleButtonSoundStore() {
    controls.soundStore();
    sound.pressButton();
    sound.storePlay();
  }

  function handleButtonSoundFire() {
    controls.soundFire();
    sound.pressButton();
    sound.firePlay();
  }

  function handleButtonIncrementTime() {
    sound.pressButton();
  }

  function handleButtonDecrementTime() {
    sound.pressButton();
  }

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
    sound.playSound();
  }

  function handleButtonSoundOff() {
    controls.soundOff();
    // sound.play();
    sound.stopSound();
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
    handleButtonSoundForest,
    handleButtonSoundRain,
    handleButtonSoundStore,
    handleButtonSoundFire,
  };
}
