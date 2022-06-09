<script setup lang="ts">
type Form = {
  username: string
  password: string
}

const form = reactive({} as Form)

const submitting = ref(false)
const onSubmit = () => {
  submitting.value = true
  $fetch("/api/create-account", { method: "post", body: form })
    .then()
    .catch((e) => alert(e))
    .finally(() => {
      submitting.value = false
    })
}
</script>

<template lang="pug">
form(@submit.prevent="onSubmit" class="border rounded-md shadow-lg p-4 container mx-auto")
  label
    span user name
    input(v-model="form.username")
  label
    span password
    input(type="password" v-model="form.password")
  button(:disabled="submitting" class="text-white bg-blue-400 p-2 mt-6 rounded") submit
</template>

<style scoped>
label {
  @apply block;
}
label + label {
  @apply mt-4;
}

label span {
  @apply block mb-2;
}

input {
  @apply border p-2 w-full;
}
</style>
