
function saveLikes(){
    books.forEach((book, index) => {
        localStorage.setItem(`likes_${index}`, JSON.stringify(book.likes));
    })
}
function getLikes(){
    books.forEach((book, index) => {
let storedLikes = localStorage.getItem(`likes_${index}`, JSON.parse(book.likes));
console.log(storedLikes);

})
}

function saveComments() {
    books.forEach((book, index) => {
        let commentsData = book.comments.map(comment => ({
            name: comment.name, 
            text: comment.comment
        }));
        localStorage.setItem(`comments_${index}`, JSON.stringify(commentsData));
    })
   
}