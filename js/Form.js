class Form {
  constructor() {
    this.input = []
    for(var i = 0;i<G1.length;i+=1){this.input.push([createInput("").attribute("placeholder", "Genotipo"),G1[i][0]])
    this.input[this.input.length-1][0].size((G1[i][1].width+G1[i][1].height)/2)
    this.input[this.input.length-1][0].position(G1[i][1].position.x-G1[i][1].width/2,G1[i][1].position.y)}

    for(var i = 0;i<G2.length;i+=1){this.input.push([createInput("").attribute("placeholder", "Genotipo"),G2[i][0]])
    this.input[this.input.length-1][0].size((G2[i][1].width+G2[i][1].height)/2)
    this.input[this.input.length-1][0].position(G2[i][1].position.x-G2[i][1].width/2,G2[i][1].position.y)}

    for(var i = 0;i<G3.length;i+=1){this.input.push([createInput("").attribute("placeholder", "Genotipo"),G3[i][0]])
    this.input[this.input.length-1][0].size((G3[i][1].width+G3[i][1].height)/2)
    this.input[this.input.length-1][0].position(G3[i][1].position.x-G3[i][1].width/2,G3[i][1].position.y)}

    for(var i = 0;i<G4.length;i+=1){this.input.push([createInput("").attribute("placeholder", "Genotipo"),G4[i][0]])
    this.input[this.input.length-1][0].size((G4[i][1].width+G4[i][1].height)/2)
    this.input[this.input.length-1][0].position(G4[i][1].position.x-G4[i][1].width/2,G4[i][1].position.y)}

    for(var i = 0;i<G5.length;i+=1){this.input.push([createInput("").attribute("placeholder", "Genotipo"),G5[i][0]])
    this.input[this.input.length-1][0].size((G5[i][1].width+G5[i][1].height)/2)
    this.input[this.input.length-1][0].position(G5[i][1].position.x-G5[i][1].width/2,G5[i][1].position.y)}


    for(var i = 0;i<P2.length;i+=1){this.input.push([createInput("").attribute("placeholder", "Genotipo"),P2[i][0]])
    this.input[this.input.length-1][0].size((P2[i][1].width+P2[i][1].height)/2)
    this.input[this.input.length-1][0].position(P2[i][1].position.x-P2[i][1].width/2,P2[i][1].position.y)}

    for(var i = 0;i<P3.length;i+=1){this.input.push([createInput("").attribute("placeholder", "Genotipo"),P3[i][0]])
    this.input[this.input.length-1][0].size((P3[i][1].width+P3[i][1].height)/2)
    this.input[this.input.length-1][0].position(P3[i][1].position.x-P3[i][1].width/2,P3[i][1].position.y)}

    for(var i = 0;i<P4.length;i+=1){this.input.push([createInput("").attribute("placeholder", "Genotipo"),P4[i][0]])
    this.input[this.input.length-1][0].size((P4[i][1].width+P4[i][1].height)/2)
    this.input[this.input.length-1][0].position(P4[i][1].position.x-P4[i][1].width/2,P4[i][1].position.y)}

    for(var i = 0;i<P5.length;i+=1){this.input.push([createInput("").attribute("placeholder", "Genotipo"),P5[i][0]])
    this.input[this.input.length-1][0].size((P5[i][1].width+P5[i][1].height)/2)
    this.input[this.input.length-1][0].position(P5[i][1].position.x-P5[i][1].width/2,P5[i][1].position.y)}
  }

      
  res(){
    for(var plr in this.input){
if(this.input[plr][0].value()==this.input[plr][1]){this.input[plr][0].remove();this.input.splice(plr,1)}
    }
  }
  reset(){
    /*for(var plr in G1){console.log(plr+" "+G1.length);G1[plr][1].destroy();G1.splice(plr,1)}
    for(var plr in G2){G2[plr][1].destroy();G2.splice(0,1)}
    for(var plr in G3){G3[plr][1].destroy();G3.splice(0,1)}
    for(var plr in G4){G4[plr][1].destroy();G4.splice(0,1)}
    for(var plr in G5){G5[plr][1].destroy();G5.splice(0,1)}

    for(var plr in P2){P2[plr][1].destroy();P2.splice(0,1)}
    for(var plr in P3){P3[plr][1].destroy();P3.splice(0,1)}
    for(var plr in P4){P4[plr][1].destroy();P4.splice(0,1)}
    for(var plr in P5){P5[plr][1].destroy();P5.splice(0,1)}

linha.splice(0,linha.length)

P1=undefined,M1=undefined, QdG=undefined, QdF=undefined

    form=undefined

    setup()*/
    window.location.reload()
  }
}
