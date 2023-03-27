<script>
export default {
    props: {
        formData: {
            type: Object,
        },
    },
    data() {
        return {
            rules: {
                required: [value => !!value || "Required"]
            },
            formValues : {
                firstName: this.formData ? this.formData.creditCardNumber : null,
                lastName: this.formData ? this.formData.expiryDate : null,
                address: this.formData ? this.formData.cvv : null,
                country: this.formData ? this.formData.name : null,
            }
        }
    }
}
</script>

<template>
    <v-form v-model="valid" ref="debitChargeForm">
        <v-row class="mt-3">
            <v-col cols="6">
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="shippingForm.validate()"
                    v-model="creditCardNumber"
                    :rules="rules.required"
                    label="Card Number"
                    density="compact"
                    append-inner-icon="mdi-credit-card-outline"
                ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="shippingForm.validate()"
                    v-model="expiryDate"
                    :rules="rules.required"
                    label="MM / YY"
                    density="compact"
                ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="shippingForm.validate()"
                    v-model="cvv"
                    :rules="rules.required"
                    label="CVV"
                    density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="shippingForm.validate()"
                    v-model="name"
                    :rules="rules.required"
                    label="Card Holder"
                    density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-form>
</template>