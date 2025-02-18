
function saveLikes(){
    books.forEach((book, index) => {
        localStorage.setItem(`likes_${index}`, JSON.stringify(book.likes));
    })
}

function saveCommentsName(){
    books.forEach((book, index) =>{
        localStorage.setItem(`comments_name_${index}`, JSON.stringify(book.comments.name));
    })
}