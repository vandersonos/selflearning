<template>
  <h5 class="my-4">{{titulo}}</h5>
  <img :src="url" />
  <span class="text-gray-400 text-sm ">{{descricao}} Fonte: {{fonte}}.</span>
</template>
<script lang="ts">

import { defineComponent } from "vue";


export default defineComponent({
  name: "VideoItem",
  props: ["modelo"],
  data(){
    return this.modelo
  }
});
</script>

<style scoped>

</style>
