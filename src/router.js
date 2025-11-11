import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import RecipePage from './components/RecipePage.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage},
        { path: '/recipe/:id', name: 'RecipePage', component: RecipePage, props: true },
    ]
});
