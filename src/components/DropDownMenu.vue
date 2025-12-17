<script>
export default {
    name: "DropDownMenu",
    // binder propen i categoryView mot value 
    props: {
        items: {
            type: Array,
            required: true
        }
     },

    
     data() {
        return {
            isOpen: false // håller menyn stängd som default tills någon trycker på den
        };
    },

    methods: {
        selectItem(item) {
            this.$emit('item-selected', item); //emiten skickar signal till CategoryView så den kan reagera på eventet
        }
    }
}

</script>

<template>
    <div class="drop-down-menu">
        <button class="dropBtn" @click="isOpen = !isOpen" aria-label="Filter menu">
            Categories
        </button>

        <!-- 
        en forloop som loopar genom items(motsvarar value i categoryView) 
        med index .
        -->
        <div class="dropdown-content" v-if="isOpen">
            <ul>
                <li v-for="item in items" :key="item.value" @click="selectItem(item.value)" @keydown.enter="selectItem(item.value)"
                role="button" tabindex="0">
                    {{ item.label }}

                </li>
            </ul>

        </div>
    </div>
</template>

<style scoped>
.drop-down-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2000;
    margin-top: 3rem;
}

.dropBtn {
    background: rgba(163, 131, 189, 0.195);
    font-size: 1.1rem;
    font-weight: 700;
    color: rgb(196, 178, 59);
    border: none;
    width: 18.5rem;
    padding: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem;
    transition: transform 0.2s ease;
    margin-top: 1.5rem;
}
.dropdown-content {
    background-color: rgba(179, 145, 207, 0.178);
    width: 18.5rem;
    border-bottom-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    margin-top: 0.1rem;
    color: rgb(196, 178, 59);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.dropdown-content ul {
    margin: 0;
    padding: 0;
}

.dropdown-content li {
    padding: 0.7rem 1rem;
    list-style: none;
    border-bottom: 1px solid rgb(51, 13, 83);
    text-align: center;
    font-size: 1.1rem;
    text-transform: capitalize;
    
}

.dropdown-content li:last-child {
    border-bottom: none;
}


</style>