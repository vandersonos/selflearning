<template>
  <ul v-if="!img">
    <ImagemItem v-for="(m, index) in imagens" :modelo="m" :key="index" />
  </ul>
  <ImagemItem v-if="img" :modelo="imagens[0]"/>
</template>
<script lang="ts">

import { defineComponent } from "vue";
import ImagemItem from '@/components/ImageItem.vue'

export default defineComponent({
  name: "ImagemContainer",
  props: ["imagens"],
  components:{
    ImagemItem
  },
  data(){

      return { 
        img: (this.imagens.length == 1) 
      }
  }
});
</script>

<style scoped>

</style>
