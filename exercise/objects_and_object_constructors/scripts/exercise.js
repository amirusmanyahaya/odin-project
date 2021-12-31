
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

const createBookDiv = (book) => {
    const bookDiv = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const read = document.createElement('p')
    const titleText = document.createTextNode(`Book Title: ${book.title}`)
    const authorText = document.createTextNode(`Book Author: ${book.author}`)
    const pagesText = document.createTextNode(`Number of Pages: ${book.pages}`)
    const readText = document.createTextNode(`Book read: ${book.read ? "Yes" : "NO"}`)

    title.appendChild(titleText)
    author.appendChild(authorText)
    pages.appendChild(pagesText)
    read.appendChild(readText)

    bookDiv.appendChild(title)
    bookDiv.appendChild(author)
    bookDiv.appendChild(pages)
    bookDiv.appendChild(read)

    return bookDiv
}

const displayBooks = (library) => {
        const booksContainer = document.querySelector('.books-container')
        if(booksContainer.style.display === ""){
            booksContainer.style.display = "block"
            console.log(booksContainer.style.display)
        }
        library.forEach((book) => {
            const bookDiv = createBookDiv(book)
            booksContainer.appendChild(bookDiv)
        })
}

const addButton = document.querySelector('.add-button')
addButton.addEventListener('click',() => {
    const book = fetchBookDetail()
    addBookToLibrary(book)
    displayBooks(myLibrary)
})


