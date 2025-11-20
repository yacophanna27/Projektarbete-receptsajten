<template>
    <div class="drop-down-menu" @click="isOpen = !isOpen">
        <button class="dropbtn">
            {{ label }}
        </button>
        <div class="dropdown-content" v-if="isOpen">

            <ul>
                <li v-for="(item, index) in value" :key="index"
                @click.stop="selectItem(item)" role="button" tabindex="0">
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
.dropdown-content {
    background-color: beige;
    max-width: max-content;
    cursor: pointer;
   
    
}
</style>