class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }

  getPages() {
    return this.pages;
  }

  printHierarchy(indent = "") {
    console.log(`${indent}- Book: ${this.title} (${this.pages} pages)`);
  }
}

class BookBox {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  getPages() {
    return this.items.reduce((sum, item) => sum + item.getPages(), 0);
  }

  printHierarchy(indent = "") {
    console.log(`${indent}+ Box: ${this.name} (${this.getPages()} pages)`);
    for (const item of this.items) {
      item.printHierarchy(`${indent}  `);
    }
  }
}

export { Book, BookBox };
