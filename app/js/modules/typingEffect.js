var i = 0;
var txt = 'Hey, coucou !';
var speed = 50;

document.querySelector('.ia-dialog button').addEventListener('click', function(){
    typeWriter();
})

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".ia-dialog--content").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}