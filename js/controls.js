export default function ControlsFactory({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundStore,
  buttonSoundFire,
  buttonLightMode,
  buttonDarkMode,
}) {
  function darkMode() {
    buttonDarkMode.classList.add('hide');
    buttonLightMode.classList.remove('hide');
    document.body.classList.remove('dark');
  }

  function lightMode() {
    buttonLightMode.classList.add('hide');
    buttonDarkMode.classList.remove('hide');
    document.body.classList.add('dark');
  }

  function soundForest() {
    buttonSoundForest.classList.toggle('selected');
    buttonSoundRain.disabled = !buttonSoundRain.disabled;
    buttonSoundStore.disabled = !buttonSoundStore.disabled;
    buttonSoundFire.disabled = !buttonSoundFire.disabled;
  }
  function soundRain() {
    buttonSoundRain.classList.toggle('selected');
    buttonSoundForest.disabled = !buttonSoundForest.disabled;
    buttonSoundStore.disabled = !buttonSoundStore.disabled;
    buttonSoundFire.disabled = !buttonSoundFire.disabled;
  }
  function soundStore() {
    buttonSoundStore.classList.toggle('selected');
    buttonSoundForest.disabled = !buttonSoundForest.disabled;
    buttonSoundRain.disabled = !buttonSoundRain.disabled;
    buttonSoundFire.disabled = !buttonSoundFire.disabled;
  }
  function soundFire() {
    buttonSoundFire.classList.toggle('selected');
    buttonSoundForest.disabled = !buttonSoundForest.disabled;
    buttonSoundRain.disabled = !buttonSoundRain.disabled;
    buttonSoundStore.disabled = !buttonSoundStore.disabled;
  }

  function play() {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');
  }

  function pause() {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
  }

  function reset() {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonSet.classList.remove('hide');
    buttonStop.classList.add('hide');
  }

  function soundOn() {
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
  }

  function soundOff() {
    buttonSoundOn.classList.remove('hide');
    buttonSoundOff.classList.add('hide');
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos? ') || 0;
    let setTimer = newMinutes;
    if (!newMinutes) {
      return false;
    }

    return newMinutes, setTimer;
  }

  return {
    reset,
    play,
    pause,
    soundOn,
    soundOff,
    getMinutes,
    soundForest,
    soundRain,
    soundStore,
    soundFire,
    lightMode,
    darkMode,
  };
}
