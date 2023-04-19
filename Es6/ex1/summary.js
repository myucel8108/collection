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
// {
//     //유일했던 컬렉션: Array
//     //일반적인 언어에서 지원하는 컬렉션: set,Array,Map
//     //set계열:키가 값과 같다. 값의 중복을 허용하지 않는다.
//     //list계열: array는 값의 삽입 위치가 키가 된다. index기반이다!
//     //Map계열:키를 따로 설정할 수 있따.-> 값에 키를 설정하기 위한 콜렉션으로 임시 객체를 대신해서 사용한다.
//     //object는 과연 컬렉션일까..?-> 값을 열거 할 수 없기 때문에 아웃!
//     let lotto = new Set();
//     for(let i =0 ; i<6; i++){

//         lotto.add(Math.floor(Math.random()*45)+1);


//     }
// let it = lotto.entries();
// let ar =[3,4,5,6,7,8];
// let kvit = ar.entries();
// for(let [k, v] of kvit){
//     console.log(`key:${k}, value:${v}`);
// }


// for(let [k, v] of it){
//     // console.log(`key:${k}, value:${v}`);
// }
// }
// //next는 이터레이터!
// {
//     let map = new Map();
//     map.set("id",1);
//     map.set("title","트랄라라라라라");
//     map.set("writerId","newlec");
//     let kvit = map.entries();
//     for(let [k,v] of kvit){
//         console.log(`key:${k}, value:${v}`);
//     }
//     map.forEach((v,k,m)=>{
//         console.log(`key:${k}, value:${v}, collection:${m}`);
//     })


//     console.log("------------------------------");
//     // let exam = {kor:10,eng:20,math:30};
//     // for(let n of exam)
//     //     console.log(n);
//     //이터러블하지않다!!!
//     //그럼 만들어보자!
//     // let exam = {
//     //     kor:10,
//     //     eng:20,
//     //     math:30,
//     //     values(){
//     //         return{
//     //             next(){
//     //                 return{
//     //                     done:false,
//     //                     value:this.kor
//     //                 }
//     //             }
//     //         }
//     //     }
//     // };
//     // for(let n of exam)
//     //     console.log(n);
//     //하지만 구조가 같다고 해서 같은건 아닌것같다. 
//     //저 values가 이터레이터를 반환한다는 증거가 필요하다
//     //그걸 위한 것이 심볼!~
//     { ///심볼 공부
//         let total = Symbol();
//         function iterator(){
//             console.log("아하유");
//         }
//         // function iterator(){
//         //     return [2,3,4,];
//         // }
//         // function print(it){
//         //     for(let n of it)
//         //     console.log(n);
//         // }

//         print(iterator());
//         //console.log는 안되는데 밑에껀 되는구나.

//         let exam ={
//             kor:10,
//             eng:20,
//             [total](){
//                 return this.kor+this.eng;
//             }
//         }
//         let aa ={
//             a:10,
//             b:123,
//             total(){
//                 return this.a+this.b;
//             }
//         }
//         //심볼을 정한거 불러내기!
//         console.log(exam[total]);
//     }
//     //심볼이란 구현해야할 함수에 대한 약속=인터페이스
//     //자료형 정의가 불가능한 자바스크립트는 그 약속을 심볼을 이용하여 만든다.
//     {
//         let examSymbol = {
//             total : Symbol(),
//             avg : Symbol()
//         }
//         class Exam{
//             constructor(){
//             this.kor =20,
//             this.eng =30;
//             this.Math=40;

//             }
//             [examSymbol.total](){
//                 return this.kor+this.eng+this.Math;
//             }
//             avg(){
//                 return this.total/3;
//             }

//         }
//         let exam = new Exam();
//         //exam.total();//같은 이름에 심볼이 있다보니 함수가 아니라고 한다
//         let result = exam[examSymbol.total]();
//         console.log(result);

       
//     }

// }

