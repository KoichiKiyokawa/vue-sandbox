<script setup lang="ts">
import AccountShowPage from "~/domains/account/pages/AccountShowPage.vue"

const route = useRoute()
</script>

<template lang="pug">
AccountShowPage(:id="Number(route.params.id) || 1")
</template>
