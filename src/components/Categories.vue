<script>
export default {
    name: 'Categories',
    data() {
        return {
            categories: [
                { label: 'All', value: 'all' },
                { label: 'Starters', value: 'starter' },
                { label: 'Main Courses', value: 'main course' },
                { label: 'Desserts', value: 'dessert' },
                { label: 'Drinks', value: 'drink' }
            ]
        };
    },
    methods: {
        selectCategory(value) {
            this.$emit('category-selected', value);
        }
    },
}

</script>

<template>
    <ul class=" categories">
        <li v-for="category in categories" :key="category.value" @click="selectCategory(category.value)">
            {{ category.label }}
        </li>

    </ul>
</template>


<style scoped>
.categories {
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-top: 4rem;

}

.categories li {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(133, 99, 178, 0.5);
    backdrop-filter: blur(20px);
    padding: 1.2rem 2.5rem;
    margin-bottom: 1.5rem;
    margin-inline: 1rem;
    border-radius: 2rem;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    cursor: pointer;

}
</style>