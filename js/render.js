function renderBooklist() {
    books.forEach((book, index) => { bookList.innerHTML += getBooksTemplate(book, index) })
}

function renderComments() {
    books.forEach((book, index) => {
        let commentsRef = document.getElementById(`comments_container_${index}`);


        if (commentsRef) {
            book.comments.forEach(comment => {
                commentsRef.innerHTML += getCommentsTemplate(comment);
            });
        }
    });

}

