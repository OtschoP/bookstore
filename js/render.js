
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
                let comment = currentBook.comments[commentIndex];
                commentsRef.innerHTML += getCommentsTemplate(comment);

            }

        }
    }

}


function renderLikes(index) {
    let likesElement = document.getElementById(`likes_${index}`);
    if (likesElement) {
        likesElement.innerHTML = getLikesTemplate(index);   
    }
    let likeButton = document.getElementById(`like_button_${index}`);
    if (likeButton) {
        if (books[index].liked) {
            likeButton.classList.add("green"); // Falls liked = true, grüne Klasse hinzufügen
        } else {
            likeButton.classList.remove("green"); // Falls liked = false, grüne Klasse entfernen
        }
    }
    let likeHeart = document.getElementById(`heart_${index}`);
    if (likeHeart) {
        if (books[index].liked) {
            likeHeart.innerHTML = heartRedTemplate(index);
        }
        else {
            likeHeart.innerHTML = heartBlackTemplate(index);
        }
    }
}


