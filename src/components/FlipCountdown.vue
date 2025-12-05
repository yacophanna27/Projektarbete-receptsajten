<script>
import FlipUnit from "./FlipUnit.vue";

export default {
    name: "FlipCountdown",
    components: { FlipUnit },

    data() {
        return {
            timer: null,
            targetDate: new Date("2025-12-31T00:00:00").getTime(),
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    },

    methods: {
        updateCountdown() {
            const now = Date.now();
            const diff = this.targetDate - now;

            if (diff <= 0) {
                this.days = this.hours = this.minutes = this.seconds = 0;
                clearInterval(this.timer);
                return;
            }

            this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            this.minutes = Math.floor((diff / (1000 * 60)) % 60);
            this.seconds = Math.floor((diff / 1000) % 60);
        }
    },

    mounted() {
        this.updateCountdown();
        this.timer = setInterval(this.updateCountdown, 1000);
    },

    beforeUnmount() {
        clearInterval(this.timer);
    }
};
</script>

<template>
    <div>

        <!-- <h1 class="title">New Year Countdown!</h1> -->

        <div class="countdown">
            <!-- enheter här -->
        </div>

    </div>
    <div class="countdown">

        <div class="unit">
            <FlipUnit label="Days" :value="days" />
        </div>

        <div class="unit">
            <FlipUnit label="Hours" :value="hours" />
        </div>

        <div class="unit">
            <FlipUnit label="Minutes" :value="minutes" />
        </div>

        <div class="unit">
            <FlipUnit label="Seconds" :value="seconds" />
        </div>

    </div>
</template>

<style scoped>
.countdown {
    align-items: center;
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10 px;
    font: Monsterat, sans-serif;
}

.title {
    text-align: center;
    color: goldenrod;
}
</style>
