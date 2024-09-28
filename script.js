let likeCount = 0;
const likeBtn = document.getElementById('likeBtn');
const likeCountDisplay = document.getElementById('likeCount');
const commentInput = document.getElementById('commentInput');
const addCommentBtn = document.getElementById('addCommentBtn');
const commentList = document.getElementById('commentList');

likeBtn.addEventListener('click', () => {
    likeCount++;
    likeCountDisplay.textContent = likeCount;
});

addCommentBtn.addEventListener('click', () => {
    const comment = commentInput.value;
    if (comment) {
        const li = document.createElement('li');
        li.textContent = comment;
        commentList.appendChild(li);
        commentInput.value = '';
    }
});
