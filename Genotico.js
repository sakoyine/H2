class Genotipo{
constructor(){
}
//alelo; Gender; data; arrayGenotipo
genotipo(G,g,P,GT){if(GT==undefined){GT={}}
//A
if(G["A"]!=undefined){
fill((G["A"][0]=="A"?"green":"white"));
if(g=="W"){circle(P[0],P[1],(P[3]+P[2]/P[3]))}
if(g=="H"){rect(P[0]-P[2]*3/8,P[1]-P[3]*3/8,P[2]*3/4,P[3]*3/4)}
}

//B
if(G["B"]!=undefined){
push();stroke("red")
var b=(G["B"][0]=="B"?(1):(-1))
if(g=="H"){line(P[0]+P[2]*3/8*b,P[1]+P[3]*3/8,P[0]-P[2]*3/8*b,P[1]-P[3]*3/8)}
if(g=="W"){
line(P[0]+(P[3]+P[2]/P[3])*Math.sqrt(2)/4*b,P[1]+(P[3]+P[2]/P[3])*Math.sqrt(2)/4,P[0]-(P[3]+P[2]/P[3])*Math.sqrt(2)/4*b,P[1]-(P[3]+P[2]/P[3])*Math.sqrt(2)/4)
}
pop()}

//C
if(G["C"]!=undefined){
if(GT["C"]==undefined&&G["C"][0]=="c"){var buble=function*(){
var X,Y,D,r=(g=="W"?(P[3]+P[2]/P[3]):(P[2]>P[3]?P[2]:P[3]))/10
while(true){
var L=(g=="W"?((P[3]+P[2]/P[3])/2):(Math.sqrt(Math.pow(P[2],2)+Math.pow(P[3],2))/2))
X=random(P[0]-P[2]/2,P[0]+P[2]/2),Y=random(P[1]-P[3]/2,P[1]+P[3]/2)
D=Math.sqrt(Math.pow(X-P[0],2)+Math.pow(Y-P[1],2))
if(L-D>=L/5){
if(g!="W"){if(P[0]-P[2]/2<X&&X<P[0]+P[2]/2&&P[1]-P[3]/2<Y&&Y<P[1]+P[3]/2){r=(L-D)/2;break}}
if(g=="W"){if(D<L){r=(L-D)/2;break}}}
}
while(true){push();fill("blue");ellipse(X,Y,r);line(X,Y,P[0],P[1]);pop();yield X,Y,r}}
GT["C"]=[buble(),buble(),buble(),buble(),buble(),buble(),buble(),buble()]}
if(GT["C"]!=undefined){for(var gg in GT["C"]){GT["C"][gg].next()}}
}

return GT
}


testADOMAIN(G){
//Se dominante
//if(){}
//Se codominante
//if(){}
//Dominancia incompleta
//if(){}
}

A(x,a){//Cor
(g=="H"?(createFormGradient("RECT",[P[0]-P[2]*3/8,P[1]-P[3]*3/8,P[2]*3/4,P[3]*3/4],{"0":x[0],"1":x[1]},"X")):
(createFormGradient("ELLIPSE",[P[0],P[1],(P[3]+P[2]/P[3])],{"0":x[0],"1":x[1]})))
}

B(){//Manchas

}

C(){

}

D(){

}

E(){

}

F(){

}

G(){

}

H(){

}

I(){

}

J(){

}

K(){

}

L(){

}

M(){

}

N(){

}

O(){

}

P(){

}

Q(){

}

R(){

}

S(){

}

T(){

}

U(){

}

V(){

}

W(){

}

X(){

}

Y(){

}
Z(){

}


}