let canvas = document.createElement("canvas");
document.body.append(canvas);
//append를 쓰고 있는 애가 null이라는 에러가 발생한다.
//js에서 style을 주는 방법-> 동적으로 스타일을 주는 방법
//여러가지 방법이 있다.
canvas.width=500;
canvas.height=400;
canvas.style.border="1px solid black";
//canvas.style.borderColor="blue";
//canvas.style["border-color"] = "red";
//그림을 그릴때 사용하는 context를 얻어야한다
let ctx = canvas.getContext("2d");
//원초적인 방법
// ctx.fillStyle ="yellow";
// ctx.fillRect(10,10,50,50);
// ctx.fillStyle ="green";
// ctx.fillRect(80,10,50,50);
// ctx.fillStyle ="blue";
// ctx.fillRect(150,10,50,50);
// ctx.fillStyle ="red";
// ctx.fillRect(220,10,50,50);

//변수를 만들어서 만드는 방법
//-> 코드의 수정이 용이한 방법
//이런 코드는 제어구조에 밝은 시야를 가지지 못하면 힘들다.
//여기에서 한번 더 수정해야할 여지를 가지고 있다.

// let colors = ["yellow", "green", "blue", "red"]
// let x = 0;
// for(let c of colors){
//     ctx.fillStyle = c;
//     ctx.fillRect(x,90,50,50);
//     x += 70;
// }

//데이터 구조화된 방법
//우리가 생각하는 데이터는 여러 속성들로 이루어져있다.
//박스의 색상, 박스의 좌표, 너비 높이등 다양한 속성들로 박스를 제작해야한다.
//이말은 속성들은 하나의 단위로 묶여서 같이 또는 함께 사용된다는 점이다.
//이런 속성들은 개별적으로 사용하는 것은 바람직하지않다.
//box데이터 정의하기
// function Box(x,y,w,h,color){
//     this.x=x || 0;
//     this.y=y|| 0;
//     this.width=w|| 50;
//     this.height=h|| 50;
//     this.color=color || "black";

// }
new Box();// 기본값이 만들어지는 것
    let gap =20;
    let boxSize=50;
    let boxes=[];
    let colors=[
    "yellow", "green", "blue", "red"
]

for(let i =0 ;i<4 ;i++){
    boxes.push(new Box(i*(boxSize+gap),0,50,50,colors[i])); 
    console.log(boxes);
}
//박스 그리기
for(let box of boxes)
    box.draw(ctx);

console.log(boxes[0].kor);
console.log(Object.hasOwn(boxes[0],'x'));
//디스스트럭처링:뽀개기
let kors= [30,20,30,40];
let [kor1,kor2,kor3,kor4] = kors;
console.log(kor1,kor2,kor3);
//변수값 표현하기
console.log(`kor1:${kor1},kor2:${kor2}`);
//두 변수의 값 바꾸기
[kor1,kor2]= [kor2 , kor1];
console.log(`kor1:${kor1},kor2:${kor2}`);


console.log(typeof Box);
//function이름으로 prototype열기
let proto =Box.prototype; //클래스도 function이고 그 안에 함수는 prototype이다. 즉 과거와 똑같지만 표현식이 달라진거다!
//function object로 prototype열기
let proto2 =Object.getPrototypeOf(boxes[0]);
console.log(Object.hasOwn(proto2,'draw'));
let box = new Box();
box.x++;
console.log(`x:${box.x}`);

let obj ={x:10,y:20};
Object.defineProperty(obj,'z',{
    value:30,
    writable:false, //상수형변수
    enumerable: true //z를 나오게 하는 것 안나오게 하는 것
});
console.log(obj);
//object는 for(of) 에서 사용할 수 없다-> 콜렉션이 아니다!
//of는 콜렉션때문에 나왔다.
//in은 object를 사용하던 시절에
for(let p of Object.entries(obj)){
    console.log(`key:${p[0]},value:${p[1]}`) ;   
}

//Object.preventExtensions(obj); 는 객체 확장을 막는 역할을 한다.
let both =[
    new Box(),
    new Box(30,40,50,50 ,"red"),

];
{ //지역화
//배열첫번째 Box의 color와 width를 얻어내기
let [{color,width},b2] = both; //배열을 뽀개고 첫번째인것을 알려면?
console.log(b2);
console.log(color,width);
}

//박스를 잘라내기->box.js로 간다!