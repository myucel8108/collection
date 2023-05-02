import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Index from './components/Index.vue';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: 'index', component: Index },

    {
        path: '/', component: Layout, children: [
            { path: 'login', component: Login },
        ]
    },
    {
        path: '/admin', component: AdminLayout, children: [
            {
                path: 'menus', component: MenuLayout, children: [
                    { path: 'menus', component: MenuList },
                    { path: 'detail', component: MenuDetail },
                ]
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


createApp(App).use(router).mount('#app')