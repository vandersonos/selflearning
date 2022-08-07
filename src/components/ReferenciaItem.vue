<template>
  <li class="py-2 px-4">
    {{texto}} <span v-if="modelo.url">{{modelo.url}}</span>
  </li>
</template>
<script lang="ts">

import { defineComponent } from "vue";


export default defineComponent({
  name: "ReferenciaItem",
  props: ["modelo"],
  data(){
    console.log(this.modelo,'ref');
    return this.modelo
  }
});
</script>

<style scoped>

</style>
