
function saveLikes() {
    for (let index = 0; index < books.length; index++) {
        let likeData = {
            likes: books[index].likes,
            liked: books[index].liked
        };

        localStorage.setItem(`likes_${index}`, JSON.stringify(likeData));

    }
}

function getLikes(index) {
    for (let index = 0; index < books.length; index++) {
        let storedLikes = JSON.parse(localStorage.getItem(`likes_${index}`));

        if (storedLikes !== null) {
            books[index].likes = storedLikes.likes;
            books[index].liked = storedLikes.liked;
        } else {

        }

        renderLikes(index);

    }
}

function saveComments() {
    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        let currentBook = books[bookIndex];
        let commentsData = [];

        for (let commentsIndex = 0; commentsIndex < currentBook.comments.length; commentsIndex++) {
            let comment = currentBook.comments[commentsIndex];
            commentsData.push(comment);
        }

        localStorage.setItem(`comments_${bookIndex}`, JSON.stringify(commentsData));

    }
}

function getComments() {
    for (let index = 0; index < books.length; index++) {
        let storedComments = JSON.parse(localStorage.getItem(`comments_${index}`));

        if (storedComments !== null) {
            books[index].comments = storedComments;
        }
        else {

        }
        renderComments(index);
    }
}