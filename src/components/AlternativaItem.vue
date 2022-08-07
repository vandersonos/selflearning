<template>
  <li class="py-2 px-4">
    <input type="radio" id="`quest-${indice}`"/>
    {{texto}}
  </li>
</template>
<script lang="ts">

import { defineComponent } from "vue";


export default defineComponent({
  name: "AlternativaItem",
  props: ["modelo"],
  data(){

    return this.modelo
  }
});
</script>

<style scoped>

</style>
