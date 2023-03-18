import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEOPLAYER_CURRENT_TIME_KEY = "videoplayer-current-time";

const onPlay = throttle(({ seconds }) => {
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME_KEY, seconds);
}, 1000);

player.setCurrentTime(localStorage.getItem(VIDEOPLAYER_CURRENT_TIME_KEY) || 0);
player.on('timeupdate', onPlay);