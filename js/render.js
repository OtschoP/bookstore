
function renderBooklist() {
    bookList.innerHTML = "";
    books.forEach((book, index) => { bookList.innerHTML += getBooksTemplate(book, index) })
}

function renderComments() {
    books.forEach((book, index) => {
        let commentsRef = document.getElementById(`comments_container_${index}`);
        commentsRef.innerHTML = "";
        if (commentsRef) {
            
            book.comments.forEach(comment => {
                commentsRef.innerHTML += getCommentsTemplate(comment);
            });
        }
    });
}


function renderLikes() {
    books.forEach((book, index) => {
    let likesRef = document.getElementById(`likes_${index}`);
    likesRef.innerHTML = "";
    likesRef.innerText = book.likes;
    })
}



