<template>
  <li class="py-2 px-4">
    {{autor}}. <b>{{titulo}}</b>. 
    <span v-if="etc"> {{etc}}</span> 
    <span v-if="local">. {{local}}</span> 
    <span v-if="ano">, {{ano}}</span> 
    <span v-if="modelo.url">. Disponível em: <a :href="modelo.url">{{modelo.url}}</a> </span>
    <span v-if="modelo.data_acesso">. Acesso em: {{modelo.data_acesso}} </span>
    <span v-if="modelo.url_local">. Espelho local: <a :href="modelo.url_local" ><u>Clique aqui</u></a></span>
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
