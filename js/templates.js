
function getBooksTemplate(book, index){
    return`
    <div class="book">
    <h2>${book.name}</h2>
    <p><b>Autor:</b> ${book.author}</p>
    <p class="likes"><b>Likes: </b>${book.likes}</p>
    <p><b>Preis: </b>${book.price} €</p>
    <p><b>Veröffentlicht: </b>${book.publishedYear}</p>
    <p><b>Genre: </b>${book.genre}</p>
    <div id="comments_container_${index}">
    <h3>Kommentare</h3>
    <input id="comment_input_${index}"  placeholder="Kommentar"></input><input id="commentName_input_${index}"  placeholder="Dein Name"></input><button onclick="addComment()">kommentieren</button>
    </div>
    </div>
    `};

    function getCommentsTemplate(comment){
        return `
        <p><b>Name:</b> ${comment.name};
        <p><b>Kommentar:</b> ${comment.comment}

        `


    }
;