
function renderBooklist() {
    bookList.innerHTML = "";
    for (let index = 0; index < books.length; index++) {
        let currentBook = books[index];

        bookList.innerHTML += getBooksTemplate(currentBook, index);
    }
}

function renderComments() {
    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        let currentBook = books[bookIndex];
        let commentsRef = document.getElementById(`comments_container_${bookIndex}`);
        commentsRef.innerHTML = "";

        if (commentsRef) {
            for (let commentIndex = 0; commentIndex < currentBook.comments.length; commentIndex++) {
                let comment =currentBook.comments[commentIndex];
                commentsRef.innerHTML += getCommentsTemplate(comment);

            }

        }
    }

}


function renderLikes() {
    for (let index = 0; index < books.length; index++) {
        let currentBook = books[index];
        let likesRef = document.getElementById(`likes_${index}`);
            likesRef.innerHTML = "";
            likesRef.innerText = currentBook.likes;
        
    }
}



