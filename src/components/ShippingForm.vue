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
            firstName: '',
            lastName: '',
            address: '',
            country: '',
            city: '',
            zipCode: '',
            phoneNumber: '',
        }
    }
}
</script>

<template>
    <v-form ref="shippingForm">
        <v-row>
            <v-col>
                <v-text-field
                    v-model="firstName"
                    :rules="rules"
                    label="First name"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="lastName"
                    :rules="rules"
                    label="Last name"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="address"
                    :rules="rules"
                    label="Address"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="country"
                    :rules="rules"
                    label="Country"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="city"
                    :rules="rules"
                    label="City"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="zipCode"
                    :rules="rules"
                    label="Zip Code"
                    type="number"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="phoneNumber"
                    :rules="rules.required"
                    label="Phone Number"
                    type="number"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-form>
</template>