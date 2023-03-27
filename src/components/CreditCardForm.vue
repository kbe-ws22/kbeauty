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
            creditCardNumber: '',
            expiryDate: '',
            cvv: '',
            name: ''
        }
    }
}
</script>

<template>
    <v-form ref="debitChargeForm">
        <v-row class="mt-3">
            <v-col cols="6">
                <v-text-field
                    v-model="creditCardNumber"
                    :rules="rules"
                    label="Card Number"
                    density="compact"
                    append-inner-icon="mdi-credit-card-outline"
                    type="number"
                ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field
                    v-model="expiryDate"
                    :rules="rules"
                    label="MM / YY"
                    density="compact"
                    type="number"
                ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field
                    v-model="cvv"
                    :rules="rules"
                    label="CVV"
                    density="compact"
                    type="number"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="name"
                    :rules="rules"
                    label="Card Holder"
                    density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-form>
</template>