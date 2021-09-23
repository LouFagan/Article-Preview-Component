const shareBtn = document.getElementById('share-btn');

shareBtn.addEventListener("click", () => {
    document.getElementById('share-btn').classList.toggle('active');
    document.getElementById('share-btn').classList.add('animationArrow');
    document.getElementsByClassName('svgElem')[0].classList.toggle('active');
    document.getElementsByClassName('svgElem1')[0].classList.toggle('active');
    document.getElementById('bkBtn').classList.toggle('active');


    if (document.getElementById("shareWindow").style.display == "flex") {
        document.getElementById("shareWindow").style.display = "none";
    } else {
        document.getElementById("shareWindow").style.display = "flex"
    }

    if (document.getElementById('share-btn').classList.contains('active')) {
        document.getElementById('share-btn').classList.add('animate-grow')
    } else {
        document.getElementById('share-btn').classList.remove('animate-grow')
    }
});


bkBtn.addEventListener('click', goBack);

function goBack(e) {
    document.getElementById("shareWindow").style.display = "none";
    document.getElementById('share-btn').classList.remove('active');
    document.getElementById('bkBtn').classList.remove('active');
}