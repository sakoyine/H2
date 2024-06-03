var G=[[]], genes={}
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var resetButton, infoWindow, info, answerButton
//aswerButton serve para alternar entre responder todos os alelos de uma vez ou um por um

//document.querySelectorAll(".content").forEach(content=>content.classList.remove("show"))
//document.getElementById(tab.getAttribute("content-id")).classList.add("show")

function Alelos(L){//L=QuantosGenes
  for(var x=0;x<L;x+=1){
  var X=letters[x].toUpperCase(),R=random([2,3]);genes[X]={}
  for(var r=0;r<R;r+=1){
  genes[X][(r==0?(R==2?letters[x]:(X+(R-1))):(X+(r==R-1?"":r)))]=
  {"Dominância":Object.keys(genes[X]).length/*Math.floor(random(0,R))*/,"Penetrância":1}}
  //genes[letters[x].toUpperCase()]={"Dom":random([0,1,2]),"Pen":Number((1/random([1,2,3,4,5,6,7,8,9,10])).toFixed(2)),"Alelos":[letters[x].toUpperCase(),letters[x]]}
  }}

function preload() {Alelos(random(2,2));console.log(genes);info=genes;document.onkeydown = KeyPress}

function KeyPress(e){if(e.keyCode==90&&e.ctrlKey){//Ctrl+Z
(infoWindow==undefined?(infoWindow=window.open("./Info/index.html"),infoWindow.data=genes,infoWindow.relação=Data(),
infoWindow.addEventListener('load',function(){infoWindow.createTI({"text":infoWindow.data},{},{"innerHTML":"showImages"})},true)):
(infoWindow.close(),infoWindow=undefined))
window.focus()
}}


function setup() {
createCanvas(windowWidth, windowHeight)
resetButton = createButton("Reset").class("customButton").style('font-size',(width+height)/32+'px').size(width/4,height/16).position(width*3/8,height/108).mousePressed(()=>{if(infoWindow!=undefined){infoWindow.close()};window.location.reload()})

var N=Math.floor(random(2,9));console.log(N)
for(var a=1;a<=N;a+=1){G[0].push(new Ser((a%2==0?"W":"H"),createGenes(),{"married":[]}))
if(a%2==0||(N%2==1&&a==N)){Ser.Relation2(G[0][a-1],G[0][a-2],0)}}





for(var g=1;g<G.length;g+=1){
for(var gg=0;gg<G[g].length;gg+=1){if(G.length>=11||G[g].length>=12){break}
if(Object.keys(G[g][gg].family["married"])!=0){continue}
if(G[g][gg].tryMarriage2(g,gg)){gg=0}}}

for(var g in G){for(var gg in G[g]){G[g][gg].Adjust(Number(g),Number(gg))}}
console.log(G)
}

function draw() {
background(200);fill("black")
textSize(windowWidth/101)
text("Aperte Ctrl+Z para ver informações",textSize(), windowHeight/75)
 
for(var g in G){
for(var gg in G[g]){
if(G[g][gg].form!=undefined){G[g][gg].form()}
Relação2(G[g][gg])
}
}
  
//drawSprites()
}
function Relação2(X){
//Parceiro
var FF=X.family.married
for(var p in FF){
(FF[p].type=="normal"?line(X.data.X,X.data.Y,FF[p].Partner.data.X,FF[p].Partner.data.Y):
(line(X.data.X,X.data.Y+X.input.height,FF[p].Partner.data.X,FF[p].Partner.data.Y+X.input.height),
line(X.data.X,X.data.Y-X.input.height,FF[p].Partner.data.X,FF[p].Partner.data.Y-X.input.height)))
//Linhagem
for(var f in FF[p].child){
var c=FF[p].child[f]
var Mx=X.data.X+(FF[p].Partner.data.X-X.data.X)/2, My=X.data.Y+(c.data.Y-X.data.Y)/2
line(c.data.X,c.data.Y,c.data.X,My)//Child line up
line(c.data.X,My,Mx,My)//Child(line up) to middle
line(Mx,X.data.Y,Mx,My)//Parents to middle
}
}
}


function Data(){
var text=[]
Object.values(info).forEach((c)=>{var C=c
for(var a in C){C[a]["N"]=a}
C=Object.values(C).sort((a,b)=>{return b["Dominância"]-a["Dominância"]})
for(var cc=0;cc<C.length-1;cc+=1){if(cc==0){text.push(C[cc]["N"])}
text[text.length-1]+=(C[cc]["Dominância"]>C[cc+1]["Dominância"]?'>':'=')+C[cc+1]["N"]}
})
return text}


