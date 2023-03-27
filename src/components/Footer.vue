<script setup>
    var links = [
        {
            title: "About",
            path: '/about',
        },
        {
            title: "Team",
            path: '/team',
        },
        {
            title: "Impressum",
            path: '/impressum',
        }
    ]
</script>

<template>
    <v-footer id="footer">
        <v-row justify="center" no-gutters>
            <v-btn
                v-for="link in links"
                :key=link
                variant="text"
                class="mx-2"
                rounded="xl"
                :to=link.path
            >
                <p>{{ link.title }}</p>
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                <p>@ 2023 — [Kbe]auty</p>
            </v-col>
        </v-row>
    </v-footer>
</template>

<style scoped>
.v-footer {
    bottom: 0;
    position: fixed;
    width: 100%;
}
</style>