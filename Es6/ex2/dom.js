window.addEventListener("load" , function(){
//1.노드선택

{
    //node란? 문서를 구성하는 모든 객체
    //node의 뜻은 ? 나무의 마디?
    //즉 문서를 나무에 비유하고 있고 각 문서에 콘텐츠는 나무의 가지처럼 뻗어져 나간 것!
    //분기점을 마디로 비유-> 심지어 주석도 node!
    //모든것이 객체이기때문에 객체가 나무처럼 뻗어져있다고 생각하면된다.
    //콘텐츠를 감싸는 도구인 태그는 모두 객체이고 그 안에 클래스 마저 객체이다.
    //document 객체를 이용하는 방식
    let node =document.createTextNode("hello");
    document.body.append(node);
    //document 객체를 이용한 선택은 크게 선택을 tagName이나 id,class와 같은 방식으로 나뉘어 있다.
   //document 객체를 이용할때는 컴포넌트나 센션을 이용한다.
    //let s1 = document.getElementById("s1");
    let s1 =   document.getElementsByTagName("section");
  //  console.log(s1[0]);
    let s2 =document.body.getElementsByClassName("section1");
  //  console.log(s2[0]);
    // s2.getElementsByClassName("aaa");
  //  console.log(s2[0]);
    //난 개인적으로 Selector API를 쓰는게 좋아보인다.
}

//2.노드조작

{
    let s1= document.querySelector("#s1");
    let first = s1.querySelector("li:first-child");
    console.log(first);
    //삭제
    //first.remove();
    //추가 단순한 텍스트여서 에러가 발생한다.
    let el = document.createTextNode("C"); 
    let ul = s1.querySelector("ul");
    //ul.appendChild(el);
    //li를 넣어보자
    let li = document.createElement("li");
    // ul.appendChild(li);
    // li.appendChild(el);
    //수정,변경 
    let  li2 = s1.querySelector("ul>li:first-child");
    let last = s1.querySelector("ul>li:last-child");
    //위 방식은 ul이 부정확하기 때문에 안된다.!
    //
    {
        let ul = s1.querySelector("ul");
        let li =ul.querySelector("li:first-child");
        let last = ul.querySelector("li:last-child");
        // li->lqst위치로 옮기는 코드?

    }


}
//노드를 조작해보기
//     let s1 = document.querySelector("#s1");
//     let btnUp = document.querySelector(".btn-up");
//     let btnDown = document.querySelector(".btn-down");
//     let current = document.querySelector(".current");
    
//     let ul = document.querySelector("ul");
//     let li = ul.querySelectorAll("li")
//     //current다음애를 가져와보자
//     //node순회 방법!
//     //current.nextSibling//모든 노드 대상으로 함
//     btnUp.onclick = function(){
//         let pre = current.previousElementSibling; 
//         //insertAdjacentElement
//         //prepend,append
//         //current.parentElement
// //      등등이 있다.
// //  replaceChildren은 여러개를 넣을 수 있는 것이 장점이다.
// // 부모.replaceChild(자식) /자식.replaceWith(자식);
//     current.insertAdjacentElement('afterend', pre);
//    // current.replaceWith(next, current);



//     };
//     // element인터페이스를 함
//     btnDown.onclick = function(){
//         let next = current.nextElementSibling; 
//         //insertAdjacentElement
//         //prepend,append
//         //current.parentElement
// //      등등이 있다.
// //  replaceChildren은 여러개를 넣을 수 있는 것이 장점이다.
// // 부모.replaceChild(자식) /자식.replaceWith(자식);
//     current.insertAdjacentElement('beforebegin', next);
//    // current.replaceWith(next, current);



  //  };

    // // 3. 노드조작을 위한 예제1
    // {
    //     let s1 = this.document.querySelector("#s1");

    //     let btnUp = s1.querySelector(".btn-up");
    //     let btnDown = s1.querySelector(".btn-down");
    //     let current = s1.querySelector(".current");
        
    //     let ul = document.querySelector("ul");
    //     let li = ul.querySelectorAll("li")
    //     btnUp.onclick = function(){
    //         //current를 위로 올리는 것


    //     }
    //     btnDown.onclick = function(){
    //         //current 밑으로 내리는 것
    //         //노드 순회로 다음 노드를 선택하기
    //         // current.nextSibling -> a모든 노드를 대상으로 함
    //         let next = current.nextElementSibling; // 엘리먼트만을 대상으로 한다, 엘리먼트의 기능
    //         current.nextElementSibling.after(current);
            
    //         //ul.append(previous);
        //또다른 방법
    //     }
    // }

{
    //4.이벤트 객체

        // Event 객체의 속성
        // target / currentTarget
        // ┌─────────┐
        // │   A     │
        // │ ┌─────┐ │
        // │ │ B   │ │
        // │ │     │ │
        //
        {
            let s2 = document.querySelector(".s2");
            let ul = s2.querySelector("ul");
            let current =null;
            let lis = ul.querySelectorAll("li");
    
            for(let li of lis){
                
                li.onclick = function(e){ 
                    {                      
                    
                        if(current)   {
                            let selected = e.target.parentElement;
                            while(selected.tagName !== 'LI')
                                selected= e.parentElement;
                                
                            let  selectedBefore = selected.previousElementSibling;

                            if(selectedBefore){
                                    console.log("여기로오나~")
                            current.replaceWith(selected);
                            selectedBefore.after(current)
                        }
                        else{
                            ul.prepend(current);
                        }
                        
                        current.classList.remove("current");
                            current=null;
                        }
                    }
                    current = e.target.parentElement; //타겟은 li인데 원하는 것이 안나온다.
                    while(current.tagName !=="LI")
                    current = current.parentElement;     
    
                    current.classList.add("current");
                }    
                this.keyDown=function(e){
                    //
                    console.log("여기는 왔니")
                        current = e.target.parentElement; //타겟은 li인데 원하는 것이 안나온다.
                    while(current.tagName !=="LI")
                    current = current.parentElement;  
                    if(e.key ==="Delete"){
                        console.log("딜리트 눌렸니")
                        current.classList.remove("current");
                    }
                }
            }
            
        }
        // let s2 = document.querySelector(".s2");
        // let ul = s2.querySelector("ul");
        // let current = ul.querySelector("li.current");
        // let lis = ul.querySelectorAll("li");

        // for(let li of lis)
        //     li.onclick = function(e){ 
        //         //current = e.target; 
        //        // console.log(current); //하지만 결과값이 span이다..?
        //         current = e.target.parentElement; //타겟은 li인데 원하는 것이 안나온다.
        //         while(current.tagName !=="LI")
        //         current = current.parentElement;     
        //         let span = current.firstElementChild;           
        //         //왜지? 부모로 가서 첫번째 자식에게 스타일을 줘봐
        //         //current.firstChild.style.backgroundColor = "red";
        //         //이러한 방식들은 UI구조를 이용하는 방식에서는 조금 더 생각해봐야한다
        //         //1. 구조의 중첩이 있을것같다는 예정이 되었다면
        //         //현재 자식이 자손이 될 가능성도 있다 그래서 선택자를 사용하자
        //         //즉 span은 확실한데 그게 자식일지 자식의 자식일지              
        //         //  if(span.tagName !== "SPAN")             
        //       while(span.tagName !=="SPAN")
        //         span = span.firstElementChild;     
        //         //이렇게 하는건 바람직하지 않다.
        //      // span.style.backgroundColor = "red";

        //       //2. 구조의 중첩에서 다른 태그로 변경이 될 수 있다면?-> 클래스명으로!
            
        //     //
            
            
        //     }


    }
        


})