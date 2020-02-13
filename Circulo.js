class Circulo extends Figura {

    constructor (posX,posY){
        super(posX,posY);
    }
 

    pintarFigura(){

        fill(0,0,0);
        ellipse(this.posX,this.posY,30,30);
        
    }


    
}