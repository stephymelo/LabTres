let matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let cambiarTurno;
let jugador;
let ancho;
let alto;
let figuritas;
let fila;
let col;

function setup(){
    createCanvas(600,600);
    jugador = 1;
    cambiarTurno = false;
 fila=3;
 col=3;
 tam = 200;
 figuritas=[];
}


function draw (){
   background(125,0,0);
   for (let i = 0; i < figuritas.length; i++) {
      figuritas[i].pintarFigura();

   }
   
   for (i = 0; i < fila; i++) {
    for (j = 0; j < col; j++) {
       switch (matriz[i][j]) {
          case 0:
            fill(255);
             break;
             case 1:
               figuritas.push(new Cuadrado(i+30, j+30));
               fill(250,0,0);
             break;
             case 2:
               figuritas.push(new Circulo(i+30, j+30));
             break;
       
         
       }
       rect(i*tam,j*tam,tam,tam);
        
    
}
   }



veriGanador();

  
}


function mousePressed(){
   for (i = 0; i < fila; i++) {
      for (j = 0; j < col; j++) {
         if(matriz[i][j] == 0){
            if(mouseX > i*tam && mouseX < i*(tam+tam) && mouseY > j*tam && mouseY < j*(tam+tam)){
               matriz[i][j] == jugador;

               if(!cambiarTurno){
                  jugador = 2;
                  cambiarTurno = true;
               }

               if(cambiarTurno){
                  jugador = 1;
                  cambiarTurno = false;
               }
            }
         }
      }
      console.log(jugador+"");
   }

}

function veriGanador(){

  

   for (i = 0; i < fila; i++) {
      for (j = 0; j < col; j++) {
         if(matriz[i][j] == matriz[i][j] ==matriz[i][j] == 0 ){
            fill(255);
            text("ganador");

          

         }
      }
   }
}





