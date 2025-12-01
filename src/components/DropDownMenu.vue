<template>
    <div class="drop-down-menu" @click="isOpen = !isOpen">
        <div class="dropBtn">
            <i class="bi bi-filter-square"></i>
        </div>
        
        <!-- 
        en forloop som loopar genom items(motsvarar value i categoryView) 
        med index .
        -->
        <div class="dropdown-content" v-if="isOpen">
            <ul>
                <li v-for="(item, index) in items" :key="index" @click="selectItem(item)" role="button"
                    tabindex="0">
                    {{ item.label }}

                </li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {
    name: "DropDownMenu",
    // binder propen i categoryView mot value 
    props: {
        items: {
            type: Array,
            required: true,

        }
    },
    data() {
        return { 
            isOpen: false // håller menyn stängd som default tills någon trycker på den
        };
    },
    methods: {
        selectItem(item) {
            this.$emit('item-selected', item.value); //emiten skickar signal till CategoryView så den kan reagera på eventet
        }
    }
    
    }

</script>

<style scoped>
.drop-down-menu {
    display: flex;
    justify-content:right;
    flex-direction: column;
    margin-left: 200px;
    z-index: 2000;
}
.dropdown-content {
    background-color: rgb(212, 186, 233);
    width: 7rem;
    cursor: pointer;
    justify-content: center;
    border-radius: 0.2rem;
    color: rgb(51, 6, 51);
} 
.dropdown-content li {
    padding: 0.5rem 1rem;
    list-style: none;
    border-bottom: 1px solid var(--color-gold);
    
}
.bi-filter-square {
    font-size: 2rem;
    color: var(--color-gold);
    cursor: pointer;
    
}

</style>