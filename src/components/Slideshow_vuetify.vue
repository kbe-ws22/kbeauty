<template class="slideshow">
    <div class="slideshow">
        <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
                cycle
            ></v-carousel-item>

            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                cover
                cycle
            ></v-carousel-item>

            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
                cycle
            ></v-carousel-item>
        </v-carousel>
        <v-btn @click="$router.push('/products')" variant="tonal" size="small" rounded="xl">
            Shop Now
        </v-btn>
    </div>
</template>

<style scoped>
.slideshow {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}
</style>