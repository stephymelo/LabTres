class Circulo extends Figura {

    constructor (posX,posY){
        super(posX,posY);
    }
 

    pintarFigura(){
        textSize(100);
        fill(0,0,0);
        text("O",this.posX,this.posY);
        
    }


    
}