function createGenes(){var G=[]
for(var a in genes){var A1=random(Object.keys(genes[a])),A2=random(Object.keys(genes[a]));
G[a]=(genes[a][A1]["Dominância"]>=genes[a][A2]["Dominância"]?[A1,A2]:[A2,A1])}
return G}

function combineGenes(A,B){var G=[]
for(var a in genes){var A1=random(A[a]),A2=random(B[a])
G[a]=(genes[a][A1]["Dominância"]>=genes[a][A2]["Dominância"]?[A1,A2]:[A2,A1])}
return G}




//createGradient({"0":[0,0,255],"0.5":[128,255,128],"1":[255,0,0]},[550,0,"X",200,200],[function(X){return X},function(X){return X*2+10}],"LINEAR")
function createGradient(C_P,A,P,t){//Color/Position; [I, F, X||Y(varia)], functionsOfOpossite
  var V_A=A[1]-A[0]; for(var l=A[0];(V_A>0?(l<=A[1]):((-l)<=(-A[1])));l+=Math.sign(V_A)/2){
  push()
  var COLOR=passagem(C_P,[A[0],A[1]],l); stroke(COLOR);fill(COLOR)
  if(t=="LINEAR"){line((A[2]=="X"?(l):(P[0](l))),(A[2]=="Y"?(l):(P[0](l))),(A[2]=="X"?(l):(P[1](l))),(A[2]=="Y"?(l):(P[1](l))))}
  if(t=="CIRCLE"){ellipse(A[3],A[4],P[0](l),P[1](l))}
  pop()}}
  
  function passagem(C_P,T,A){//Consertar quando a soma das passagens é maior que 255 (tipo azul pra ciano, o 'blue' vai pra 510)
  var RGB=(X)=>{return "rgb("+X+")"}
  
  var Porcentage=(A-T[0])/(T[1]-T[0]), O_s=Object.keys(C_P).sort((a,b)=>a-b), C=O_s.find((E)=>E==Porcentage)
  if(C!=undefined){return RGB(C_P[C])}
  
  C=[Number(O_s.findLast((E)=>Number(E)<Porcentage)),Number(O_s.find((E)=>Number(E)>Porcentage))]
  C=C_P[C[0]].map((X,E)=>Number((X+(C_P[C[1]][E]-X)*(Porcentage-C[0])/(C[1]-C[0])).toFixed(0))) //C=C_P[C[0]].map((X,E)=>Number((X*(V>0.5?2*(1-V):1)).toFixed(0))+Number((C_P[C[1]][E]*(V<0.5?1*(V*2):1)).toFixed(0)))
  return RGB(C)}
  
  
  function createFormGradient(t,D,colors,V,tt){//D=[X,Y,W,H]
  if(tt==undefined){tt="LINEAR"}; if(V==undefined){V="X"}
  if(t=="SPRITE"){if(!(Array.isArray(D))){D=[D.position.x,D.position.y,D.width,D.height]}
  createGradient(colors,[(V=="X"?(D[0]-D[2]/2):(D[1]-D[3]/2)),(V=="X"?(D[0]+D[2]/2):(D[1]+D[3]/2)),V],[function(X){return (V=="Y"?(D[0]-D[2]/2):(D[1]-D[3]/2))},function(X){return (V=="Y"?(D[0]+D[2]/2):(D[1]+D[3]/2))}],tt)}
  if(t=="ELLIPSE"){if(D[3]==undefined){D[3]=0};createGradient(colors,[(D[2]>D[3]?D[2]:D[3]),(D[2]<D[3]?D[2]:D[3]),V,D[0],D[1]],[(D[4]==undefined?function(X){return X}:D[4]),(D[5]==undefined?function(X){return X}:D[5])],tt)}
  if(t=="RECT"){createGradient(colors,[(V=="X"?(D[0]):(D[1])),(V=="X"?(D[0]+D[2]):(D[1]+D[3])),V],[(D[4]==undefined?function(X){return (V=="Y"?(D[0]):(D[1]))}:D[4]),(D[5]==undefined?function(X){return (V=="Y"?(D[0]+D[2]):(D[1]+D[3]))}:D[5])],tt)}
  }