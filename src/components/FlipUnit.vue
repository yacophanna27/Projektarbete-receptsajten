<script>
export default {
    name: "FlipUnit",

    props: {
        label: String,
        value: Number
    },

    data() {
        return {
            previousValue: this.value,
            flip: false
        };
    },

    computed: {
        formattedValue() {
            return this.value.toString().padStart(2, "0");
        }
    },

    watch: {
        value(newVal, oldVal) {
            this.previousValue = oldVal;
            this.flip = true;

            setTimeout(() => {
                this.flip = false;
            }, 600);
        }
    }
};
</script>


<template>
    <div class="flip-unit">
        <div class="label">{{ label }}</div>

        <div class="card">
            <!-- statisk övre halva -->
            <div class="upper">
                {{ formattedValue }}
            </div>

            <!-- statisk undre halva -->
            <div class="lower">
                {{ formattedValue }}
            </div>

            <!-- flip-animation: övre halvan flippas ner -->
            <div class="flip" v-if="flip">
                <div class="flip-upper">
                    {{ previousValue }}
                </div>
                <div class="flip-lower">
                    {{ formattedValue }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.flip-unit {
    text-align: center;
    position: relative;
}

.label {
    margin-bottom: 4px;
    font-size: 11px;
    color: goldenrod;
    text-transform: uppercase;
}

/* Huvudkort */
.card {
    position: relative;
    width: 70px;
    height: 40px;
    background: #5e2b87;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

/* statiska halvor */
.upper,
.lower {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: goldenrod;
    position: absolute;
    left: 0;
}

.upper {
    top: 0;
}

.lower {
    bottom: 0;
}

/* anim. container */
.flip {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    perspective: 400px;
}

/* övre halva som flippas */
.flip-upper {
    width: 100%;
    height: 50%;
    background: #111;
    color: goldenrod;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20x;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: bottom;
    animation: flip-down 0.6s forwards;
}

/* nedre halva syns under flippet */
.flip-lower {
    width: 100%;
    height: 50%;
    background: #111;
    color: #5e2b87;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
}

@keyframes flip-down {
    0% {
        transform: rotateX(0deg);
    }

    100% {
        transform: rotateX(-90deg);
    }
}
@media (max-width: 600px) {
    .card {
        width: 40px;
        height: 50px;
    }

    .upper,
    .lower {
        font-size: 20px;
    }

    .flip-upper,
    .flip-lower {
        font-size: 20px;
    }
}
</style>
