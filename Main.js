let matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let cambiarTurno;
let jugador;
let figuritas;
let fila;
let col;
let tam;
let turno;
let ganadorX;
let ganadorO;
let noJugarmas;
let reset;

function setup(){
 createCanvas(650,650);
 jugador = 1;
 ganadorX=false;
 ganadorO=false;
 fila=3;
 col=3;
 tam = 200;
 figuritas=[];
 turno=1;
 noJugarmas=true; 


}


function draw (){
   background(125,0,0);
  
   
   for (i = 0; i < fila; i++) {
    for (j = 0; j < col; j++) {
       switch (matriz[i][j]) {
          case 0:
            fill(255);
             break;
             case 1:
                if(noJugarmas){
                  figuritas.push(new Cuadrado((i*tam)+50, (j*tam)+100));
                }
              
               
             break;
             case 2:
                if(noJugarmas){
                  figuritas.push(new Circulo((i*tam)+50, (j*tam)+100));
                }
               
               
             break;
     
       }
       fill(255);

       rect(i*tam,j*tam,tam,tam);
        
    
}

   }



   for (let i = 0; i < figuritas.length; i++) {
      if (turno % 2 == 0) {
         figuritas[i].pintarFigura();
         jugador=2;

      }else{
         figuritas[i].pintarFigura();
         jugador=1;
      }

   }

veriGanadorCol();
veriGanadorFila();
veriGanadorDiag();

if(ganadorX){
   fill(255);
   textSize(20);
   text("ganador X",320,630);
   noJugarmas=false;

}
if(ganadorO){
   fill(255);
   textSize(20);
   text("ganador O",320,630);
   noJugarmas=false;
}


 
   
   
  


  
}


function mousePressed(){

  turno++;

   for (i = 0; i < fila; i++) {
      for (j = 0; j < col; j++) {
         if(matriz[i][j] == 0){
            if(mouseX > i*tam && mouseX < (i*tam)+tam && mouseY > j*tam && mouseY < (j*tam)+tam){
               matriz[i][j] = jugador;
               reset=false;
               
         
            }
         }
      }
   }
   


}

function veriGanadorCol(){
 

   for (i = 0; i < fila; i++) {
      for (j = 0; j < col; j++) {
         if((matriz[0][0] == matriz[0][1] && matriz[0][0]==matriz[0][2]&&matriz[0][2] ==matriz[0][1]) ){
            if(matriz[0][0] == 1){
               ganadorX=true;
               return 1;
               
            }else if(matriz[0][0] == 2){
               ganadorO=true;
               return 2;
            }
          }
       
       if((matriz[1][0] == matriz[1][1] && matriz[1][0]==matriz[1][2]&&matriz[1][2] ==matriz[1][1]) ){
            if(matriz[1][0] == 1){
               ganadorX=true;
               return 1;
               
            }else if(matriz[1][0] == 2){
               ganadorO=true;
               return 2;
            }
          }
      
          if((matriz[2][0] == matriz[2][2] && matriz[2][1]==matriz[2][2]&&matriz[2][2] ==matriz[2][1]) ){
            if(matriz[2][0] == 1){
               ganadorX=true;
               return 1;
               
            }else if(matriz[2][0] == 2){
               ganadorO=true;
               return 2;
            }
          }
      



      }
   }
}

function veriGanadorFila(){
 
   for (i = 0; i < fila; i++) {
      for (j = 0; j < col; j++) {
         if((matriz[0][0] == matriz[1][0] && matriz[0][0]==matriz[2][0]&&matriz[2][0] ==matriz[1][0]) ){
            if(matriz[0][0] == 1){
               ganadorX=true;
               return 1;
               
            }else if(matriz[0][0] == 2){
               ganadorO=true;
               return 2;
            }
          }
       
       if((matriz[0][1] == matriz[1][1] && matriz[0][1]==matriz[2][1]&&matriz[2][1] ==matriz[1][1]) ){
            if(matriz[0][1] == 1){
               ganadorX=true;
               return 1;
               
            }else if(matriz[0][1] == 2){
               ganadorO=true;
               return 2;
            }
          }
      
          if((matriz[0][2] == matriz[1][2] && matriz[2][2]==matriz[1][2]&&matriz[2][2] ==matriz[0][2]) ){
            if(matriz[0][2] == 1){
               ganadorX=true;
               return 1;
               
            }else if(matriz[0][2] == 2){
               ganadorO=true;
               return 2;
            }
          }
      



      }
   }
}


function veriGanadorDiag () {

   if((matriz[0][0] == matriz[1][1] && matriz[1][1]==matriz[2][2]&&matriz[2][2] ==matriz[0][0]) ){
      if(matriz[0][0] == 1){
         ganadorX=true;
         return 1;
         
      }else if(matriz[0][0] == 2){
         ganadorO=true;
         return 2;
      }
    }

    if((matriz[0][2] == matriz[1][1] && matriz[1][1]==matriz[2][0]&&matriz[2][0] ==matriz[0][2]) ){
      if(matriz[0][2] == 1){
         ganadorX=true;
         return 1;
         
      }else if(matriz[0][2] == 2){
         ganadorO=true;
         return 2;
      }
    }


}




