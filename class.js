'use strict';

//class :template
//object:instance of a class

//1.class declarations
class Person{
    //constructor
    constructor(name,age){
        // fields
        this.name = name;
        this.age=age;
    }
    //methods
    speak(){
        console.log(`${this.name}:hello!`)
    }
}

const ellie = new Person('ellie',20);
console.log(ellie.name);// ellie
console.log(ellie.age);//20
ellie.speak();//ellie:hello!


//2.Getter and setters
class User{
    constructor(firstName,lastName,age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
       this._age = value<0 ? 0:value;

    }
}

const user1 = new User('Steve','Job',-1);
console.log(user1.age)

// 3.static properties and methods
// static은 class자체에서만 호출가능함 object만들었다고 static 변수를 호출할수가없다
// 사용이유는 굳이 같은걸 계속 오브젝트 생성할때마다 똑같이 생성할필요없는것일때 사용 메모리 절감
class Article{
    static publisher = 'Dream coding';
    constructor(articleNumber){
        this.articleNumber=articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}


const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);// undefined
console.log(Article.publisher);//Dream coding
console.log(Article.printPublisher());//Dream coding

//4.Inheritance 상속

class Shape{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width*this.height;
    }
}

//상속 과정 extends 사용
//자동적으로 Rectangle 안에 Shape의 field 랑 methods 가 포함된다
// 불러와서 shape class 안에있는 methods 를 고쳐쓸수있다
class Rectangle extends Shape{}
class Triangle extends Shape{
    //오버라이딩
    draw(){
        super.draw();//원래 부모에 class 에있던 methods도 불러와서 쓸수있다.
        console.log('T')
    }
    getArea(){
        return (this.width*this.height)/2;
    }

}
const rectangle = new Rectangle(20,20,'blue');
const triangle = new Triangle(20,20,'red');
rectangle.draw();// drawing blue color of   T
console.log(triangle.getArea()) ;//200





