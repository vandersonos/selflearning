<script lang="ts">
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
import Alternativa from '@/components/AlternativeItem.vue'
import ReferenciaItem from '@/components/ReferenciaItem.vue'
import VideoItem from '@/components/VideoSourceItem.vue'
import ImageItem from '@/components/ImageItem.vue'
import ImageContainer from '@/components/ImageContainer.vue'
import { DocumentDownloadIcon } from "@heroicons/vue/solid";
import Button from "./Formulario/Button.vue";
export default defineComponent({ 
  name: "SlideItem",
  props: ["modelo"],
  components:{ Alternativa, ReferenciaItem, ImageItem, VideoItem, DocumentDownloadIcon, ImageContainer, Button },
  data(){
    return {
        respondida: false,
        isCorrect:false,
        isSlider: (this.modelo.imagens && this.modelo.imagens.lenght > 1)
    }
  } 
});
</script>
<template>
  <li class="py-2 px-4 border-solid border-2 my-4  modelo-item ">
    <section id="titulo" v-if="modelo.title" class="p-2 my-4">
        <h3>{{modelo.title}}</h3>
    </section>
     <section id="introducao" v-if="modelo.introduction" class="my-4 px-7 py-4 bg-white">
        <p>{{modelo.introduction}}</p>
    </section>
    <section id="imagens" v-if="modelo.imagens"  class="my-4 px-7 py-2  bg-white">
        <ImageContainer :imagens="modelo.imagens"/>
    </section>
    <section id="videos" v-if="modelo.videos" class="my-4 px-7 py-4  bg-white">
        <div class='video-header '>
            <a v-if="modelo.files" :href="modelo.files[0]" target="_blank">
                <button class='btn flex items-center'>
                    <DocumentDownloadIcon class="h-5 w-5 mr-2"/> Material de apoio
                </button>
            </a>
        </div>
        <video class="my-4 w-full max-h-96"  controls allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
            <source v-for="(m, index) in modelo.videos" :modelo="m" :key="index" :src="m.url" :type="m.type" :media="m.media">
            Your browser does not support the video tag.
        </video>
    </section>
     <section id="conteudo" class="my-4 px-7 py-4  bg-white">
         <p  v-if="modelo.content" class="mb-4">{{modelo.content}}</p>
    </section>
     <section id="conteudo" class="my-4 px-7 py-4  bg-white" v-if="modelo.alternatives">
        <Alternativa v-for="(m, index) in modelo.alternatives" :label="m.text" :key="index" :item="m.index" :serial="modelo.serial" />
        <div class="flex justify-center mt-4 py-2"><Button type="primary" v-if="!respondida" value="Responder" /></div>
    </section>
    <section id="correction" v-if="respondida">
        <div class="mb-4 p-4 bg-green-600 text-white" v-if="isCorrect">Você acertou!</div>
        <div class="mb-4 p-4 bg-red-600 text-white" v-if="!isCorrect">Você errou!</div>
      
    </section>
     <section id="gabarito" v-if="modelo.correction && respondida"  class="mb-4 p-4  bg-green-600">
        {{ modelo.correction }}
    </section>
     <section id="references" v-if="modelo.references"  class="mb-4 p-4 bg-white text-gray-400 text-sm">
        <h4>Referências</h4>
        <ul >
           <ReferenciaItem v-for="(m, index) in modelo.references" :modelo="m" :key="index" />
        </ul>
    </section>
  </li>
</template>

<style scoped>
#gabarito{
    background-color: #f7f7f7;
    border-radius: 4px;
    background: #f7f7f7;
    color: #333;
    font-size: 16px;
    padding: 20px;
        margin-bottom: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 23%), 0 3px 10px rgb(0 0 0 / 16%);
}
#introducao{
    text-align: justify;
}
.video-header{
 @apply flex;
 @apply justify-between;
 @apply items-center;
}
</style>
