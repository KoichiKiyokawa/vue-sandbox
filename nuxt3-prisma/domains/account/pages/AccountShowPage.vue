<script setup lang="ts">
const props = defineProps<{ id: number }>()

const { data } = useFetch("/api/fetch-account", {
  method: "post",
  body: { id: props.id },
})
</script>

<template lang="pug">
pre {{JSON.stringify(data, null, 2)}}
</template>
