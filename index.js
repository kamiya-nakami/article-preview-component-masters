const share = document.getElementById('share');
const shareCover = document.getElementById('share-cover');
const buttonShare = document.getElementById('button-share')

share.addEventListener('click' , () => {
    buttonShare.classList.toggle("on")
    shareCover.classList.toggle("on")

})
