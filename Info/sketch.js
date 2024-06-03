var SER, G=[[0]], canvas

function preload() {

}

function VisImgs(X){console.log(X)
  var x=document.getElementById(X);
  x.style.display=(x.style.display=="none"?"unset":"none")
  }

function setup() {
canvas=createCanvas(500,500)
SER=new Ser("H",{}); SER.Adjust(0,0); SER.input.remove()
console.log(SER)
//this.form=(P=this.data,g=this.gender,A=this.alelo)=>{this.GT=this.genotipo(A,g,P,this.GT)}
//alelo; Gender; data; arrayGenotipo

var T_I=document.getElementById("TEXT/IMAGES")
for(var a in Object.keys(data)){createDandH(Object.keys(data)[a],a,T_I)}

for(var a in data){createImages(a+"_IMAGES",Object.keys(data[a]))}

for(var a in data){background(220)
  for(var b in data[a]){
    SER.alelo[a]=[b,b]
    SER.form()

    var AA=document.getElementById("IMAGE_"+b)
    AA.src=canvas.canvas.toDataURL('images/jpg')
  }
SER.alelo={}
}
}

function draw() {
//background(200)
  
//drawSprites()
}

function keyPressed() {

}


function createTI(t,i,b){console.log(t);console.log(i);console.log(b)
  var FOR=function(X,Y,Z,O){for(var a in X){if(X[a]==Y){continue}; 
   if(X[a]==Z){for(var aa in X[a]){O[a][aa]=X[a][aa]};continue}; O[a]=X[a]}}
      
  var T=new Text(t["text"]); FOR(t,"text",undefined,T)
  var I=new Image(); FOR(i,undefined,"style",I)
  var B=document.createElement("BUTTON"); FOR(b,undefined,"style",B)
  B.addEventListener("click",function(II=I){
  })
      
  document.body.appendChild(T); document.body.appendChild(I); document.body.appendChild(B)
  console.log(I)
  }

function A(){
background("red")
fill("blue")
ellipse(200,200,100,100)
fill("green");stroke("yellow")
rect(175,175,50)
if(I==0){var AA=document.getElementById("B")
AA.href=canvas.canvas.toDataURL('image/jpg'); AA.download="FORMAS";I=1}
}

function B(){console.log("B")
var ctx=document.getElementById("canvas").getContext("2d")
ctx.fillStyle = "red"; 
ctx.arc(100,100,100,0,Math.PI*2,false)
ctx.fill()
ctx.stroke()

ctx.beginPath()
ctx.fillStyle = "blue"; 
ctx.arc(300,300,100,0,Math.PI*2,false)
ctx.fill()
ctx.stroke()

ctx.beginPath()
ctx.fillStyle = "yellow"; 
ctx.arc(300,100,100,0,Math.PI*2,false)
ctx.fill()
ctx.stroke()

ctx.beginPath()
ctx.fillStyle = "green"; 
ctx.arc(100,300,100,0,Math.PI*2,false)
ctx.fill()
ctx.stroke()

var image=document.getElementById("canvas").toDataURL('image/jpg')//png or jpg?
//document.getElementById("canvas").style.backgroundImage=image
console.log(image)
var AA=document.getElementById("A")
AA.href=image; AA.download="CORES"
}

/*
function createImageG(){
background("white")
var W_P={"X":0,"Y":0},H_P={"X":0,"Y":0}
var canvas=createCanvas(200,400)
for(){
//1°
//genotipo(G,g,P,GT)
if(I==0){var AA=document.getElementById("B")
//AA.href=canvas.canvas.toDataURL('image/jpg'); AA.download="FORMAS";I=1
createImages(X+"_IMAGES_UP")}
}

for(){
//2°
//genotipo(G,g,P,GT)
if(I==0){var AA=document.getElementById("B")
//AA.href=canvas.canvas.toDataURL('image/jpg'); AA.download="FORMAS";I=1
createImages()}
}
}*/

function createImages(D,t){
    var d=document.getElementById(D)
    for(var a in t){console.log("criou um"+a)
    var I=document.createElement("img")
    I.setAttribute("src", "https://picsum.photos/200/300.webp");
    I.setAttribute("height", "100");I.setAttribute("width", "100");
    I.setAttribute("alt", t[a])
    I.setAttribute("title", t[a]);
    I.setAttribute("id", "IMAGE_"+t[a]);
    d.appendChild(I);
    }
    d.style.display="none"
    }

function createDandH(A,a,T_I){
var H=document.createElement('h2')
H.append(relação[a])
H.setAttribute('id',A)
H.setAttribute('onclick',"VisImgs(this.id+'_IMAGES')")

var D=document.createElement('div')
D.setAttribute('id',A+"_IMAGES")
D.setAttribute('style','display:none')

T_I.append(H)
T_I.append(D)
}