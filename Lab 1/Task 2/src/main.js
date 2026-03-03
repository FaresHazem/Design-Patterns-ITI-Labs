import InstanceCounter from "./singleton/InstanceCounter.js";

// We try to create many instances.
const first = InstanceCounter.getInstance();
console.log(`Count after first call: ${InstanceCounter.getCount()}`);

const second = InstanceCounter.getInstance();
console.log(`Count after second call: ${InstanceCounter.getCount()}`);

const third = InstanceCounter.getInstance();
console.log(`Count after third call: ${InstanceCounter.getCount()}`);
