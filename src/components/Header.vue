<script>
  export default {
    data: () => ({
        drawer: false,
        group: null,
        items: [
            {
                id: '',
                title: "All",
            },
            {
                id: 1,
                title: "Exfoliator",
            },
            {
                id: 2,
                title: "Face Wash",
            },
            {
                id: 3,
                title: "Toner",
            },
            {
                id: 4,
                title: "Serum",
            },
            {
                id: 5,
                title: "Essence",
            },
            {
                id: 6,
                title: "Face Oil",
            },
            {
                id: 7,
                title: "Moisturizer",
            },
            {
                id: 8,
                title: "Sunscreen",
            },
        ],
    }),
    methods:{
        login(){
            this.$keycloak.keycloak.login();
        },
        logout(){
            this.$keycloak.keycloak.logout();
        }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<template>
    <v-app-bar elevation="0">
        <v-app-bar-nav-icon style="margin-right: 5%" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title class="text-center font-weight-bold text-h4 text-white">
            <RouterLink to="/">
                <img
                    id="logo"
                    alt="logo"
                    src="/logo.svg"
                    width="170"
                />
            </RouterLink>
        </v-app-bar-title>
        <template v-slot:append>
            <v-btn @click="$router.push('/profile')" icon="mdi-emoticon-happy-outline"></v-btn>
            <v-btn @click="$router.push('/cart')" icon="mdi-cart-outline"></v-btn>
        </template>
    </v-app-bar>
    <v-navigation-drawer temporary border=false elevation="0" v-model="drawer">
        <v-list>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="'/products/' + item.id"
            >
                <h3>{{ item.title }}</h3>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>