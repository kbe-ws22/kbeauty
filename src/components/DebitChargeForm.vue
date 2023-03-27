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
                firstName: this.formData ? this.formData.name : null,
                lastName: this.formData ? this.formData.iban : null,
            }
        }
    }
}
</script>

<template>
    <v-form v-model="valid" ref="debitChargeForm">
        <v-row class="mt-3">
            <v-col>
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="debitChargeForm.validate()"
                    v-model="name"
                    :rules="rules.required"
                    label="Account Holder"
                    density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    @input="$emit('save-form-data', formValues)"
                    @update="debitChargeForm.validate()"
                    v-model="iban"
                    :rules="rules.required"
                    label="IBAN"
                    density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-form>
</template>

<style>

</style>