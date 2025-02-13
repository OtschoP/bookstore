
function getBooksTemplate(book, index){
    let buttonCLass = "";

    if (book.liked == true){
        buttonCLass = "green";
    }
    else {
        buttonClass = "";
    }


    return`
    <div class="book">
    <h2>${book.name}</h2>
    <p><b>Autor:</b> ${book.author}</p>
    <p id="likes_${index}"><b>Likes: </b>${book.likes}</p>
    <button id="like_button_${index}" class="${buttonCLass}" onclick="toggleLike(${index})">like</button>
    <p><b>Preis: </b>${book.price} €</p>
    <p><b>Veröffentlicht: </b>${book.publishedYear}</p>
    <p><b>Genre: </b>${book.genre}</p>
    <h3>Kommentare</h3>
    <input id="comment_input_${index}"  placeholder="Kommentar"></input><input id="commentName_input_${index}"  placeholder="Dein Name"></input>
    <button onclick="addComment(${index})">kommentieren</button>
    <div id="comments_container_${index}">
    
    </div>
    </div>
    `};

    function getCommentsTemplate(comment){
        return `
        <p><b>Name:</b> ${comment.name}</p>
        <p><b>Kommentar:</b> ${comment.comment}</p>
        `
    };

    