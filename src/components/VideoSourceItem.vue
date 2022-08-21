<template>
  <source :src="url" :type="type" :media="media">
</template>
<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "VideoItem",
  props: ["url", "type", "media"]
});
</script>

<style scoped>

</style>
