<script setup lang="ts">
const { data } = useFetch("/api/fetch-accounts")
</script>

<template lang="pug">
ul
  li(v-for="(account, index) in data" :key="account.id")
    a(href="#")
      | {{ account.username }}
</template>
