'use script';

var i, j, k;

function pictureGen(picture, name, fileName) {
  this.pictureNum = picture;
  this.name = name;
  this.img = fileName;
  this.clicks = 0;
  this.timesDisplayed = 0;
}
var ImagesInSecondToLastScreen = [];
var ImagesOnLastScreen = [];
var ImagesOnScreen = [];
var nextImage = [];
var imagesForHtml = [
  new pictureGen(1, 'bag', './bag.jpg'),
  new pictureGen(2, 'banana', './banana.jpg'),
  new pictureGen(3, 'bathroom', './bathroom.jpg'),
  new pictureGen(5, 'boots', './boots.jpg'),
  new pictureGen(6, 'breakfast', './breakfast.jpg'),

  new pictureGen(7, 'bubblegum', './bubblegum.jpg'),
  new pictureGen(8, 'chair', './chair.jpg'),
  new pictureGen(9, 'cthulhu', './cthulhu.jpg'),
  new pictureGen(10, 'dog-duck', './dog-duck.jpg'),
  new pictureGen(11, 'dragon', './dragon.jpg'),

  new pictureGen(12, 'pen', './pen.jpg'),
  new pictureGen(13, 'pet-sweep', './pet-sweep.jpg'),
  new pictureGen(14, 'scissors', './scissors.jpg'),
  new pictureGen(15, 'shark', './shark.jpg'),
  new pictureGen(16, 'sweep', './sweep.png'),

  new pictureGen(17, 'tauntaun', './tauntaun.jpg'),
  new pictureGen(18, 'unicorn', './unicorn.jpg'),
  new pictureGen(19, 'usb', './usb.gif'),
  new pictureGen(20, 'water-can', './water-can.jpg'),
  new pictureGen(21, 'wine-glass', './wine-glass.jpg')
];
function randImg(){
  return Math.floor(Math.random()*(imagesForHtml.length));
}
function getThreeRandomImages(){
  imagesForHtml = imagesForHtml.concat(ImagesInSecondToLastScreen);
  ImagesInSecondToLastScreen = ImagesOnLastScreen;
  ImagesOnLastScreen = ImagesOnScreen;
  ImagesOnScreen = [];
  nextImage = imagesForHtml.splice(randImg(), 1);
  ImagesOnScreen =ImagesOnScreen.concat(nextImage);
  nextImage = imagesForHtml.splice(randImg(), 1);
  ImagesOnScreen =ImagesOnScreen.concat(nextImage);
  nextImage = imagesForHtml.splice(randImg(), 1);
  ImagesOnScreen =ImagesOnScreen.concat(nextImage);
  return ImagesOnScreen;
}
pictureGen.prototype.AddTimesDisplayed = function () {
  return this.timesDisplayed++;
};

getThreeRandomImages();
function newRandom(){

  var threeOnScreen;
  i = 0;
  threeOnScreen=document.getElementById('app');
  threeOnScreen.textContent ='';
  for (i = 0; i < 3; i++){
    var newImage = new  Image(300, 300);
    newImage.src = ImagesOnScreen[i].img;
    threeOnScreen.appendChild(newImage);
    ImagesOnScreen[i].AddTimesDisplayed();
    getThreeRandomImages();
  }
  return threeOnScreen;
}
newRandom();




// }
// function tripleGen(){
//   i=randImg();
//   j=randImg();
//   k=randImg();
//   for (j; j == !i; j){
//     j=randImg();
//     for(k;k == !i||k==!j||j==!i; k){
//       k=randImg();
//
//     return i,j,k;
//   }
// }
