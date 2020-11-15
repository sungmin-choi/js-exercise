'use strict'

//1. fuction 의 정의
//fuction name(param1,param2){body...return;}
// 함수하나당 한가지 일 만 할수있겠금 정의하는것을 추천.
//함수이름 정의 할때 동사로정의 추천
//예) creatCardAndPoint => creatCard,createPoint
//JS에서는 함수는 오브젝트로 인식된다.
/*예를들어서 함수를 정의하고 function func1 */

//fuction declation 은 hoisted 가 가능함 이렇게 선언하면 JS에서는 함수가 선언되면
//제일 위로 알아서 올려주기 때문에 앞에다가 호출에도 가능하다
printMessage(message);//이렇게 앞에서 호출이 가능하다
function printMessage(message){
    console.log(message);
};

//JS 에서 함수의단점은 타입의 파라미터만 볼때는 파라미터로 전달하는 인자의 타입을 알수가없다.
//2.parameters
//premitive parameter: value값을 전달 한다.
//object parameter: reference 가 전달 한다.

function changeName(obj){
    obj.name='coder';
};
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
};
printAll('dream','coding','ellie');
//...args 는 배열을 입력받는걸로 인식된다.
//4. Local scope
/*
쉽게 생각해서 {}(block)안에서는 block안에있는 변수를 볼수있고
block밖에서는 block안에있는 변수를 볼수가없다(호출이나 쓸수가 없다).
 */
let globalMessage = 'global';
function printSomething(){
    let message = 'hello';
    console.log(message);//지역변수
    console.log(globalMessage);
};
printSomething();

//5.function expression
/*
function expression 은 hoisted 가 불가능하다 그래서 뒤에다가 호출이 가능함.

 */

 const print = function (){
    console.log('print');//anonymous function
 };
 print()// print 출력
 const printAgain = print;//다른변수에도 할당 가능함.
 printAgain();

//6.callback function using function expression

function randomQuiz(answer,printYes,printNo){
    if(answer === "love u"){
        printYes();
    }else{
        printNo();
    }
};

const printYes = function(){
    console.log('yes');
};

const printNo = function(){
    console.log('no');
};
randomQuiz("wrong",printYes,printNo);
randomQuiz("love u",printYes,printNo);

//7.Arrow function
//항상 anonymous function 입니다 함수를 간단하게 만들기 위함.

const simplePrint = function(){
    console.log('simpleprint');
};

const simplePrint = () => onsole.log('simpleprint');//이런식으로 표현가능.


