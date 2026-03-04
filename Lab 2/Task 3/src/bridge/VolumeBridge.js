class TV {
  constructor() {
    this.volume = 10;
  }

  increaseVolume() {
    this.volume += 1;
    console.log(`TV volume: ${this.volume}`);
  }

  decreaseVolume() {
    this.volume = Math.max(0, this.volume - 1);
    console.log(`TV volume: ${this.volume}`);
  }

  mute() {
    this.volume = 0;
    console.log("TV muted");
  }
}

class Speaker {
  constructor() {
    this.volume = 20;
  }

  increaseVolume() {
    this.volume += 2;
    console.log(`Speaker volume: ${this.volume}`);
  }

  decreaseVolume() {
    this.volume = Math.max(0, this.volume - 2);
    console.log(`Speaker volume: ${this.volume}`);
  }

  mute() {
    this.volume = 0;
    console.log("Speaker muted");
  }
}

class BasicVolumeBridge {
  constructor(device) {
    this.device = device;
  }

  increaseVolume() {
    this.device.increaseVolume();
  }

  decreaseVolume() {
    this.device.decreaseVolume();
  }
}

class MuteVolumeBridge extends BasicVolumeBridge {
  mute() {
    this.device.mute();
  }
}

export { TV, Speaker, BasicVolumeBridge, MuteVolumeBridge };
