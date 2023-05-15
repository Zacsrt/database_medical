import mdForm from './components/mdForm.vue';
import mdList from './components/mdList.vue';
import mdUpdate from './components/mdUpdate.vue';
import { createRouter,createWebHistory } from 'vue-router';

const routes=[
    {
        name:'mdForm',
        component:mdForm,
        path:'/',
    },
    {
        name:'mdList',
        component:mdList,
        path:'/md-List',
    },
    {
        name:'mdUpdate',
        component:mdUpdate,
        path:'/md-Update/:id',
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;