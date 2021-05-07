const imgSrc = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg"
];

const nextImg = document.querySelector('#next-icon');
const prevImg = document.querySelector('#prev-icon');
const imgBox = document.querySelector('.current-box');
const pathOfImgs = "file:///E:/Portfolio/HTML%20CSS%20Course/ResponsiveImages/pics/";
const pathOfLastItem = `${pathOfImgs}${imgSrc[imgSrc.length - 1]}`;
let indexOfChangingItem = 0;
const changingItem = document.querySelector('#slideshow-item');

nextImg.addEventListener("click", () => {

    imgSrc.forEach((currentImg, indexOfImg) => {

        const currentImgPath = `${pathOfImgs}${imgSrc[indexOfImg]}`;

        if (currentImgPath == changingItem.src && (indexOfImg <= imgSrc.length - 1)) {

            indexOfChangingItem = indexOfImg;
        }
        if (indexOfChangingItem === imgSrc.length - 1) {

            indexOfChangingItem = 0;
        }

    });

    changingItem.src = `${pathOfImgs}${imgSrc[indexOfChangingItem + 1]}`;

});


prevImg.addEventListener("click", () => {

    imgSrc.forEach((currentImg, indexOfImg) => {

        const currentImgPath = `${pathOfImgs}${imgSrc[indexOfImg]}`;

        if (currentImgPath == changingItem.src && (indexOfImg >= 0)) {

            indexOfChangingItem = indexOfImg;
        }
        if (indexOfChangingItem === 0) {

            indexOfChangingItem = imgSrc.length;
        }

    });

    console.log(indexOfChangingItem);

    changingItem.src = `${pathOfImgs}${imgSrc[indexOfChangingItem - 1]}`;

});





