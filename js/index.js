import ControlsFactory from './controls.js';
import { TimerFactory } from './timer.js';
import Sounds from './sounds.js';
import factoryEvents from './events.js';
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
  buttonSoundOn,
  buttonSoundOff,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundStore,
  buttonSoundFire,
  buttonDarkMode,
  buttonLightMode,
} from './elements.js';

const controls = ControlsFactory({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundFire,
  buttonSoundStore,
  buttonLightMode,
  buttonDarkMode,
});

const configTimer = TimerFactory({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sounds();

factoryEvents({ controls, configTimer, sound });