//interface Sysbol구현하기
{
    // let lotto={
    //     values(){
    //         nums=[1,2,3,4,5,6];
    //         index=0;
    //         return{
    //             next(){
    //                 return{
    //                     done:false,
    //                     value:nums[index++]
    //                 }
    //             }
    //         }
    //     }
    // }

    //
    let lotto={
        [Symbol.iterator](){
            nums=[1,2,3,4,5,6];
            index=0;
            return{
                next(){
                    return{
                        done:false,
                        value:nums[index++]
                    }
                }
            }
        }
    }

    //직접 컬렉션을 만들어본 결과!
    // let it = lotto.values();
    // console.log(it.next().value);
    // console.log(it.next().value);
    // console.log(it.next().value);
    // console.log(it.next().value);
    // console.log(it.next().value);
    // console.log(it.next().value);

    // for(let n of lotto){   //오른쪽에 약속된 이터레이터가 필요하다고 한다.
    //     // console.log(n);  //이터레이터가 아니라고 한다..
    // }
    console.log("-------------------");
    //컬렉션이 이터레이터인 것으로 결과가 확인 가능하다!
    let ar= [12,13,14,15,16];
    for(let n of ar){
        // console.log(n);
    }
}
//제너레이터는 이터레이터를 쉽게 구현해주기 위해 나온 것!
{
    let exam = {
                kor:10,
                eng:20,
                math:30,
                *[Symbol.iterator](){
                    yield this.kor;
                    yield this.eng;
                    yield this.math;
                }
            };

    console.log("제너레이터~~~")
    let lotto={
        *[Symbol.iterator](){  //*이 제너레이터!! 이 함수를 이터레이터로 만들어주겠다.
            nums=[1,2,3,4,5,6];
            index=0;
            yield nums[index++]; //양보의 의미인 yield이다.. next에서 done을 의미한다고 생각하면된다.
            yield nums[index++];//yield갯수보다 값이 더 많으면 뒤에꺼는 done이 true가 되면서 끝나는것과 같은 효과를 보인다.
            yield nums[index++];
        }
    }
    for(let n of lotto){   
        console.log(n); 
    }
    for(let m of exam){   
        console.log(m); 
    }
}
//유니코드!
{
//글자단위의 길이를 알려주지 않고 바이트 단위를 알려주는게 기존 방식

console.log("abcd".length);
console.log("안녕".length); //2개가 나와야하는데 기준이 모호해서 인지 이상해질때가 있다.
console.log("高".length);   //html에 세팅에 따라 기준이 달라지기 떄문이다.
//정규식
//값을 비교할떄 데이터베이스에서도 하지만
//데이터베이스의 값을 찾아볼때 정규식을 찾아보게 된다.
//api로 제공되는 것을 가져오거나 크롤링을 할때
//문자를 검색하기 위한 표현식을 생각해보자
let phone = "010-1234-1234345345"; //패턴? 상수(*)?-> 상수
let exp = "010-????-????"//패턴을 만족하는 문자열을 찾아보자
//?는 아무거나 들어가도된다면..?
exp ="010-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]"; //이안에 들어가도 되는 것들을 생각해보자
exptest=/^01[01678]-\d{3,4}-\d{4}$/;//간편하게 줄일 수 있다.
//숫자는 이렇게 간편한데 문자는 어떻게 해야하나?
//^ 밖에서는 시작부분 $는 끝부분 
// /\/
// \D -> ^숫자가 아닌 전부.
// w 언더스크롤을 포함하고 영문자와 숫자 대소문자를 포함한것이다.
//대문자는 대부분 반대인 ^의미
// /s whiteSpace를 전부 없애기 위한 것
const re = / /;// new RegExp()이 안에 담아버리는 방법과 동일하다

phone.match(exp);
console.log(exptest.test(phone));
//true
//사실이거 false가 나와야하나 싶지만 앞부분이 전부다 포함이 되기 떄문에
//true가 나온다!
//그렇다면 어떻게 해야하지?
//x{2,3}2부터 3까지 사이에 값
//x? 1번아니면 0번->올수도? 안올수다
//x+1번이상
//x* 0번이상
let html = `<div>
        <h2>hello</h2>
        <ul>
            <li>okay</li>
            <li>
                <b>bye</b>
            </li>
        </ul>
</div>
`;

let exp3= /<.>/;

let result =html.match(exp3);
console.log(result);

let st =`<hello> </hello>good hoho 2323
    haha <bye> 787878
    nazzoo nohoo`;
let exp4 =/[a-o]/; //w는 모든 문자인데 이렇게 하면 a~0중에 하나!!!라는 의미
//근데 찾은게? h부터 찾았으니 위치와 입력값은 console에서 볼수있다!
//전체 다 찾는 방법!
let exp5 =/[a-o]/g; //글로벌의 g!
let exp6 =/[a-o]+/g; //빈 공백은 포함되지 않았다!
let exp7 =/[a-o1-5]+/g; //숫자를 포함시키고 싶었다. 결과//hello good hoho  2323 이런느낌
let exp8 =/[a-o]+[1-5]+/g; //문자 또는 숫자를 하고 싶은데 에러가 난다. 그래서 다른방식을 찾아봐야한다.
let exp9 =/^<[a-o]+>|[1-5]+/g; //이건 개별적으로 움직이는 것이다!
let exp10 =/<[a-o/]+>+/g; //hello태그만 가져오기!
let exp11 =/<\w+>.+<\/\w+>/g;     //hello태그를 포함해서 가져오기!

let result2 =st.match(exp11);
console.log(result2);

}
{
    //promise 콜백 중첩을 줄여주기 위한 도구

    //이 함수는 우리가 만든 함수가 아니라고 가정하자
//     function download(url,callback){
//         //다운로드 완료
//         //오랜시간이 흐른뒤
//         callback([2,3,4]); //시간이 오래걸려서 비동기로 돌아간다.
//     }
//     //여기는 download라이브러리를 사용하는 내 코드
//     let result = download(); //오랜시간을 잡아먹는 내코드
//     console.log(result); //도대체 언제오지..?
//     //오래걸리니깐. 다른거 하고 있을래..?
//     //코드를 부를 수 있게 함수를 알려줘~
//     function downloadHandler(){
//         console.log(result);  //어라 데이터가 왔다.
//     }
//     /*let result= */   download(downloadHandler); //미리 함수를 만들어서 나중에 이 함수를 호출해서 다운로드 완료를 알려달라고 
// //함수에 위임한 것!
// //하지만 일반적으로는 함수를 미리 만들지 않고 넘겨주면서 정의한다.
//     download(function(resilt){
//         console.log(result);
//     });
//     //동기형 함수가 그립거나 중첩이 아닌 수직형태로 만들어주면 좋겠다.
//     //다운로드할때 callback이 계속 전달되는건 이해하지만 다른것이 같이 들어간다면?
//     //즉 콜백함수는 인자를 전달하지 않고 따로 수집하면 좋겠다!
//     //1. 서비스함수가 인자로 직접 콜백은 받지 않고 콜백을 받는 도구를 따로 두자
//     //2. 콜백을 직접 받지 않음으로써 중첩을 줄일 수 있다.
//     //이러한 장점이 있는것이 바로 promise
//     let promise = download(url);
//     promise.
//     then(function(result){
//         console.log(result);
//     });
    //위와 밑에가 다른 이유는??
    //호출하고 있는 내용과 결과가 나뉘어 있다.
    let url ="https123123123123";
    function downloadPromise(url){
        return new Promise(function(resolve){
            resolve([2,3,4]);
        })
        
    };
    let promise = download(url);

    promise.
    then(function(result){
        console.log("pro111111");
        console.log(result);
        return result[0];
    })
}