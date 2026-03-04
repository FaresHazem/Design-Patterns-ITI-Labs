import {
  TV,
  Speaker,
  BasicVolumeBridge,
  MuteVolumeBridge,
} from "./bridge/VolumeBridge.js";

const tv = new TV();
const speaker = new Speaker();

const tvBasicBridge = new BasicVolumeBridge(tv);
const speakerMuteBridge = new MuteVolumeBridge(speaker);

tvBasicBridge.increaseVolume();
tvBasicBridge.decreaseVolume();

speakerMuteBridge.increaseVolume();
speakerMuteBridge.decreaseVolume();
speakerMuteBridge.mute();
