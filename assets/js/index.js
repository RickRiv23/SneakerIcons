function playAudio(e) {
    let audio = this.dataset.audio;
    if (audio) {
        let player = new Audio(audio);
        player.play();
        // this.addEventListener("mouseleave", function(player) {
        //   player.end();
        // });
    }
};
function selectRandom(e) {
    e.preventDefault;
    const randNum = Math.floor(Math.random() * 3) + 1,
        selectImage = document.getElementById(randNum).src,
        mainImage = document.getElementById("main-image");
    if (selectImage == mainImage.style.backgroundImage) {
    } else {
        mainImage.style.backgroundImage = selectImage;
    }
    console.log(selectImage);
}

selectRandom();