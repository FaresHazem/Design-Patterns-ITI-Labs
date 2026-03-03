// Prototype object that can clone itself to create new documents.
class DocumentPrototype {
  constructor(header, footer, pages, text) {
    this.header = header;
    this.footer = footer;
    this.pages = pages;
    this.text = text;
  }

  clone() {
    return new DocumentPrototype(
      this.header,
      this.footer,
      [...this.pages],
      this.text,
    );
  }

  getSummary() {
    return `Header: ${this.header} | Footer: ${this.footer} | Pages: ${this.pages.join(", ")} | Text: ${this.text}`;
  }
}

export default DocumentPrototype;
