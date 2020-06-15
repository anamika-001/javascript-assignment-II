var x = document.getElementById("theBoxes");
x.addEventListener("click", myFunction)
function myFunction() {
  var box = document.createElement('div');
  box.classList.add('myDiv');
  document.body.appendChild(box); 
}
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }
//    var newColor = getRandomColor();
   function setRandomColor() {
    $("#theBoxes").css("background-color", getRandomColor());
}