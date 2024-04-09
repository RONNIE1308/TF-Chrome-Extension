console.log("Popup Opened!");
document.addEventListener('DOMContentLoaded', function () {
    const imgButton = document.querySelector('img');
    const paragraph = document.querySelector('p');
    const replyBox = document.querySelector('#write');

    imgButton.addEventListener('click', function () {
        const text = paragraph.textContent;
        alert(text);
        replyBox.value = text;
    });
});
