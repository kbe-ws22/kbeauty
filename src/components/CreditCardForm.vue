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
                required: [value => !!value || "This field is required."]
            },
            formValues : {
                firstName: this.formData ? this.formData.firstName : null,
                lastName: this.formData ? this.formData.lastName : null,
                address: this.formData ? this.formData.address : null,
                country: this.formData ? this.formData.country : null,
                city: this.formData ? this.formData.city : null,
                zipCode: this.formData ? this.formData.zipCode : null,
                phoneNumber: this.formData ? this.formData.phoneNumber : null,
            }
        }
    }
}
</script>

<template>
    <v-form v-model="valid" ref="shippingForm">
        <v-row>
            <v-col>
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="shippingForm.validate()"
                    v-model="creditCardNumber"
                    :rules="rules.required"
                    label="First name"
                    density="compact"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="shippingForm.validate()"
                    v-model="lastName"
                    :rules="rules.required"
                    label="Last name"
                    density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="shippingForm.validate()"
                    v-model="address"
                    :rules="rules.required"
                    label="Address"
                    density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="shippingForm.validate()"
                    v-model="country"
                    :rules="rules.required"
                    label="Country"
                    density="compact"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="shippingForm.validate()"
                    v-model="city"
                    :rules="rules.required"
                    label="City"
                    density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="shippingForm.validate()"
                    v-model="zipCode"
                    :rules="rules.required"
                    label="Zip Code"
                    counter="5"
                    type="number"
                    density="compact"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="shippingForm.validate()"
                    v-model="phoneNumber"
                    :rules="rules.required"
                    label="Phone Number"
                    type="number"
                    density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-form>
</template>