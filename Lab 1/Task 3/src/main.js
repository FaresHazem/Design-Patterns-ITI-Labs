import DocumentPrototype from "./prototype/DocumentPrototype.js";

const originalDoc = new DocumentPrototype(
  "Project Header",
  "Project Footer",
  [1, 2, 3],
  "Original text",
);

const clonedDoc = originalDoc.clone();
clonedDoc.text = "Cloned text";
clonedDoc.pages.push(4);

console.log(`Original -> ${originalDoc.getSummary()}`);
console.log(`Cloned   -> ${clonedDoc.getSummary()}`);
