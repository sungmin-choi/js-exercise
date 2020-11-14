'use strict'

//1. fuction 의 정의
//fuction name(param1,param2){body...return;}
// 함수하나당 한가지 일 만 할수있겠금 정의하는것을 추천.
//함수이름 정의 할때 동사로정의 추천
//예) creatCardAndPoint => creatCard,createPoint
//JS에서는 함수는 오브젝트로 인식된다.

function printMessage(message){
    console.log(message);
}
printMessage(message);
//JS 에서 함수의단점은 타입의 파라미터만 볼때는 파라미터로 전달하는 인자의 타입을 알수가없다.
//2.parameters
//premitive parameter: value값을 전달 한다.
//object parameter: reference 가 전달 한다.

function changeName(obj){
    obj.name='coder';
}
const ellie={name:'ellie'};
changeName(ellie);
console.log(ellie) // {name:'coder'};


//3.Rest parameters

function printAll(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
    // 다른방법
    /*
    1.for(const arg of args){
        console.log(arg);
    }
    2.args.foreach((arg)=>console.log(arg));
    */
}
printAll('dream','coding','ellie');
//...args 는 배열을 입력받는걸로 인식된다.
//