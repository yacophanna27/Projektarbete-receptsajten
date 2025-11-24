<template>
    <div class="drop-down-menu" @click="isOpen = !isOpen">
        <div class="dropBtn">
            <i class="bi bi-filter-square"></i>
        </div>
        
        <div class="dropdown-content" v-if="isOpen">
            <ul>
                <li v-for="(item, index) in value" :key="index" @click.stop="selectItem(item)" role="button"
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
    props: ["label", "value"],
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        selectItem(item) {
            this.$emit('item-selected', item.value);
            this.isOpen = false;
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
    background-color: rgb(218, 212, 138);
    max-width: max-content;
    cursor: pointer;
    justify-content: center;
    
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