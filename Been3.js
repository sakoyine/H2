class Ser{
    constructor(g,A,f,gg){
        this.G=G.length
        this.I=G[this.G-1].length
        this.alelo=A
        this.gender=g
        this.data=[]
        this.family=f


        this.form=(P=this.data,g=this.gender,A=this.alelo)=>{this.GT=this.genotipo(A,g,P,this.GT)}//alelo; Gender; data; arrayGenotipo
            
    }

    Adjust(Y,X){
    this.data={"X":(X+1)*width/(1+G[Y].length),"Y":(Y+1)*height/(1+G.length),"W":width/(2+G[Y].length),"H":height/(2+G.length)}

    this.input=createInput("").attribute("placeholder","").size(this.data.W/2,this.data.H/4).position(this.data.X-this.data.W/4,this.data.Y-this.data.H/8)
    this.input.elt.onchange=(X,A=this.alelo,V=this.input.value())=>{console.log(A);console.log(V)
    var t={},v=V.split(",");for(var a in genes){t[a]=v.shift()};console.log(t)
    for(var a in A){if(t[a]==A[a].join("")){this.input.remove()}}}
    }

    compare(A,B){
    if(B==undefined||A==undefined){return "normal"};
    if((A.P.G==B.P.G && A.P.I==B.P.I) && (A.M.G==B.M.G && A.M.I==B.M.I)){return "consanguíneo"}
    return "normal"}
    

static Relation2(A,B,AY,t){var Qd=random([1,2,3,4]); AY+=1
    if(G[AY]==undefined){G[AY]=[]}; if(t==undefined){t="normal"}
    var a=Object.keys(A.family.married).length, b=Object.keys(B.family.married).length
    A.family.married[a]={"Partner":B,"child":[],"type":t}
    B.family.married[b]={"Partner":A,"child":[],"type":t}

    for(var f=0;f<Qd;f+=1){
    var F=new Ser(random(["W","H"]),combineGenes(A.alelo,B.alelo),{"Parents":{"P":(A.gender=="W"?B:A),"M":(A.gender=="W"?A:B)},"married":[]})
    F.G=AY; F.I=G[AY].length+1
    G[AY].push(F)
    A.family.married[a]["child"].push(F); B.family.married[b]["child"].push(F)}
    }

    tryMarriage2(Y,X){//Tentar fazer com que tenha a possibilidade de se casar 2 vezes
    if(random([0,1,2])==2||Object.keys(this.family["married"]).length!=0){return false}
    if(random(0,10)<=8.5||G[Y].length==1){//Adicionar o parceiro
    G[Y].splice(X,0,new Ser((this.alelo=="W"?"H":"W"),createGenes(),{"married":[]}))
    G[Y][X+1].G=G[Y][X].G;G[Y][X+1].I=G[Y].length
    Ser.Relation2(G[Y][X],G[Y][X+1],Y)
    return true
    }
    else{//Parceiro ao lado
    var d=[]
    if(X!=0){if(G[Y][X-1].gender!=this.gender&&G[Y][X-1].family["married"]==undefined){d.push(-1)}}//Possivel com o anterior
    if(X!=G[Y].length-1){if(G[Y][X+1].gender!=this.gender&&G[Y][X+1].family["married"]==undefined){d.push(1)}}//Possivel com o proximo
    if(d.length==0){return false}; d=random(d)
    
    var type=this.compare(G[Y][X].family.Parents,G[Y][X+d].family.Parents)
    Ser.Relation2(G[Y][X],G[Y][X+d],Y,type)
    return true
    }}

testLetters(y){
var x=this.alelo[y][0].toLowerCase()
if((this.alelo[y][0]==x&&this.alelo[y][1]!=x)||(this.alelo[y][0]!=x&&this.alelo[y][1]==x)){this.alelo[y]=x.toUpperCase()+x}
}

//this.alelo, this.gender, this.data, this.GT(the function return)
genotipo(G,g,P,GT){if(GT==undefined){GT={}}
//A
if(G["A"]!=undefined){
fill((G["A"][0]=="A"?"green":"white"));
if(g=="W"){circle(P.X,P.Y,(P.H+P.W/P.H))}
if(g=="H"){rect(P.X-P.W*3/8,P.Y-P.H*3/8,P.W*3/4,P.H*3/4)}
}
else{fill(128);rect(P.X-P.W*3/8,P.Y-P.H*3/8,P.W*3/4,P.H*3/4)}

//B
if(G["B"]!=undefined){
push();stroke("red")
var b=(G["B"][0]=="B"?(1):(-1))
if(g=="H"){line(P.X+P.W*3/8*b,P.Y+P.H*3/8,P.X-P.W*3/8*b,P.Y-P.H*3/8)}
if(g=="W"){
line(P.X+(P.H+P.W/P.H)*Math.sqrt(2)/4*b,P.Y+(P.H+P.W/P.H)*Math.sqrt(2)/4,P.X-(P.H+P.W/P.H)*Math.sqrt(2)/4*b,P.Y-(P.H+P.W/P.H)*Math.sqrt(2)/4)
}
pop()}

//C
if(G["C"]!=undefined){
if(GT["C"]==undefined&&G["C"][0]=="c"){var buble=function*(){
var X,Y,D,r=(g=="W"?(P.H+P.W/P.H):(P.W>P.H?P.W:P.H))/10
while(true){
var L=(g=="W"?((P.H+P.W/P.H)/2):(Math.sqrt(Math.pow(P.W,2)+Math.pow(P.H,2))/2))
X=random(P.X-P.W/2,P.X+P.W/2),Y=random(P.Y-P.H/2,P.Y+P.H/2)
D=Math.sqrt(Math.pow(X-P.X,2)+Math.pow(Y-P.Y,2))
if(L-D>=L/5){
if(g!="W"){if(P.X-P.W/2<X&&X<P.X+P.W/2&&P.Y-P.H/2<Y&&Y<P.Y+P.H/2){r=(L-D)/2;break}}
if(g=="W"){if(D<L){r=(L-D)/2;break}}}
}
while(true){push();fill("blue");ellipse(X,Y,r);line(X,Y,P.X,P.Y);pop();yield X,Y,r}}
GT["C"]=[buble(),buble(),buble(),buble(),buble(),buble(),buble(),buble()]}
if(GT["C"]!=undefined){for(var gg in GT["C"]){GT["C"][gg].next()}}
}

return GT
}

}