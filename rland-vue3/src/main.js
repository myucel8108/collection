import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/index', component: Index },

    {
        path: '/', component: Layout, children: [
            { path: '/login', component: Login },
        ]
    },

    {
        path: '/admin', component: AdminLayout, children: [
            {
                path: 'menus', component: Layout, children: [
                    { path: 'list', component: MenuList },
                    { path: 'detail', component: MenuDetail }
                ]
            },     //메뉴와 관련된 레이아웃이 있다면
        ]
    },

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
//Vue.createApp() 글로벌 라이브러리
createApp(App).mount('#app')
