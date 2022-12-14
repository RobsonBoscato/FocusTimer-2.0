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
  minutesDisplay,
  secondsDisplay,
  buttonLightMode,
  buttonDarkMode,
  barVolumeForest,
  barVolumeRain,
  barVolumeStore,
  barVolumeFire,
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
  buttonLightMode.addEventListener('click', handleLightMode);
  buttonDarkMode.addEventListener('click', handleDarkMode);
  barVolumeForest.addEventListener('change', handleForestVolume);
  barVolumeRain.addEventListener('change', handleRainVolume);
  barVolumeStore.addEventListener('change', handleStoreVolume);
  barVolumeFire.addEventListener('change', handleFireVolume);

  function handleForestVolume() {
    sound.volumeSetter(barVolumeForest.value / 100, barVolumeForest.id);
  }
  function handleRainVolume() {
    sound.volumeSetter(barVolumeRain.value / 100, barVolumeRain.id);
  }
  function handleStoreVolume() {
    sound.volumeSetter(barVolumeStore.value / 100, barVolumeStore.id);
  }
  function handleFireVolume() {
    sound.volumeSetter(barVolumeFire.value / 100, barVolumeFire.id);
  }

  function handleLightMode() {
    controls.lightMode();
  }

  function handleDarkMode() {
    controls.darkMode();
  }

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
    let minutes = Number(minutesDisplay.textContent) + 5;
    configTimer.updateMinutes(minutes);
    configTimer.updateDisplay(minutes, secondsDisplay.textContent);
  }

  function handleButtonDecrementTime() {
    sound.pressButton();
    let minutes = Number(minutesDisplay.textContent) - 5;
    if (minutes <= 0) {
      alert('[ERRO] Tempo m??nimo 5 minutos.');
      minutes = Number(minutesDisplay.textContent);
    }
    configTimer.updateMinutes(minutes);
    configTimer.updateDisplay(minutes, secondsDisplay.textContent);
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
    handleButtonIncrementTime,
    handleButtonDecrementTime,
    handleLightMode,
    handleDarkMode,
    handleForestVolume,
    handleRainVolume,
    handleStoreVolume,
    handleFireVolume,
  };
}
