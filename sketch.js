let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;
let sel;
let languages = [{name: "Thank you"},
                  {name: "Gracias"},
                  {name: "Merci"},
                  {name: "谢谢"},
                {name: "Cảm ơn"},
              {name: "ありがとう"},
            {name: "감사합니다"},
          {name: "Danke"},
        {name: "Спасибо"},
      {name: "Obrigada"},
    {name: "Salamat"},];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  sel = createSelect();
  sel.position(CENTER);
  sel.option('English');
  sel.option('Spanish');
  sel.option('French');
  sel.option('Chinese');
  sel.option('Vietnamese');
  sel.option('Japanese');
  sel.option('Korean');
  sel.option('German');
  sel.option('Russian');
  sel.option('Portuguese');
  sel.option('Filipino');
  sel.changed(mySelectEvent);


}

function mySelectEvent(){
let item = sel.value();

if (item === 'English'){
  background(255,255,255);
text(`${languages[0].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Spanish'){
background(0,255,0);
text(`${languages[1].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'French'){
  background(0,0,255);
text(`${languages[2].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Chinese'){
  background(255, 51, 51);
text(`${languages[3].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Vietnamese'){
  background(204, 0, 0);
text(`${languages[4].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Japanese'){
  background(255, 179, 179);
text(`${languages[5].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Korean'){
  background(51, 204, 255);
text(`${languages[6].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'German'){
  background(255, 255, 0);
text(`${languages[7].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Russian'){
  background(153, 51, 255);
text(`${languages[8].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Portuguese'){
  background(0, 153, 51);
text(`${languages[9].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Filipino'){
  background(153, 255, 255);
text(`${languages[10].name}`, mouseX, mouseY, pmouseX, pmouseY);
}

}


function draw() {

  // background(220, 5);
  fillColor = 255;
  strokeWeight(strokeWidth);
  textSize(30);


  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 100;




  if (mouseIsPressed ==true){
    mySelectEvent(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png' )
  } else if (key === 'c'){
    clear();
  }

  return false;
}
