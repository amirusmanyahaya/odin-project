
let myLibrary = []

class Book {
    constructor(title,author,pages,read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }

    set title(value){
        this._title = value
    }

    set author(value){
        this._author = value
    }

    set pages(value){
        this._pages = value
    }

    set read(value){
        this._read = value
    }

    get title(){
        return this._title
    }

    get author(){
        return this._author
    }

    get pages(){
        return this._pages
    }

    get read(){
        return this._read
    }

    info(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "not read yet" : "read"}`
    }

    toggleRead(){
        this.read = this.read ? false : true
    }
}

const addToLibrary = (book) => {
    myLibrary.push(book)
}

const fetchBookDetail = () => {

    const title = document.querySelector('.title-input').value
    const author = document.querySelector('.author-input').value
    const pages = document.querySelector('.pages-input').value
    const read = document.querySelector('.read-input').checked

    // return new book object
    return new Book(title, author, +pages, read)
}

const addBookToLibrary = (book) => {
    myLibrary.push(book)
}

const createBookDiv = (book, index) => {
    const bookDiv = document.createElement('div')
    const title = document.createElement('p')
    const titleSpan = document.createElement('span')
    const authorSpan = document.createElement('span')
    const pagesSpan = document.createElement('span')
    const readSpan = document.createElement('span')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const read = document.createElement('p')

    const buttonDiv = document.createElement('div')
    const toggleButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    titleSpan.appendChild(document.createTextNode(`${book.title}`))
    authorSpan.appendChild(document.createTextNode(`${book.author}`))
    pagesSpan.appendChild(document.createTextNode(`${book.pages}`))
    readSpan.appendChild(document.createTextNode(`${book.read ? "Yes" : "No"}`))
    title.appendChild(document.createTextNode('Book Title: '))
    title.appendChild(titleSpan)
    author.appendChild(document.createTextNode('Book Author: '))
    author.appendChild(authorSpan)
    pages.appendChild(document.createTextNode('Number of Pages: '))
    pages.appendChild(pagesSpan)
    read.appendChild(document.createTextNode('Book read: '))
    read.appendChild(readSpan)

    toggleButton.innerHTML = "Read Book?"
    deleteButton.innerHTML = "Delete Book"
    toggleButton.setAttribute('data-id', `${index}`)
    deleteButton.setAttribute('data-id', `${index}`)
    toggleButton.classList.add('toggle-button')
    deleteButton.classList.add('delete-button')
    titleSpan.classList.add('title-text')
    authorSpan.classList.add('author-text')
    pagesSpan.classList.add('pages-text')
    readSpan.classList.add('read-text')
    buttonDiv.appendChild(toggleButton)
    buttonDiv.appendChild(deleteButton)
    bookDiv.appendChild(title)
    bookDiv.appendChild(author)
    bookDiv.appendChild(pages)
    bookDiv.appendChild(read)
    bookDiv.appendChild(buttonDiv)

    bookDiv.classList.add('book')

    return bookDiv
}

const displayBooks = (library) => {
    const booksContainer = document.querySelector('.books-container')
    // ensures that a book is not displayed more than once
    booksContainer.innerHTML = ""
    if (booksContainer.style.display === "") {
        booksContainer.style.display = "block"
    }
    library.forEach((book, index) => {
        const bookDiv = createBookDiv(book, index)
        booksContainer.appendChild(bookDiv)
    })
}

const addButton = document.querySelector('.add-button')
addButton.addEventListener('click', () => {
    const book = fetchBookDetail()
    if (book.title !== "" && book.author !== "" && book.pages !== "") {
        document.querySelector('.form-container').reset()
        addBookToLibrary(book)
        displayBooks(myLibrary)
    }
})


const observer = new MutationObserver((mutations, obs) => {
    const toggleButtons = Array.from(document.querySelectorAll('.toggle-button'))
    const deleteButtons = Array.from(document.querySelectorAll('.delete-button'))
    if (toggleButtons.length > 0) {

        toggleButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.getAttribute('data-id'))
                myLibrary[index].toggleRead()
                displayBooks(myLibrary)
            })
        })

        deleteButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.getAttribute('data-id'))
                myLibrary.splice(index, index + 1)
                displayBooks(myLibrary)
                if (myLibrary.length === 0) {
                    const booksContainer = document.querySelector('.books-container')
                    booksContainer.style.display = ''
                }
            })
        })
    }
})

observer.observe(document, {
    childList: true,
    subtree: true
})





