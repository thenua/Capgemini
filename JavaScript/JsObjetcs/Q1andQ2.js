class Rectangle{
constructor(length,breadth){
    this.length=length;
    this.breadth=breadth;
}
 getLength(){
     console.log('The length is : '+this.length);
 }
 getBreadth(){
    console.log('The breadth is : '+this.breadth);
}
getArea(){
    console.log('The Area is: '+this.length*this.breadth);
}
}
var r1 = new Rectangle(10,10)
r1.getLength();
r1.getBreadth();
r1.getArea();