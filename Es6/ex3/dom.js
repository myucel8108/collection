window.addEventListener("load", function(){
    //s4 드래그 앤 드랍
    {
        let s = this.document.querySelector(".s4");
        let dropzone = this.document.querySelector(".drop-zone");
        dropzone.ondragenter = function(e){
            console.log("ondragenter");
        };
        dropzone.ondragover = function(e){
            e.preventDefault();
            if(e.dataTransfer.types[0]==="Files"){//오브젝트의 내용을 어떻게 출력하지?
                dropzone.classList.add("vaild");
                dropzone.classList.remove("invaild");
            }
            else{
                dropzone.classList.add("invaild")
                dropzone.classList.remove("vaild");
            }
            
            
        };
        dropzone.ondragleave = function(e){
            console.log("ondragleave");
    
            dropzone.classList.remove("vaild");
            dropzone.classList.remove("invaild");
        };
        dropzone.ondrop = function(e){ //읽는 성질이 기본이기 때문에 에러가 발생할 수 있다.
            e.preventDefault();

            if(e.dataTransfer.files.length > 1)
                console.log("하나 이상입니다 삐빅");
            
            let file = e.dataTransfer.files[0];
            console.log(file);
            let formData = new FormData();
            formData.append("file",file);
            formData.append("test","hehe");

            let request = new XMLHttpRequest();
            request.onload = function(){
                console.log("done");
            }

            request.upload.onprogress = function(){
                console.log("progress");
            }

            console.log("ondrop");

            request.open("POST", "http://localhost:8080/upload"); //
            //request.setRequestHeader("Content-Type", "multipart/form-data");
            
            request.send(formData);
        };
    }

    //s3 목록 선택
    {
        let s = document.querySelector(".s3");
        let ul = s.querySelector("ul");
        let current = null;//ul.querySelector("li.current");
        let lis = ul.querySelectorAll("li");
        let delButton = s.querySelector(".btn-del");
        ul.onclick = function(e){ 
            //부모에 하나만 function을 만들어주는 방식

            if(e.target.tagName !=='SPAN')
                return;

            let selected = e.target.parentElement;
            while(selected.tagName !== 'LI')
                    selected = selected.parentElement;// e.target에서 벗어난거 아닐까

            selected.classList.add("current");

            //그렇다면 ul이 클릭될때는 어떻게하나..?
            e.currentTarget;


        }
        // delButton.onclick = function(){
        //     let selectedButton =ul.querySelectorAll(".current");
        //     console.log(selectedButton);
        //     for(let li of selectedButton)
        //         li.classList.remove("current");

        // }

        delButton.onclick = function(){
            let selectedButton =[...ul.querySelectorAll("input:checked")].map(a=>a.parentElement);
            let arr =[1,2,3];
            let arr1 =arr.map(a=>`a id=${a}`); //하나씩 꺼내서 출력하거나 더해줄수 있는 것 map을 이용하면 값을 바꿀수도 있다.
            console.log(arr1);
            console.log(selectedButton);

            for(let li of selectedButton)
            li.remove();

        }


        s.onkeydown = function(e){
            if(e.key==="Delete"){
                console.log(`code:${e.code}, key: ${e.key}`);
                const evnet = new Event("click"); //이벤트를 만들고
                delButton.dispatchEvent(evnet); //트리거를 만들어 내는 방법
            }
        }

    }









    // 4. 이벤트 객체
    {
        let s1 = document.querySelector(".s2");
        let ul = s1.querySelector("ul");
        let current = null;//ul.querySelector("li.current");
        let lis = ul.querySelectorAll("li");

        for(let li of lis)
            li.onclick = function(e){

                // 이전에 current 로 선택된 li가 있는지를 알아보는 코드

                // 다음처ㅓㄻ for문을 사용하는 코드는 바람직하지 않다.
                // {
                //     // 하수 코드
                //     let lis = ul.querySelectorAll("li");
                //     let hasCurrent = false;
                //     for(let li of lis)
                //         if(li.classList.contains("currenet"))}
                //             hasCurrent = true;
                //             break;
                //         }
                // }

                // 위의 방법 보다는 다음처럼 그냥 있는지 확인할 수 있다.
                //let selected = ul.querySelector("li.current");
                //console.log(selected + "...");
                if(current){
                    console.log("두 번째 선택입니다.");

                    //current<->selected
                    // 1. 현재 2번째 선택된 엘리먼트 얻기
                    let selected = e.target.parentElement;
                    while(selected.tagName !== 'LI')
                        selected = e.parentElement;

                    selected.classList.add("selected");
                    selected.onanimationend = function(){
                        let selectedBefore = selected.previousElementSibling;
                        current.replaceWith(selected);
                        if(selectedBefore)
                            selectedBefore.after(current);
                        else
                            ul.prepend(current);
    
                        current.classList.remove("current");
                    };
                    current=null;
                    
                    
                    
                }


                //* 현재 선택된 노드를 찾고
                current = e.target.parentElement;
                while(current.tagName !== "LI")
                    current = current.parentElement;
                //* 선택된 노드임을 표시하는 스타일 변경                
                // let span = current.firstElementChild;
                // while(span.tagName !== "SPAN")
                //     span = span.firstElementChild;                 
                // 이렇게 스타일을 적용하는 것은 바람직하지 않다.
                // 다음과 같이 스타일을 미리 만들어 놓았다면 
                // 위와 같이 노드 찾기는 하지 않아도 된다.
                // .s2 li.current .box,
                // .s2 li.current span
                // {
                //     background-color: red;
                // }
                
                // span.style.backgroundColor = "red";
                // 위의 스타일 대신 클래스를 추가해보자.
                
                current.classList.toggle("current");
                
                console.log(current);
            }
    }

    // {
    //     let s1 = document.querySelector(".s2");
    //     let ul = s1.querySelector("ul");
    //     let current = ul.querySelector("li.current");
    //     let lis = ul.querySelectorAll("li");

    //     for(let li of lis)
    //         li.onclick = function(e){
    //             //current = e.target;
    //             // 현재 current가 span이다. 
    //             // 그럼 다음처럼 고쳐보자.
    //             // 그럼 자 ㄹ되나?

    //             //* 현재 선택된 노드를 찾고
    //             current = e.target.parentElement;
    //             while(current.tagName !== "LI")
    //                 current = current.parentElement;

    //             // 안되죠? 이유는 li의 배경색은 변경해도 바뀌지 않는다.
    //             //current.style.backgroundColor = "red";
    //             // 그럼 다음처럼 firstChild를 이용해 자식(span)의 스타일을 바꾸면 디ㅗ네요
    //             //current.firstElementChild.style.backgroundColor = "red";

    //             // 그런데 이 상황에서 조금만 더 생각해볼 수 있는여지가 있다.
    //             // UI 구조를 이용하는 방식에는 조금 더 생각해볼 것이 있다.
    //             // 1. 구조의 중첩이 있을 것 같다는 예정이 되었다면
    //             // .firstElementChild 보다는 자손이 될 수도 있기 때문에 
    //             // 검색 코드로 변경하는 것이 올바른 방법이 될 수 있다.
    //             // 즉. span은 확실한데 그게 자식일지, 자식의 자식일지, 자식의 자식의 자식일지... 모르는 상황
    //             //* 선택된 노드임을 표시하는 스타일 변경
    //             let span = current.firstElementChild;
    //             while(span.tagName !== "SPAN")
    //                 span = span.firstElementChild; 
                
    //             // 이렇게 스타일을 적용하는 것은 바람직하지 않다.
    //             span.style.backgroundColor = "red";

    //             // 2. 구조의 중첩에서 태그명이 고정이 아닌경우는?
    //             // li도 span도 다른 태그로 변경이 될 수 있다면? -> 클래스명을 이용하시오.
                


    //             // 현재 선택된 박스가 빨간색으로 변한다.
    //             // 하지만 선택에 문제가 있다. 이걸 대충하면 나중에 문제가 커질 수 있다.
    //             // current 값을 출력해보시오.
    //             console.log(current);


    //         }

        


    //     // 이벤트 종류
    //     // Event 객체의 속성
    //     // target / currentTarget
    //     // ┌─────────┐
    //     // │   A     │
    //     // │ ┌─────┐ │
    //     // │ │ B   │ │
    //     // │ │     │ │
    //     // 커서가 B를 클릭한거야
    //     // 그럼 현재 이벤트가 발생한 녀석은 B이다. 맞죠?
    //     // A.onclick = funciton(e){
    //     //    console.log(e.target);//->?->B
    //     //    console.log(e.currentTarget); //->?->A
    //     // }
    //     // B.onclick = funciton(e){
    //     //    console.log(e.target);//->?->B
    //     //    console.log(e.currentTarget); //->?->B
    //     // }
        

    // }

    // 3. 노드 조작을 위한 예제 1
    {
        let s1 = document.querySelector("#s1");
        
        let btnUp = s1.querySelector(".btn-up");
        let btnDown = s1.querySelector(".btn-down");
        let current = s1.querySelector(".current");;
        btnUp.onclick = function(){
            // current 항목을 위로 올리기
        }

        btnDown.onclick = function(){
            // current 항목을 밑으로 내리기
            // 그 다음놈???? 어떻게 얻지?
            // 노드 순회 **************
            // current.nextSibling?? 모든 노드를 대상으로함.
            // current.nextElementSibling; // Element 인터페이스 기능
            // current.parentElement;
            // current.previousElementSibling;
            // current.firstElementChild;
            // current.lastElementChild;

            // current
            // nextElementSibling
            // 다음을 내리는 코드 1
            // after() / append() / prepend() / append()
            //current.nextElementSibling.after(current);

            // 다음으로 내리는 코드 2
            // insertAdjacentElement() / replaceChildren()
            // 부모.replaceChild() / 자식.replaceWith(자식);
        }
    }

    // 2. 노드 조작
    {
        let s1 = document.querySelector("#s1");
        let first = s1.querySelector("li:first-child");
        console.log(first);
        // 삭제
        //first.parentNode.removeChild(first); // Node 인터페이스에 있는 기능
        //first.remove(); // Element 인터페이스에 있는 기능

        // 추가
        {
            let li = this.document.createElement("li");
            let txt = this.document.createTextNode("c");
            let ul = s1.querySelector("ul");
            // ul.appendChild(li); 
            // li.appendChild(txt);// Node 인터페이스에 정의되어 있는 기능
            //ul.append(li);  // Element 인터페이스
            li.append(txt);
        }
        // 변경
        {
            // let li = s1.querySelector("ul>li:first-child");
            // let last = s1.querySelector("ul>li:last-child");
            let ul = s1.querySelector("ul");
            let li = ul.querySelector("li:first-child");
            let newOne = ul.querySelector("li:last-child");

            // li->last 위치로 옮기는? 코드?
            //let oldOne = ul.replaceChild(newOne,li);
            //ul.appendChild(oldOne);

            

        }



    }

    // 1. 노드 선택
    {
        // Selecters API
        // let s1 = document.querySelector("#s1");
        // let lis = s1.querySelectorAll("li");

        //------------------------------------------

        // document 객체를 이용한 선택:id 또는 tagName
        // document 객체를 이용할 때는 섹션이나 콤포넌트 단위를
        // 선택할 때 유용하다.
        //let s1= document.getElementById("s1");
        //let s1 = document.getElementsByTagName("section");
        //let s1 = document.body.getElementsByClassName("section1");
        //console.log(s1[0]);

        // document 객체를 이용해서 선택한 콤포넌트의 하위 자식을
        // 검색할 때는 Element Node 객체의 기능을 이용한다.
        //s1.getElementsByTagName("");
        // s1.getElementsByClassName("aaa");
        // console.log(s1[0]);

        // 노드 생성
        // let node = document.createTextNode("hello");
        // document.body.append(node);
    }

});