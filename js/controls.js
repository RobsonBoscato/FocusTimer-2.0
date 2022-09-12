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
}) {
  function soundForest() {
    buttonSoundForest.classList.toggle('filter');
  }
  function soundRain() {
    buttonSoundRain.classList.toggle('filter');
  }
  function soundStore() {
    buttonSoundStore.classList.toggle('filter');
  }
  function soundFire() {
    buttonSoundFire.classList.toggle('filter');
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
  };
}
