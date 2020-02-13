class Cuadrado extends Figura {

    constructor (posX,posY){
        super(posX,posY);
    }


    pintarFigura(){

        fill(0,0,0);
       rectMode(Center);
       rect(this.posX,this.posY,30,30);
       

    }


    
}