'use script';

var i, j, k;

function pictureGen(picture, fileName) {
  var pictureNum = picture;
  var img = fileName;
  var clicks = clicks++;
}

var imagesForHtml = [
  new pictureGen(1, 'bag.jpg'),
  new pictureGen(2, 'banana.jpg'),
  new pictureGen(3, 'bathroom.jpg'),
  new pictureGen(5, 'boots.jpg'),
  new pictureGen(6, 'breakfast.jpg'),
  new pictureGen(7, 'bubblegum.jpg'),
  new pictureGen(8, 'chair.jpg'),
  new pictureGen(9, 'cthulhu.jpg'),
  new pictureGen(10, 'dog-duck.jpg'),
  new pictureGen(11, 'dragon.jpg'),
  new pictureGen(12, 'pen.jpg'),
  new pictureGen(13, 'pet-sweep.jpg'),
  new pictureGen(14, 'scissors.jpg'),
  new pictureGen(15, 'shark.jpg'),
  new pictureGen(16, 'sweep.jpg'),
  new pictureGen(17, 'tautaun.jpg'),
  new pictureGen(18, 'unicorn.jpg'),
  new pictureGen(19, 'usb.gif'),
  new pictureGen(20, 'water-can.jpg'),
  new pictureGen(21, 'wine-glass.jpg')
];

function randImg(){
  return Math.floor(Math.random()*imagesForHtml.length)+1;
}
function tripleGen(){
  i=randImg();
  j=randImg();
  k=randImg();
  for (j; j == !i; j){
    j=randImg();
    for(k;k == !i||k==!j||j==!i; k){
      k=randImg();

    return i,j,k;
  }
}
tripleGen();
console.log(i,j,k);
tripleGen();
console.log(i,j,k);
tripleGen();
console.log(i,j,k);
tripleGen();
console.log(i,j,k);
tripleGen();
console.log(i,j,k);
tripleGen();
console.log(i,j,k);
tripleGen();
console.log(i,j,k);
tripleGen();
console.log(i,j,k);
tripleGen();
console.log(i,j,k);
tripleGen();
console.log(i,j,k);
tripleGen();
console.log(i,j,k);
tripleGen();
