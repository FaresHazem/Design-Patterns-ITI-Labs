// No matter how many times we call getInstance(), there is only one object.
class InstanceCounter {
  static instance = null;
  static count = 0;

  constructor() {
    // If an instance already exists, return it directly.
    if (InstanceCounter.instance !== null) {
      return InstanceCounter.instance;
    }

    // Increase count only when the real first instance is created.
    InstanceCounter.count += 1;
  }

  static getInstance() {
    if (InstanceCounter.instance === null) {
      InstanceCounter.instance = new InstanceCounter();
    }

    return InstanceCounter.instance;
  }

  static getCount() {
    return InstanceCounter.count;
  }
}

export default InstanceCounter;
