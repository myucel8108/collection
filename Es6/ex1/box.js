// //shape와 같은 파일에 있는것처럼 할려면 어떻게 해야하나?
// //html에서 순서를 잘 파악해서 해야한다.-> 

// //박스를 받아드리는 기본속성 객체마다 달라지는거
// function Box(x,y,w,h,color){
//     this.x=x || 0;
//     this.y=y|| 0;
//     this.width=w|| 50;
//     this.height=h|| 50;
//     this.color=color || "black";
// }

// //캡슐화를 하게되면 100개만들게 되면 100번 호출하게 되면?
// //->function을 100개 만들어진다!
// //면밀하게 따지면
// //this.draw =new function이 100개 있는거다
// //그래서 나온것이 프로토타입!
// //객체가 공유하게되는 원 모습을 가지게 된다!
// //모든 function은 prototype을 가진다는 것을 명심하자
// //함수부분!
// Box.prototype = {  //객체생성
//     kor:10,
//     draw:function(){
//             let {x,y,width:w,height:h,color}=this;
//             ctx.fillStyle=color;
//             ctx.fillRect(x,y,w,h,color);
        
//     }

// }; 
//자바스크립트의 함수는 일반적인 함수와 캡슐화를 위해 쓰는 함수
//->마치 어떠한 형태를 만들어가는 형태를 생성자함수-> 캡슐화
//이러면 클래스를 만든것같지 않다...
//es6에선 클래스가 등장을 한다.
class Box{ //안쪽에 함수가 프로토타입으로 될텐데..  어떻게 정의할까
   #x;
    constructor(x=0,y=0,w=50,h=50,color="black"){
    //은닉화 방법 this.#x = x;
        this.#x=x ;
    this.y=y;
    this.width=w;
    this.height=h;
    this.color=color;
    }
    //getter,setter활용법
    get x(){
        return this.#x;
    }
    set x(x){
        this.#x =x;
    }
    
    draw(){ //함수를 정의할때 정의하는 느낌이 나도록!
            let {x,y,width:w,height:h,color}=this;
            //은닉화 뽀개기 방법은 작접 뽀개는 방법뿐
            //let x = this.#x;
            ctx.fillStyle=color;
            ctx.fillRect(x,y,w,h,color);
    }

}
//let obj={x:20,toString(){}};
























//박스 그리기
// for(let box of boxes){
//     let{x,y,width:w,height:h,color}= box;
//     console.log(box);
//     ctx.fillStyle=color;
//     ctx.fillRect(x,y,w,h);
// }