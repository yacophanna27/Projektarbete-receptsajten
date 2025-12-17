/*Not completed, not working*/

<script>
export default {
  name: "RollingText",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  mounted() {
    console.log("RollingText mounted ✅");

    const element = this.$el; // vårt <a>
    const innerText = this.text;

    // töm innehållet
    element.innerHTML = "";

    // skapa block
    const textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for (let letter of innerText) {
      const span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter");
      textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));

    // startanimation
    setTimeout(() => {
      element.classList.add("play");
      console.log("Animation started 🎬");
    }, 600);

    element.addEventListener("mouseover", () => {
      element.classList.remove("play");
    });
  }
};
</script>
<template>
  <a class="rolling-text" href="#">{{ text }}</a>
</template>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

$delay: 0.015s;
$duration: 0.6s;
$easing: cubic-bezier(0.76, 0, 0.24, 1);
$font-size: 48px;

.rolling-text {
  display: inline-block;
  font-family: 'Playfair Display', serif;
  font-size: $font-size;
  line-height: $font-size * 1.5;
  letter-spacing: $font-size / 2;
  height: $font-size * 1.5;
  text-decoration: none;
  overflow: hidden;
  color: #1a1a1a;

  &:hover,
  &.play {
    .letter {
      transform: translateY(-100%);
    }
  }

  .block:last-child {
    color: #d3a13b;
  }

  .letter {
    display: inline-block;
    transition: transform $duration $easing;
  }
}

@for $i from 0 through 20 {
  .letter:nth-child(#{$i + 1}) {
    transition-delay: $delay * $i;
  }
}
</style>
