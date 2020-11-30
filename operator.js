'use strict'

// 1.String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2.increment and decrement operators
let counter =2 ;
const preIncrement = ++counter;
// counter = counter +1;
//  preIncrement = counter;
console.log(`preIncrement:${preIncrement},counter:${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
//counter = counter+1;
console.log(` postIncrement:${ postIncrement},counter:${counter}`);

// 마이너스 도 동일

//3.Assignment operators

let x=3;
let y=6;
x +=y //x=x+y

// 4.Logical operators: ||(or),&&(and),!(not)

const value1 = true;
const value2=4 < 2;

// || (or) ,첫번째가 참이면 바로 참을 반환하고 뒤에는 실행안함
// 그런데 초보 개발자는 실수하는게 무거운 함수를 맨앞에둬서 시간 낭비하는 경우가 종종있음.

function check(){
    for(let i=0;i<10;i++){
        //시간낭비
        console.log('wasting time')
    }
    return true;
}

console.log(`or:${value1 || value2 ||check()}`);

//이런 함수를 맨뒤에 넣음으로써 첫번째value1 이 트루이기때문에 굳이  check()함수를 실행안하고 결과가 나온다

// &&(and) 반대로 먼저 거짓이 나오면 뒤에 확인도 안하고 바로 false를 반환한다.
// 그래서 이것 또한 무거운 함수등등 을 제일 뒤에 넣는게 효율적인 코드작성 방법이다.

// 5.Equality ==,===

const stringFive='5';
const numberFive = 5;

// == 이 연산자는 string타입이든,number 타입이든 상관없이 같기만하면 참 을 반환한다
console.log(stringFive == numberFive);//true
//=== 이것은 타입까지 신경을써서 출력된다,그래서 왠만하면 === 이것쓰는걸 추천
console.log(stringFive === numberFive);//false

//object 비교 reference
const ellie1 ={name:'ellie'};
const ellie2 = {name:'sllie'};
const ellie3 = ellie1;
console.log(ellie1==ellie2);//각각 다른 ref 가지고 있기때문에 false출력
console.log(ellie1===ellie2);//각각 타입이 같든 안같든지 애초에 ref 가 다르기 때문에 false출력
console.log(ellie1===ellie3);//ellie1을 ellie3한테 아예 덮어서 복사시킨 것이기 때문에 ref도 같고 타입도 똑같아서 true출력


//6.break,continue
//break는 아예loop문을 다 나가버릴때쓰고
//continue 는 당장 실행중인 block만 나가게된다.

rror





