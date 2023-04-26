const banner = document.querySelector(".banner__image");
const img = document.querySelectorAll(".banner__image img");

let index = 0;

const carousel = () => {
    index++

    if(index > img.length -1) {
        index = 0;
    }

    // console.log(img)

    banner.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(carousel, 3000);