class Figura{

  
  constructor (posX, posY){
    this.posY = posY;
    this.posX = posX; 
  }

  
pintarFigura(){
  fill(0,0,0);
        ellipse(this.posX,this.posY,30,30);
}


getPosY() {

    return this.posY;
}
getPosX() {
    return this.posX;
}



setPosY(posY) {

    this.posY = posY;
}
setPosX(posX) {
    this.posX = posX;
}

}

