var randonNumber1 = Math.floor(Math.random()*6)+1;
let imageName1 = "dice" + randonNumber1 + ".png";
let imagesrc1 = "images/"+imageName1;
 document.querySelectorAll("img")[0].setAttribute("src",imagesrc1);

var randonNumber2 = Math.floor(Math.random()*6)+1;
let imageName2 = "dice" + randonNumber2 + ".png";
let imagesrc2 = "images/"+imageName2;
 document.querySelectorAll("img")[1].setAttribute("src",imagesrc2);

 console.log(randonNumber1);
 console.log(randonNumber2);
 
 if(randonNumber1>randonNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins";
}
else{
     document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins";
 }
 

