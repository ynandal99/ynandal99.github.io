var i = 0;

var txt = `"When you cut against the grain of the wood, much strength is needed. When you program against the grain of the problem, 
much code is needed."                                                             -Master Yuan-Ma, The Book of Programming`;

var speed = 10;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

typeWriter();
