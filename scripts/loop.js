$(function(){

var picCount=0;  
var picArray= [
   'http://i.imgur.com/XC0nAIJ.jpg',
   'http://i.imgur.com/NQXdS6S.jpg',
   'http://i.imgur.com/7Yr2sIa.jpg'
];
nextPic();

function nextPic() { 
   picCount=(picCount+1<picArray.length) ? picCount+1 : 0;
   $("#HomeRooms img").prop('src', picArray[picCount]);
   setTimeout(function() {
       nextPic();},3000);
  }
});
