export default function () {
  let currentSound;
  const buttonPressAudio = new Audio(
    'https://github.com/RobsonBoscato/sounds/blob/main/audios_button-press.wav?raw=true'
  );
  const kitchenTimer = new Audio(
    'https://github.com/RobsonBoscato/sounds/blob/main/audios_kichen-timer.mp3?raw=true'
  );
  const forest = new Audio(
    'https://github.com/RobsonBoscato/sounds/blob/main/Floresta.wav?raw=true'
  );
  const rain = new Audio(
    'https://github.com/RobsonBoscato/sounds/blob/main/raining.mp3?raw=true Crossorigin ="anonymous"'
  );
  const store = new Audio(
    'https://github.com/RobsonBoscato/sounds/blob/main/Cafeteria.wav?raw=true'
  );
  const fire = new Audio(
    'https://github.com/RobsonBoscato/sounds/blob/main/Lareira.wav?raw=true'
  );

  forest.loop = true;
  rain.loop = true;
  store.loop = true;
  fire.loop = true;

  console.log(currentSound);

  function validationCardSounds() {
    if (currentSound !== undefined) {
      console.log('entrei');
      currentSound.loop = false;
      currentSound.currentTime = 220;
    }
  }
  console.log(currentSound);
  function forestPlay() {
    validationCardSounds();
    forest.play();
    currentSound = 1;
  }

  function rainPlay() {
    validationCardSounds();
    rain.play();
    // currentSound = 1;
  }

  function storePlay() {
    validationCardSounds();
    store.play();
    // currentSound = 1;
  }

  function firePlay() {
    validationCardSounds();
    fire.play();
    // currentSound = 1;
  }
  function timeEnd() {
    kitchenTimer.play();
  }
  function stopSound() {
    forest.volume = 0;
    rain.volume = 0;
    fire.volume = 0;
    store.volume = 0;
  }
  function playSound() {
    forest.volume = 1;
    rain.volume = 1;
    fire.volume = 1;
    store.volume = 1;
  }

  function pressButton() {
    buttonPressAudio.play();
  }

  return {
    pressButton,
    timeEnd,
    forestPlay,
    rainPlay,
    storePlay,
    firePlay,
    stopSound,
    currentSound,
    playSound,
  };
}
