<script setup>
var slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
const coverImages = [
  '/img/cover.jpg',
  '/img/cover2.jpg',
  '/img/cover3.jpg',
  '/img/cover4.jpg',
]

function showSlide(n) {
  if (
    (slideIndex == 0 && n == -1) ||
    (slideIndex == slides.length - 1 && n == 1)
  ) {
    slideIndex += 0;
    } else {
    slideIndex += n;
    }
  currentSlide(slideIndex);
  }

function currentSlide(n) {
  slideIndex = n;

  for (var i = 0; i < slides.length; i++) {
    slides[i].style = "display: none";
    dots[i].classList.remove("dot-filled");
  }

  slides[slideIndex].style = "display: block";
  dots[slideIndex].classList.add("dot-filled");
}
</script>

<template>
  <div class="slideshow">
    <div class="slideshow_img">
      <div class="img_container">
        <v-img
          class="mySlides"
          :src="coverImages[0]"
          style="display: block"
        />
        <v-img
          class="mySlides"
          :src="coverImages[1]"
        />
        <v-img
          class="mySlides"
          :src="coverImages[2]"
        />
        <v-img
          class="mySlides"
          :src="coverImages[3]"
        />
      </div>
    </div>
    <div class="slideshow_nav">
      <span class="arrow" @click="showSlide(-1)">&#10094;</span>
      <span class="dot dot-filled" @click="currentSlide(0)"></span>
      <span class="dot" @click="currentSlide(1)"></span>
      <span class="dot" @click="currentSlide(2)"></span>
      <span class="dot" @click="currentSlide(3)"></span>
      <span class="arrow" @click="showSlide(1)">&#10095;</span>
    </div>

    <v-btn @click="$router.push('/products')" variant="tonal" size="small" rounded="xl">
        Shop Now
    </v-btn>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/home.scss";
</style>
