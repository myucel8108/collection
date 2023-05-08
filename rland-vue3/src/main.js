import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Index from './components/Index.vue';
import Layout from  './components/Layout.vue'
import Login from './components/login.vue'
import{createPinia} from 'pinia';
import AdminLayout from './components/admin/inc/Layout.vue';
import AdminMenuList from './components/admin/menu/List.vue';
import AdminMenuDetail from './components/admin/menu/Detail.vue';
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    
    {
        path: '/', component: Layout, children: [
            { path: 'index', component: Index },
            { path: 'login', component: Login },
        ]
    },
    {
        path: '/admin', component: AdminLayout, children: [
            {
                path: 'menu', children: [
                    { path: 'list', component: AdminMenuList },
                    { path: 'detail', component: AdminMenuDetail },
                ],
                BeforeRouteEnter(to,from,next){
                    console.log("asdfasdfasdfasdf");
                }
            },
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
const pinia = new createPinia();

createApp(App)
.use(router)
.use(pinia)
.mount('#app')