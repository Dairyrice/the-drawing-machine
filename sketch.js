let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;
let sel;
let am;
let sp;
let fr;
let ch;
let vi;
let jp;
let kr;
let ge;
let ru;
let po;
let fi;
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
  am = loadImage('assets/flag_1.png');
  sp = loadImage('assets/flag_2.png');
  fr = loadImage('assets/flag_3.png');
  ch = loadImage('assets/flag_4.png');
  vi = loadImage('assets/flag_5.png');
  jp = loadImage('assets/flag_6.png');
  kr = loadImage('assets/flag_7.png');
  ge = loadImage('assets/flag_8.png');
  ru = loadImage('assets/flag_9.png');
  po = loadImage('assets/flag_10.png');
  fi = loadImage('assets/flag_11.png');

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
  background(am);
text(`${languages[0].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Spanish'){
background(sp);
text(`${languages[1].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'French'){
  background(fr);
text(`${languages[2].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Chinese'){
  background(ch);
text(`${languages[3].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Vietnamese'){
  background(vi);
text(`${languages[4].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Japanese'){
  background(jp);
text(`${languages[5].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Korean'){
  background(kr);
text(`${languages[6].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'German'){
  background(ge);
text(`${languages[7].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Russian'){
  background(ru);
text(`${languages[8].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Portuguese'){
  background(po);
text(`${languages[9].name}`, mouseX, mouseY, pmouseX, pmouseY);
}
else if (item === 'Filipino'){
  background(fi);
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

function drawGrid(){
numCells = 20;
fillColor = 255;

for (let i = 0; i<= width; i += width / numCells){
  for (let j = 0; j <= height; j += height / numCells){
    if (fillColor === 255){
      fillColor = 200;
    } else {
      fillColor = 255;
    }
    fill(fillColor);
    rect(i, j, width / numCells, height / numCells);
  }
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
