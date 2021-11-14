function comment()
{
    var my_comment = document.getElementById('comments');
    my_comment.innerHTML = "<textarea id='user_comment'> </textarea> <button onclick='add_comment()'>Post Comment</button>";
}

function add_comment()
{
    let user_comment = document.getElementById('user_comment');
    let comment_list = document.getElementById('comment_list');
    comment_list.innerHTML += "<p>"
    comment_list.innerHTML += user_comment.value;
    comment_list.innerHTML += "</p>"
    user_comment.value = "";
}

function r_comment()
{
    var comment = document.getElementById('reply_comment');
    reply_comment.innerHTML = "<textarea id='reply_comment'> </textarea> <button onclick='reply_comment()'>Reply</button>";

}

function reply_comment()
{
    var reply_comment = document.getElementById('reply_comment');
    var text_area = document.getElementById('comment_list');
    reply_comment.innerHTML += "<p>"
    reply_comment.innerHTML += reply_comment.value;
    reply_comment.innerHTML += "</p>"
    reply_comment.value = "";
}