<script>
//options API를 사용하는 방법
//추가 option API에 함수를 등ㄺ할려면 import를 해야하는데 이에 예시는
//import Header from './components/Header.vue';
export default {
  // components:{
  //   Header
  // },
  data() {
    return {
      a: 10
    };
  }
  ,
  //Option API에서 사용했던 메서드 정리
  // methods:{
  //   cilckHandler(){
  //     console.log("클릭")
  //   }
  // }
  //직접 랜더링을 한다는 방식-> 하지만 자주 사용되지 않는다 최소한의 속성으로 화면을 변경하고 일괄적으로 화면 랜더링에 사용하는 방식
  //리얼 DOM이 아닌 가상 DOM!
  // render(){ 


  // }
  // computed:{ // 특정 값이 바뀌면 밑에 함수들을 실행하는 것!
  //   total(){  //
  //     return this.a+2;
  //   }
  // }
}
</script>
<script setup>
//컴포지션을 지원하는 setup
import Header from './components/Header.vue';
import { onMounted, ref, reactive, computed } from 'vue';
let b = 30;
let c = ref(30);

//시시각각 가격 바꾸기
let menu = ref({
  id: 1,
  name: "아메리카노",
  price: 3000
});

//이 안에 있는 애들만 바뀌게 하면 twoway방식을 사용할 수 있다.
let model = reactive({
  newlist:[],
  list:[]
});
//-----------------------------
//컴포넌트를 만들때 라이플 사이클을 이런방식으로 할 수 있다!
onMounted(() => {
  console.log("onMounted");
  console.log(`b:${b.value}`);
  console.log(`menu.price:${menu.price}`);
  load();

})
//컴포넌트 API에서 함수 구현방법
// function cilckHandler(){
//   console.log("딸깍");
// }
const clockHandler2 = ()=>{
  console.log(`람다식!-> 코드에서 연산식을 사용할때 다른 곳에서 식을 사용할때 사용
  수식을 전달할떄+ 다른 함수에게 인자로 전달할 때!
  특히 빅데이터 인공지능사용할때 자주 볼 수 있다!
  단 이건 모듈화의 기본은 아니다!-> 모듈은 고립화가 이뤄져야한다
  같이 상호작용할 이유가 없는데 람다식을 사용해야하나..?
  `);
}
        // 이벤트 핸들러------------------------
        // function clickHandler2(){
        //     console.log("클릭 헤헼")
        // }
        async function load(){

          //await방식!
            let response= await fetch ("http://192.168.0.33:8080/menus");
            let json = await response.json();
            model.list = json.list; //이렇게 담으면 안된다!
            //이유1. 배열로 만든 list를 그냥 만들면 twoway방식이 안된다!
            //이유2. let list =reative([])를 이용하면 list =json.list;일때 리액티브가 없어져버린다! 그래서 위와 같은 방식
            //을 사용해서 리액티브를 지키면서 안에 속성은 바뀔 수 있게 한거다
            console.log(model.list);


             //promise!
        //      fetch("http://192.168.0.33:8080/menus")
        //      .then(res=>res.json())
        //      .then(json=>json.list)
        //      .then(a=>{
        //         list = a;
        // });
        }    
// 연습용let total =computed(()=>c.value+3);
let total = computed(()=>model.list.map((m)=>m.price).reduce(p,c=>p+c,0));
        

const clickHandler = ()=>{
            console.log("클릭 헤헼");
            load();

            
        }
        // let total = computed(()=>{
        //   let result =0;
        //   for(let m of model.list)
        //     result+= m.price;
        //     return result;
        // });
        


</script>

<template>
  <Header />
  
  hello {{ a }} {{ b }} {{ c }}
  <div>
        <ul>
            <li v-for=" m in model.list">
                <span >{{ m.name }}</span>

            </li>
        </ul>
      </div>
      <!-- Option API사용 -->
      <div>{{total}}</div>
  <div>
    a:<span v-text="a"></span><input v-model.number="a" />
    <!--  -->
    b:<span v-text="b"></span><input v-model="b" />
    <!-- model로 two way방식이 되는지 확인 -->

    <!--a는 값이 바뀌면 화면이 다시 바뀌는 two-way가 지원되는데
    b는 지원이 안된다.
      그렇다면 composition API에는 two way가 없을까..?
  -->
    <!-- 컴포지션에 ref를 넣어보자!-->
    c:<span v-text="c"></span><input v-model.number="c" />
    <!--메뉴를 이용해서 가격을 계속 바꿔보자!-->
    menu.price:<span v-text="menu.price"></span><input v-model="menu.price" />
    <button @click="clickHandler"></button>
  </div>
</template>
<style></style>