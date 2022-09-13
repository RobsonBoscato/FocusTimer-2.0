export default function () {
  let currentSound;
  let selectedCard = false;
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

  function validationCardSounds() {
    if (currentSound != undefined || currentSound == 1) {
      forest.loop = false;
      rain.loop = false;
      store.loop = false;
      fire.loop = false;
      forest.pause();
      rain.pause();
      store.pause();
      fire.pause();
      currentSound = 0;
    }
  }

  function forestPlay() {
    if (currentSound == 1) {
      validationCardSounds();
      return;
    }
    forest.loop = true;
    forest.play();
    currentSound = 1;
  }

  function rainPlay() {
    if (currentSound == 1) {
      validationCardSounds();
      return;
    }
    rain.loop = true;
    rain.play();
    currentSound = 1;
  }

  function storePlay() {
    if (currentSound == 1) {
      validationCardSounds();
      return;
    }
    store.loop = true;
    store.play();
    currentSound = 1;
  }

  function firePlay() {
    if (currentSound == 1) {
      validationCardSounds();
      return;
    }
    fire.loop = true;
    fire.play();
    currentSound = 1;
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
