class Cuadrado extends Figura {

    constructor (posX,posY){
        super(posX,posY);
    }


    pintarFigura(){
        textSize(100);
        fill(0);
        text("X",this.posX,this.posY);
      
       

    }


    
}