import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './Views/HomeView.vue';
import RecipeView from './Views/RecipeView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', 
        component: HomeView, 
        props:true },

        // Category routningen 
        {path: '/category/:category',
        name: 'CategoryView',
        component: HomeView, 
        props: true,

        },

        // La till category i pathen 
        {path: '/recipe/:id', 
        name: 'RecipeView', 
        component: RecipeView, 
        props: true },
    ]
});
