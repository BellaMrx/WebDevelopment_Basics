const book = {
    title: 'Christmas is bad',
    Preis: 109.90,
    author: 'Grinch',
    isbn: '111-1-1111-1111-1',
    printDescription() {
        console.log(`${this.author}: ${this.title}`);
    }
}
console.log(book.title); // "Christmas is bad"
console.log(buch.preis); // 109,90
console.log(buch.autor); // "Grinch"
console.log(buch.isbn); // "111-1-1111-1111-1"
book.printDescription(); // "Grinch:Christmas is bad."