// Ini File Javascript

//user
const userGreeting = document.getElementById("user-greeting");

let userName =localStorage.getItem("userName");


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

    bannerList[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);
 