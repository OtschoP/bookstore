
function getBooksTemplate(book, index){

    return`
    <div class="book">
    <img class="banner" src="./img/bookstore_background.jpg">
    <div class="margin-left">
    <h2>${book.name}</h2>
    <p><b>Autor:</b> ${book.author}</p>
    <div class="like_container">
        <p id="likes_${index}"><b>Likes: </b>${book.likes}</p>
       <!-- <button id="like_button_${index}" class="like_button_class" onclick="toggleLike(${index})">like</button>-->
        <div id="heart_${index}"></div>
    </div>
    <p><b>Preis: </b>${book.price} €</p>
    <p><b>Veröffentlicht: </b>${book.publishedYear}</p>
    <p><b>Genre: </b>${book.genre}</p>
    <h3>Kommentare</h3>
    <div class="input_container">
        <input id="comment_input_${index}"  placeholder="Kommentar"></input><input id="commentName_input_${index}"  placeholder="Dein Name"></input>
        <button onclick="addComment(${index})">kommentieren</button>
    </div>
    <div class="comments_container">
        <div id="comments_container_${index}">
    </div>
    
    </div>
    </div>
    </div>
    `};

    function getCommentsTemplate(comment){
        return `
        <p><b>Name:</b> ${comment.name}</p>
        <p><b>Kommentar:</b> ${comment.comment}</p>
        `
    };

    function getLikesTemplate(index){
        if (!books[index]) {
            console.error(`Fehler: books[${index}] ist undefined!`);
            return `<b>Likes: </b>Fehler`;
        }
        return `<b>Likes: </b>${books[index].likes}`;
    }
    

    function heartBlackTemplate(index) {
       return  `<img class="heart_black" src="./img/heart_black.png" onclick="toggleLike(${index})" alt=""></img>`
    }
    
    function heartRedTemplate(index) {
        return `<img class="heart_red" src="./img/heart_red.png" onclick="toggleLike(${index})" alt=""></img>`
    }