function saveLikes(){
    books.forEach((book, index) => {
        localStorage.setItem(`likes_${index}`, JSON.stringify(book.likes));
    })
}