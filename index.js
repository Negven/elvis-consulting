const srcBigScreenPattern = "img/leaders/leaders";
const srcSmallScreenPattern = "img/leaders/mobile/leaders";
const imgLeadersArray = [...document.querySelector(".leaders__line").children];
const imgGallery = document.querySelector(".gallery__container");
const mobileWidth = 800;
const mobileGalleryWidth = 490;

function changeImgLeadersSrc(windowWidth){
    imgLeadersArray.forEach((img, index) => {
        const currentSrc = [
            windowWidth > mobileWidth ? srcBigScreenPattern : srcSmallScreenPattern,
            index + 1,
            windowWidth > mobileWidth ? ".png" : ".svg"].join("");
        if(!img.src.includes(currentSrc)) img.src = currentSrc;
    })
}

function changeGalleryWidth(windowWidth) {
    if(windowWidth < mobileGalleryWidth){
        imgGallery.style.marginLeft = (-(mobileGalleryWidth - windowWidth) / 2) + 'px'
    }
}

onload = () => {
    changeImgLeadersSrc(window.screen.width);
    changeGalleryWidth(window.screen.width)
}
onresize = () => {
    changeGalleryWidth(window.screen.width)
    changeImgLeadersSrc(window.screen.width);
}