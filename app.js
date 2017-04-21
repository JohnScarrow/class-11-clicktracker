'use script';


var clicksRemaining = 5;
var app=document.getElementById('app');
var i, j, k, h;
var prevImage;
function pictureGen(picture, name, fileName) {
  this.pictureNum = picture;
  this.name = name;
  this.img = fileName;
  this.clicks = 0;
  this.timesDisplayed = 0;
}
var ImagesOnLastScreen = [];
var ImagesOnScreen = [];
var currImage =[];
// var toPush =[];
// var nextImage = [];
var busMallProducts = [
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

try {
  busMallProducts = JSON.parse(localStorage.busMallProducts);
} catch (error) {
  console.log(error);
}
//var imagesForHtml = busMallProducts;
function randImg(){
  return Math.floor(Math.random()*(busMallProducts.length));
}
function curPush() {
  i = randImg();
  j = randImg();
  k = randImg();

  while (i == j || i == k || j == k){
    i = randImg();
    j = randImg();
    k = randImg();
  }
  // while (j == i){
  //   j = randImg();
  // }
  // while (k == i && k == j)
  //   k = randImg();
}

function prevCheck(){
  for (h = 0; h < 3; h++){
    while (i == j || i == k || j == k || i == prevCheck[h] || j == prevCheck[h] || k == prevCheck[h]){
      curPush();

    }
  }
}

function getThreeRandomImages(){
  prevImage = currImage;
  currImage = [];
  curPush();
  prevCheck();
  // currImage.push();
  currImage.push(i);
  currImage.push(j);
  currImage.push(k);
  console.log('current ', currImage);
  console.log('previous ', prevImage);
  ImagesOnScreen.push(busMallProducts[i]);
  ImagesOnScreen.push(busMallProducts[j]);
  ImagesOnScreen.push(busMallProducts[k]);

}



  // imagesForHtml = imagesForHtml.concat(ImagesOnLastScreen);
  // ImagesOnLastScreen = ImagesOnScreen;
  // ImagesOnScreen = [];
  // nextImage = imagesForHtml.splice(randImg(), 1);
  // ImagesOnScreen =ImagesOnScreen.concat(nextImage);
  // nextImage = imagesForHtml.splice(randImg(), 1);
  // ImagesOnScreen =ImagesOnScreen.concat(nextImage);
  // nextImage = imagesForHtml.splice(randImg(), 1);
  // ImagesOnScreen =ImagesOnScreen.concat(nextImage);


//getThreeRandomImages();
renderPhotoChoices();
// function newRandom(){
//   clicksRemaining--;
//   i = 0;
//   app.textContent ='';
//   for (i = 0; i < 3; i++){
//     var newImage = new  Image(300, 300);
//     newImage.src = ImagesOnScreen[i].img;
//     newImage.setAttribute('img', i);
//     app.appendChild(newImage);
//     ImagesOnScreen[i].AddTimesDisplayed();
//     getThreeRandomImages();
//   }
//   return app;
// }
//newRandom();


function handleImageClick(event) {
  //
  console.log ('test');
  var choice = event.target;
  var photoIndex = choice.getAttribute('img');
  ImagesOnScreen[photoIndex].clicks++;
  console.log('Clicked', ImagesOnScreen[photoIndex]);


  clicksRemaining--;
  console.log('clicksRemaining', clicksRemaining);
  if (clicksRemaining > 0){
    renderPhotoChoices();
  }  else {
    reassembleChart();
  }
}

function renderPhotoChoices(){
  ImagesOnScreen = [];
  getThreeRandomImages();
  app.textContent = '';
  var imageElement;
  for(var i=0; i < ImagesOnScreen.length; i++){
    ImagesOnScreen[i].timesDisplayed++;
    imageElement = document.createElement('img');
    imageElement.src = ImagesOnScreen[i].img;
    imageElement.setAttribute('img', i);
    imageElement.addEventListener('click', handleImageClick);
    app.appendChild(imageElement);
  }
}


function reassembleChart(){
  // refill photos array
  // imagesForHtml = imagesForHtml.concat(ImagesOnScreen);
  // imagesForHtml = imagesForHtml.concat(ImagesOnLastScreen);

  app.textContent = '';

  var canvas = document.createElement('canvas');
  canvas.width = app.clientWidth;
  canvas.height = app.clientWidth;
  app.appendChild(canvas);

  var ctx = canvas.getContext('2d');

  var data = {
    labels: [],
    datasets: [
      {
        label: 'clicks',
        data: [],
        backgroundColor: [

          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [

          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: 'displayed',
        data: [],
        backgroundColor: [

          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [

          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
    ],
  };

  var currentPhoto;
  for(var i=0; i< busMallProducts.length; i++){
    currentPhoto = busMallProducts[i];
    data.labels.push(currentPhoto.name);
    data.datasets[0].data.push(currentPhoto.clicks);
    data.datasets[1].data.push(currentPhoto.timesDisplayed);
  }


  new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
  });
}
//busMallProducts = imagesForHtml;
try {
  console.log('busmall', busMallProducts);
  localStorage.busMallProducts = JSON.stringify(busMallProducts);
} catch (error) {
  console.log(error);
}

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
