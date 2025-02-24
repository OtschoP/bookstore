
function saveLikes() {
    for (let index = 0; index < books.length; index++) {
        let likeData = {
            likes: books[index].likes,
            liked: books[index].liked
        };
        
        //let currentBook = books[index];
        localStorage.setItem(`likes_${index}`, JSON.stringify(likeData));

    }
}

function getLikes() {
    for (let index = 0; index < books.length; index++) {
        let storedLikes = JSON.parse(localStorage.getItem(`likes_${index}`));
        
        if (storedLikes !== null) {
            books[index].likes = storedLikes.likes;
            books[index].liked = storedLikes.liked; 
        } else {
            books[index].likes = 0;
            books[index].liked = false;
        }

        let likesElement = document.getElementById(`likes_${index}`);
        if (likesElement) {
            likesElement.innerHTML = `<b>Likes: </b>${books[index].likes}`;
        }
        let likeButton = document.getElementById(`like_button_${index}`);
        if (likeButton) {
            if (books[index].liked) {
                likeButton.classList.add("green"); // Falls liked = true, grüne Klasse hinzufügen
            } else {
                likeButton.classList.remove("green"); // Falls liked = false, grüne Klasse entfernen
            }
        }

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