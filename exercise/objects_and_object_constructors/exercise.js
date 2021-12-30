

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "not read yet": "read"}`
    }
}

const bookOne = new Book("Roots","Alex Haley", 1002,true)
const bookTwo = new Book("Things Fall Apart","Chinua Achebe", 300,false)

console.log(bookOne.info())
console.log(bookTwo.info())