// Ini File Javascript


// Slide Gambar Banner
let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner = indexBanner + 1;

    changeBackground();
}

function changeBackground() {
    let bannerList = document.getElementsByClassName('banner-image');
    
    if (indexBanner > bannerList.length; i++){
        // Reset indexBanner
        indexBanner = 0;
    }

    // Looping to change bckground
    for (let i = 0; i < bannerList.length; i++){
        bannerList[i].style.display = 'none';
    }

    bannerList[indexBanner].Style.display = 'block';
}

setInterval(nextBanner, 3000);
 