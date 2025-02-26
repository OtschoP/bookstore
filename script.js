

let bookList = document.getElementById('booklist');



function init() {
    renderAll();
    saveComments();
    
}

function renderAll() {
    renderBooklist();
    getLikes();
    getComments();
}

function addComment(index) {

    let commentsInputRef = document.getElementById(`comment_input_${index}`);
    let commentsNameRef = document.getElementById(`commentName_input_${index}`)
    if (commentsInputRef.value == "" || commentsNameRef.value == "") {
        alert('bitte beide Felder ausfüllen');
    }
    else {
        books[index].comments.push({ name: commentsNameRef.value, comment: commentsInputRef.value });
        renderComments();
        commentsInputRef.value = "";
        commentsNameRef.value = "";
    }
    saveComments();
    getComments();
    
}

function toggleLike(index) {
    let isLiked = books[index].liked;
    if (isLiked == true) {
        books[index].likes--;
        books[index].liked = false;

    }
    else {
        books[index].likes++
        books[index].liked = true;
    }
    saveLikes();
    getLikes();
    //renderAll();  
}

