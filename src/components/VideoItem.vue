<template>
  <div class='video-header '>
    <h4 class="my-4">{{title}} <small>{{caption}}</small></h4>
    <a v-if="suport_material" :href="suport_material" target="_blank">
      <button class='btn flex items-center'><DocumentDownloadIcon class="h-5 w-5 mr-2"/> Material de apoio</button>
    </a>
  </div>
  <p>{{introduction}}</p>
  <video class="my-4 w-full max-h-96"   controls allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
   
    	<source  v-if="file1" :src="file1.url" :type="file1.type" :media="file1.media">
    	<source  v-if="file2" :src="file2.url" :type="file2.type" :media="file2.media">
    	<source  v-if="file3" :src="file3.url" :type="file3.type" :media="file3.media">
    	<source  v-if="file4" :src="file4.url" :type="file4.type" :media="file4.media">
    Your browser does not support the video tag.
  </video>
  <div class="text-gray-400 text-sm mb-2"><span v-if="description">{{description}}</span> <span v-if='source'>Fonte: {{source}}</span></div>
</template>
<script lang="ts">

import { defineComponent } from "vue";
import { DocumentDownloadIcon } from "@heroicons/vue/solid";
export default defineComponent({
  name: "VideoItem",
  props: ["modelo"],
  components:{
    DocumentDownloadIcon
  },
  data(){
    console.log(this.modelo, 'modelo')
    return {
      title: this.modelo.title,
      caption: this.modelo.caption,
      suport_material: this.modelo.suport_material,
      description: this.modelo.description,
      source: this.modelo.source,
      introduction: this.modelo.introduction,
      file1: this.modelo.files[0],
      file2: this.modelo.files[1],
      file3: this.modelo.files[2],
      file4: this.modelo.files[3],
    }
  }
});
</script>

<style scoped>
.video-header{
 @apply flex;
 @apply justify-between;
 @apply items-center;
}
</style>
