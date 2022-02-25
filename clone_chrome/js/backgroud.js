let imgName = [];
let imageFile = "img";
for (let i=1;i<12;i++){
    let imageFiles = imageFile+i;
    imgName.push(imageFiles);
}

let randomNumber = Math.floor(Math.random() * imgName.length);
imgPath = './img/' + imgName[randomNumber] + '.jpg';
$('.img').children('img').attr('src', imgPath);