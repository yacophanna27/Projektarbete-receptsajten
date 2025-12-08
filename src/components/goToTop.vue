<script>
export default {
    name: "GoToTop",
    data() {
        return {
            isVisible: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollFunction);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.scrollFunction);
    },
    methods: {
        topFunction() {
            // Smooth scroll för bättre användarupplevelse och tillgänglighet
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        scrollFunction() { // Gör så att knappen visas efter 20px scroll
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                this.isVisible = true;
            } else {
                this.isVisible = false;
            }
        }
    }
}
</script>

<template>
    <button 
        v-show="isVisible" 
        @click="topFunction" 
        id="go-to-top" 
        type="button"
        title="Go to top"
        tabindex="0"
    >
        <i class="bi bi-arrow-up"></i>
    </button>
</template>

<style scoped>
#go-to-top {
    position: fixed;
    bottom: 50px;
    right: 70px;
    z-index: 99;
    border: 2px solid transparent;
    outline: none;
    cursor: pointer;
    font-size: 50px;
    background-color: #5e2b87;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

#go-to-top:focus {
    outline: 3px solid #ffffff;
    outline-offset: 2px;
    border-color: #ffffff;
    box-shadow: 0 0 0 5px rgba(94, 43, 135, 0.3);
}

#go-to-top:hover,
#go-to-top:focus {
    transform: scale(1.15);
    background-color: #7d3ba8;
}

#go-to-top:active {
    transform: scale(1.05);
}

#go-to-top i {
    color: #e1c7ea;
}
</style>