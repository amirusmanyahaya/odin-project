

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

const bookOne = new Book("Roots","Alex Haley", 1002)
const bookTwo = new Book("Things Fall Apart","Chinua Achebe", 300)

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "not read yet": "read"}`
}

console.log(bookOne.info())
console.log(bookTwo.info())


