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
    .catch()
    .finally(() => {
      submitting.value = false
    })
}
</script>

<template lang="pug">
form(@submit.prevent="onSubmit")
  input(v-model="form.username")
  input(type="password" v-model="form.password")
  button
</template>
