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

function setup(){
 createCanvas(650,650);
 jugador = 1;
 cambiarTurno = false;
 fila=3;
 col=3;
 tam = 200;
 figuritas=[];
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
               figuritas.push(new Cuadrado((i*tam)+50, (j*tam)+100));
               
             break;
             case 2:
               figuritas.push(new Circulo((i*tam)+50, (j*tam)+100));
               
             break;
       
         
       }
       fill(255);

       rect(i*tam,j*tam,tam,tam);
        
    
}

   }


   for (let i = 0; i < figuritas.length; i++) {
      figuritas[i].pintarFigura();

   }

//veriGanador();

  
}


function mousePressed(){

   let cambiar = false;

   for (i = 0; i < fila; i++) {
      for (j = 0; j < col; j++) {
         if(matriz[i][j] == 0){
            if(mouseX > i*tam && mouseX < (i*tam)+tam && mouseY > j*tam && mouseY < (j*tam)+tam){
               
               matriz[i][j] = jugador;
               
   
            }


           if(!cambiarTurno){
              jugador=2;
           }else{
              jugador=1;
           }


         }
      }
      
      //console.log(jugador+"");
   }

}

function veriGanador(){
 
   textSize(20);
   //columnas
   for (i = 0; i < fila; i++) {
      for (j = 0; j < col; j++) {
         if((matriz[0][0] == matriz[0][1] ==matriz[0][2]) == 1 ){

            //fill(222,0,0);
            text("ganador",300,300);
          }

      }
   }
}





