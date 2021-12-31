
let myLibrary = []

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "not read yet": "read"}`
}

const addToLibrary = (book) => {
    myLibrary.push(book)
}

const fetchBookDetail = () => {
    
    const title = document.querySelector('.title-input').value
    const author = document.querySelector('.author-input').value
    const pages = document. querySelector('.pages-input').value
    const read = document.querySelector('.read-input').checked

    // return new book object
    return new Book(title,author,+pages,read)
}

const addBookToLibrary = (book) => {
    myLibrary.push(book)
}

const addButton = document.querySelector('.add-button')
addButton.addEventListener('click',() => {
    const book = fetchBookDetail()
    addBookToLibrary(book)
    console.log(myLibrary)
})