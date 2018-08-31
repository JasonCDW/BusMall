let carImageArray = [];

// let img1 = document.getElementById('image1');
// let img2 = document.getElementById('image2');
// let img3 = document.getElementById('image3');
let elImageContainer = document.getElementById('image-container');


let CarImage = function(modelOfCar, makeOfCar, filePath, id) {
    this.model = modelOfCar;
    this.make = makeOfCar;
    this.filePath = filePath;
    this.id = id;
    this.clicked = 0;
    this.shown = 0;
    this.addClicks;
};

let Pista = new CarImage("488 Pista", "Ferrari", "./assets/488pista.jpg", 'pista');
let AventadorSVJ = new CarImage("Aventador SVJ", "Ferrari", "./assets/aventadorSVJ.jpg", 'aventador');
let Divo = new CarImage("Divo", "Bugatti", "./assets/divo.jpg", 'divo');
let Roadster = new CarImage("Roadster", "Tesla", "./assets/roadster2020.jpg", 'roadster');
let AstroGlobe = new CarImage("None", "None", "./assets/Globe-New.gif", 'astroglobe');

carImageArray.push(Pista, AventadorSVJ, Divo, Roadster, AstroGlobe);

function randomImage() {
    let randomNumber = Math.floor(Math.random() * carImageArray.length);
    let imageIndex = carImageArray[randomNumber];
    return imageIndex;
};

let firstImage;
let secondImage;
let thirdImage;

function displayImages() {
    elImageContainer.innerHTML = '';
    for(let i =0; i < 3; i++) {
        let imageObject = randomImage();
        if(i === 0) {
            firstImage = imageObject;
        } else if(i === 1) {
            while(imageObject.id === firstImage.id) {
                imageObject = randomImage();
            }
            secondImage = imageObject;
        } else {
            while(imageObject.id === firstImage.id || imageObject.id === secondImage.id) {
                imageObject = randomImage();
            }
            thirdImage = imageObject;
        }
        let elImage = document.createElement('img');
        elImageContainer.appendChild(elImage);
        elImage.setAttribute('id', imageObject.id);
        elImage.src = imageObject.filePath;
        elImage.addEventListener('click', imageClicked);
        imageObject.shown += 1;
    }
}


displayImages();

function imageClicked (event) {
    if(event.target.id === firstImage.id){
        firstImage.clicked += 1;
    } else if(event.target.id === secondImage.id){
        secondImage.clicked += 1;
    } else if(event.target.id === thirdImage.id){
        thirdImage.clicked += 1;
    }
    displayImages();
};

// img1.addEventListener('click', imageClicked);

// console.log('first image shown', firstImage.shown);
// console.log('second image shown', secondImage.shown);
// console.log('third image shown', thirdImage.shown);
