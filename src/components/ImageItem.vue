<template>
  <h5 v-if="modelo.title" class="my-4">{{modelo.title}}</h5>
  <img :src="modelo.url" />
  <span v-if="modelo.description" class="text-gray-400 text-sm ">{{modelo.description}}</span>
  <span v-if="modelo.reference"> Fonte: {{modelo.reference}}.</span>
</template>
<script lang="ts">

import { defineComponent } from "vue";


export default defineComponent({
  name: "ImagemItem",
  props: ["modelo"],
  data(){

    return this.modelo
  }
});
</script>

<style scoped>

</style>
