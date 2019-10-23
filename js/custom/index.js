

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("intro-section-background").style = images[x];
}

// function displayPreviousImage() {
//     x = (x <= 0) ? images.length - 1 : x - 1;
//     document.getElementById("img").src = images[x];
// }

function startTimer() {
    setInterval(displayNextImage, 10000);
}

var images = [], x = -1;
images[0] = "src/images/sea_1.png";
images[1] = "src/images/sea_2.png";
images[2] = "src/images/sea_3.png";
images[3] = "src/images/sea_4.png";
images[4] = "src/images/sea_5.png";
images[5] = "src/images/sea_6.png";
images[6] = "src/images/sea_7.png";
images[7] = "src/images/sea_8.png";
