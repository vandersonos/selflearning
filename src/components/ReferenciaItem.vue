<template>
  <li class="py-2 px-4">
    {{modelo.author}}. <b>{{modelo.title}}</b>. 
    <span v-if="modelo.etc"> {{modelo.etc}}</span> 
    <span v-if="modelo.local">. {{modelo.local}}</span> 
    <span v-if="modelo.year">, {{modelo.year}}</span> 
    <span v-if="modelo.url">. Disponível em: <a :href="modelo.url">{{modelo.url}}</a> </span>
    <span v-if="modelo.access_date">. Acesso em: {{modelo.access_date}} </span>
    <span v-if="modelo.url_local">. Espelho local: <a :href="modelo.url_local" ><u>Clique aqui</u></a></span>
  </li>
</template>
<script lang="ts">
          
     
import { defineComponent } from "vue";


export default defineComponent({
  name: "ReferenciaItem",
  props: ["modelo"],
  data(){

    return this.modelo
  }
});
</script>

<style scoped>

</style>
