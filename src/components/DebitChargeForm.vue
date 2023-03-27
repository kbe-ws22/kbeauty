<script>
export default {
    props: {
        formData: {
            type: Object,
        },
    },
    data() {
        return {
            rules: [
                value => {
                if (value) return true
                return 'Required'
            }],
            name: '',
            iban: ''
        }
    }
}
</script>

<template>
    <v-form ref="debitChargeForm">
        <v-row class="mt-3">
            <v-col>
                <v-text-field
                    v-model="name"
                    :rules="rules"
                    label="Account Holder"
                    density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="iban"
                    :rules="rules"
                    label="IBAN"
                    density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-form>
</template>

<style>

</style>