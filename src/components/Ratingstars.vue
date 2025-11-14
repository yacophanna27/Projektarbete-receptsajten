<template>
    <div class="rating">
        <!-- Stora stjärnan visas alltid -->
        <div class="big-star">
            <i class="fas fa-star" :style="{ fontSize: `${1 + rating * 0.1}em` }"></i>
            <p class="selected-rating">{{ rating || '' }}</p>
        </div>

        <!-- När ej skickat: visa rubrik, stjärnor, feedback och knapp -->
        <div v-if="!submitted">
            <h3>Vad tyckte du om det här receptet?</h3>
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
            <button v-if="rating" type="button" @click="submitRating">Skicka betyg</button>
        </div>

        <!-- Efter submit: visa tack-text men behåll stora stjärnan och rubriken -->
        <div v-else class="thank-you">
            <p>Tack för ditt betyg!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Ratingstars',
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
    methods: {
        // Sätter hover-värde för att visa temporär highlight
        hoverStars(ratingValue) {
            this.hoverRating = ratingValue;
        },

        // Rensar hover (återställ till valt betyg)
        clearHover() {
            this.hoverRating = 0;
        },

        // Användaren klickar en stjärna -> spara betyg och uppdatera feedback
        selectRating(ratingValue) {
            this.rating = ratingValue;
            this.feedbackMessage = this.getFeedbackMessage(ratingValue);
        },

        // Returnerar feedback-text baserat på betyg
        getFeedbackMessage(ratingValue) {
            switch (String(ratingValue)) {
                case '1': return 'Kommer inte laga igen!';
                case '2': return 'Ganska gott..';
                case '3': return 'Mumsigt, kan förbättras.';
                case '4': return 'Riktigt gott!';
                case '5': return 'Bästa jag ätit!';
                default: return '';
            }
        },

        // Skickar betyget till localStorage och visar tack-text vid framgång
        async submitRating() {
            try {
                // Läs in befintliga betyg från localStorage (om några)
                const existingRatings = JSON.parse(localStorage.getItem('ratings') || '[]');

                // Lägg till det nya betyget med tidsstämpel
                existingRatings.push({
                    rating: this.rating,
                    date: new Date().toISOString()
                });

                // Spara tillbaka till localStorage
                localStorage.setItem('ratings', JSON.stringify(existingRatings));

                // Simulera kort väntetid (så användaren inte kan klicka igen)
                await new Promise(resolve => setTimeout(resolve, 250));

                // Visa tack-text och göm stjärnor/feedback
                this.submitted = true;
                this.feedbackMessage = '';
            } catch (error) {
                // Hantera fel vid localStorage (t.ex. i privata lägen där storage kan vara otillgängligt)
                this.feedbackMessage = 'Kunde inte spara betyget lokalt.';
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
    border-radius: 1em;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
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
</style>