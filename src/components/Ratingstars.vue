<template>
    <div class="rating">
        <!-- Stora stjärnan visas bara i interaktivt läge -->
        <div v-if="!readOnly" class="big-star">
            <i class="fas fa-star" :style="{ fontSize: `${1 + rating * 0.1}em` }"></i>
            <p class="selected-rating">{{ rating || '' }}</p>
        </div>

        <!-- Visa bara stjärnor för readOnly läge -->
        <div v-if="readOnly" class="readonly-stars">
            <ul class="stars">
                <li v-for="starNumber in 5" :key="starNumber" class="star" :class="{ selected: starNumber <= rating }">
                    <i class="fas fa-star"></i>
                </li>
            </ul>
        </div>

        <!-- När ej skickat: visa rubrik, stjärnor, feedback och knapp (döljs om readOnly) -->
        <div v-if="!submitted && !readOnly">
            <h3>What did you think of this recipe?</h3>
            <ul class="stars">
                <li v-for="starNumber in 5" :key="starNumber" class="star"
                    :class="{ selected: starNumber <= (hoverRating || rating) }" @mouseenter="hoverStars(starNumber)"
                    @mouseleave="clearHover" @click="selectRating(starNumber)">
                    <i class="fas fa-star"></i>
                </li>
            </ul>
            <p class="feedback-message" v-if="rating" :style="{ visibility: 'visible', opacity: '1' }">
                {{ feedbackMessage }}
            </p>
            <button v-if="rating" type="button" @click="submitRating">Submit Rating</button>
        </div>

        <!-- Efter submit: visa tack-text men behåll stora stjärnan och rubriken (bara om inte readOnly) -->
        <div v-else-if="!readOnly" class="thank-you">
            <p>Thank you for your rating!</p>
        </div>
    </div>
</template>

<script>
import { addRecipeRating } from '../APIutilities/apihelpers.js';

export default {
    name: 'Ratingstars',
    props: {
        initialRating: {
            type: Number,
            default: 0
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        recipeId: {
            type: [String, Number],
            default: null
        }
    },
    data() {
        return {
            // Sparar det valda betyget som ett antal (0 när inget valt)
            rating: 0,
            // Temporärt betyg vid hover för visuell feedback
            hoverRating: 0,
            // Feedback-text som visas baserat på valt betyg
            feedbackMessage: '',
            // true efter lyckad submit -> visar tack-text
            submitted: false
        };
    },
    mounted() {
        // Sätt initialt rating direkt från prop
        this.rating = this.initialRating || 0;
    },
    watch: {
        initialRating(newVal) {
            this.rating = newVal || 0;
        }
    },
    methods: {
        // Sätter hover-värde för att visa temporär highlight
        hoverStars(ratingValue) {
            this.hoverRating = ratingValue;
        },

        // Rensar hover (återställ till valt betyg)
        clearHover() {
            this.hoverRating = 0;
        },

        // Användaren klickar på en stjärna -> spara betyg och uppdatera feedback
        selectRating(ratingValue) {
            this.rating = ratingValue;
            this.feedbackMessage = this.getFeedbackMessage(ratingValue);
        },

        // Returnerar feedback-text baserat på betyg
        getFeedbackMessage(ratingValue) {
            switch (String(ratingValue)) {
                case '1': return 'Will not make again.';
                case '2': return 'Pretty good..';
                case '3': return 'Tasty, could be improved.';
                case '4': return 'Really good!';
                case '5': return 'Best I\'ve ever had!';
                default: return '';
            }
        },

        // Skickar betyget till API:t och visar tack-text om det fungerat
        async submitRating() {
            if (!this.recipeId) {
                console.error('No recipeId provided, cannot submit rating');
                this.feedbackMessage = 'Kunde inte skicka betyget - inget recept-ID.';
                return;
            }

            try {
                console.log(`Submitting rating ${this.rating} for recipe ${this.recipeId}`);
                console.log('Current submitted state:', this.submitted);

                // Skicka betyget till API:t
                const updatedRecipe = await addRecipeRating(this.recipeId, this.rating);
                console.log('Got updated recipe:', updatedRecipe);

                // Visa tack-text
                this.submitted = true;
                this.feedbackMessage = '';

                console.log('Set submitted to true, new state:', this.submitted);

                // Emittera det uppdaterade receptet till föräldrakomponenten
                this.$emit('rating-updated', updatedRecipe);

            } catch (error) {
                console.error('Failed to update recipe rating:', error);
                console.log('Error occurred, submitted stays:', this.submitted);
                // Visa felmeddelande till användaren om API-anropet misslyckas
                this.feedbackMessage = 'Kunde inte uppdatera betyget i databasen.';
            }
        }
    }
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

h3 {
    font-size: 1.6rem;
    text-align: center;
    width: 100%;
}

.rating {
    background-color: #f0e6f7;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    padding: 0.5em 2em 2em 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1.5rem;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
    border: 1em solid #f5f0f8;
}

.big-star {
    color: #c69c6d;
    font-size: 5em;
    position: relative;
    padding: 0 0 2em 0;
}

.big-star i {
    transition: 0.3s;
}

.big-star i,
.selected-rating {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.selected-rating {
    color: #fff;
    margin: 0;
    font-size: 0.5em;
}

.stars {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.star {
    cursor: pointer;
    margin-top: 1em;
    padding: 0 10px;
    font-size: 24px;
    color: #ccc;
    transition: color 0.2s, transform 0.2s;
}

.selected,
.star:hover {
    color: #c69c6d;
    transform: scale(1.1);
}

.feedback-message {
    margin: 20px;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    transition: visibility 0s, opacity 0.2s;
}

.feedback-message p {
    color: #666;
}

.rating button {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    background: #e1c7ea;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.2s ease;
    color: #444;
    align-self: center;
    margin-top: 1rem;
    margin: 1rem auto 0;
}

.rating button:hover {
    background-color: #d4b5dd;
    border: 1px solid #fff;
}

.thank-you {
    padding: 2rem 1rem;
    font-size: 1.6rem;
    font-weight: bold;
    color: #666;
    text-align: center;
}

.readonly-stars {
    padding: 0;
    margin: 0;
}

.readonly-stars .stars {
    margin: 0;
}

.readonly-stars .star {
    margin: 0 2px;
    padding: 0;
    cursor: default;
    font-size: 16px;
    margin-top: 0;
}

.readonly-stars .star:hover {
    transform: none;
}
</style>