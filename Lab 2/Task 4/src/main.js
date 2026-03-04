import { Book, BookBox } from "./composite/BookComposite.js";

const cleanCode = new Book("Clean Code", 464);
const designPatterns = new Book("Design Patterns", 395);
const jsGuide = new Book("JavaScript Guide", 300);

const smallBox = new BookBox("Small Box");
smallBox.add(cleanCode);
smallBox.add(jsGuide);

const bigBox = new BookBox("Big Box");
bigBox.add(smallBox);
bigBox.add(designPatterns);

bigBox.printHierarchy();
