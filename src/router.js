import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './Views/HomeView.vue';
import RecipeView from './Views/RecipeView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView},
        { path: '/recipe/:id', name: 'RecipeView', component: RecipeView, props: true },
    ]
});
