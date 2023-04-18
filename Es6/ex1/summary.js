// //상속
// class Exam{
//     #kor;
//     #eng;
//     #math;
//     constructor(kor=0,eng=0,math=0){
//         this.#kor=kor;
//         this.#eng=eng;
//         this.#math=math;
//     }
//     total(){
//         return this.#kor+this.#eng+this.#math;
//     }
//     avg(){
//         return this.total()/3;
//     }

//     get kor(){
//         return this.#kor;
//     }
//     set kor(value){
//         this.#kor=value;
//     }
// }

// class newExam extends Exam{
//     #com;
//     constructor(com=0,kor=0,eng=0,math=0){
//         super(kor,eng,math);
//         this.#com=com;
//     }
//     total(){
//         return super.total()+ this.com;
//     }
//     #test(){
//         console.log("hehehe");
//     }


// }

// let exam = new newExam(1,1,1,1);

// exam.kor = 30;
// console.log(exam.kor);

// "use strict"

// this.x=30;
// x=20;

// setTimeout(function() {
//     console.log(arguments.length); 
//  }, 3000);



// setTimeout(() => {
//    console.log(arguments.length); 
// }, 3000);

// class test{
//     constructor(){
//         this.x =10;
//         setTimeout(() => { //arrow함수
//             console.log(this.x);
//         }, 3000);
//         setTimeout(function(){//일반 function
//             console.log(this.x);
//         }, 3000);

//     }
// }

// new test();
// //왜 다르지?
// //this.x의 값이 달라진다..
// //일반 function은 this를 가지고 있고 arrowfunction은 가지고 있지 않다.
// //별도의 this를 가지고 싶으면 일반 function outer에 있는 this를 쓰고 싶으면 arrowFunction을 쓰면된다.

// let f1 = function(){
//     console.log("test");
// };

// let f2 =()=>{
//     console.log("test2");
// };
//Enhanced Object Literals
// let kor =3;
// let eng =4;
// let math=5;
//기존변수방식
// let obj= {
//     kor:kor,
//     eng:eng,
//     math:math,
//     total:function(){
//         return this.kor+this.eng+this.math;
//     },
//     "to-String":function(){
//         console.log("hello");
//     }
// };


// //인헨스 방식: 변수를 이용해 속성을 정의할 경우 변수명과 키가 같은 이름일 경우에는 키를 별도로 설정할 필요가 없다.
// //함수를 만들때도 function키워드를 사용할 필요가 없다
// //속성으로 변수가 올 수 있다.-> 기능이 향상되었다?
// let colname = "ok";
// let enobj ={
//     kor,
//     eng,
//     math,
//     total(){
//         return this.kor+this.eng+this.math;
//     },
//     "to-String":function(){
//         console.log("hello");
//     },
//     [colname]:function(){
//         console.log(colname);
//     }
// };
// enobj.haha(); //이거 colname안에 값이 바뀌면 같이 바뀌어야함 안그러면 에러남
//이유는 인터페이스를 배울때!

//template string
// {
//     let kor = 30;
//     let eng =40;
//     let msg= String.raw`
//     <span>
//     yay~
//     </span>` ;

//     let template = `kor:${kor}, eng:${eng}, msg:${msg}`;
//     console.log(template);
// }
//Spread Operator
// {
    
//     function print(x,y,z){
//         console.log(`x:${x},y:${y},z`);
//     }
//     let array = [2,3,4];
    
//     print(...array);
    
// }
//컬렉션!
{
    //유일했던 컬렉션: Array
    //일반적인 언어에서 지원하는 컬렉션: set,Array,Map
    //set계열:키가 값과 같다. 값의 중복을 허용하지 않는다.
    //list계열: array는 값의 삽입 위치가 키가 된다. index기반이다!
    //Map계열:키를 따로 설정할 수 있따.-> 값에 키를 설정하기 위한 콜렉션으로 임시 객체를 대신해서 사용한다.
    //object는 과연 컬렉션일까..?-> 값을 열거 할 수 없기 때문에 아웃!
    let lotto = new Set();
    for(let i =0 ; i<6; i++){

        lotto.add(Math.floor(Math.random()*45)+1);


    }
let it = lotto.entries();
let ar =[3,4,5,6,7,8];
let kvit = ar.entries();
for(let [k, v] of kvit){
     console.log(`key:${k}, value:${v}`);
}


for(let [k, v] of it){
    // console.log(`key:${k}, value:${v}`);
}
}
//next는 이터레이터!


