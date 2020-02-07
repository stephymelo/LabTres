let matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];


let ancho;
let alto;


let fila;
let col;

function setup(){
    createCanvas(500,500);
 fila=0;
 col=0;
 ancho=70;
 alto=70;
}


function draw (){
   background(125,0,0);

   for (fila = 0; fila < 3; fila++) {
    for (col = 0; col < 3; col++) {
        if (matriz[fila][col] == 0) {
            rect(0+(fila*alto),0+(col*ancho),ancho,alto);
            noFill();
            
         } else {
            
            
            }
    
}
   }


function mousePressed(){

 
   
}

}