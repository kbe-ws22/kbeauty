<script setup>
const props = defineProps({
    images: {
        type: Array,
        required: true,
    }
})

var slideIndex = 1;

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("big_img");
  var dots = document.getElementsByClassName("small_img");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style.opacity = 0.5;
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].style.opacity = 1;
}
</script>

<template>
    <div class="grid">
        <div>
            <div class="img_container">
                <img class="small_img" :src="props.images[0]" @click="currentDiv(1)" />
            </div>
            <div class="img_container">
                <img class="small_img" style="opacity: 0.5" :src="props.images[1]" @click="currentDiv(2)" />
            </div>
            <div class="img_container">
                <img class="small_img" style="opacity: 0.5" :src="props.images[2]" @click="currentDiv(3)" />
            </div>
        </div>
        <div class="img_container">
            <img class="big_img" :src="props.images[0]" />
            <img class="big_img" :src="props.images[1]" style="display:none" />
            <img class="big_img" :src="props.images[2]" style="display:none" />
        </div>
    </div>
</template>

<style scoped>
.small_img {
    cursor: pointer;
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
}
.big_img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
}
.img_container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.grid{
    display: grid;
    grid-template-columns: 20% 80%;
    height: 500px;
}
</style>