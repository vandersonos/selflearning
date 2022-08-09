<script lang="ts">
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
import Alternativa from '@/components/AlternativaItem.vue'
import ReferenciaItem from '@/components/ReferenciaItem.vue'
import ImagemItem from '@/components/ImagemItem.vue'
import VideoItem from '@/components/VideoItem.vue'

export default defineComponent({ 
  name: "SlideItem",
  props: ["modelo"],
  components:{Alternativa, ReferenciaItem, ImagemItem, VideoItem},
  data(){
    return {
        isQuest: (this.modelo.tipo == 'questao'),
        respondida: false,
        isCorrect:false,
    }
  } 
});
</script>
<template>
  <li class="py-2 px-4 border-solid border-2 my-4  modelo-item ">
    <section id="titulo" v-if="modelo.title" class="p-2">
        <h3>{{modelo.title}}</h3>
        <h4>{{modelo.caption}}</h4>
    </section>
     <section id="introducao" v-if="modelo.introduction" class="my-4 px-7 py-4 bg-white">
        <p>{{modelo.introduction}}</p>
    </section>
    <section id="imgens" v-if="modelo.imagens" class="my-4 px-7 py-2  bg-white">
        <ul >
           <ImagemItem v-for="(m, index) in modelo.imagens" :modelo="m" :key="index" />
        </ul>
    </section>
    <section id="videos" v-if="modelo.videos" class="my-4 px-7 py-4  bg-white">
        <ul >
           <VideoItem v-for="(m, index) in modelo.videos" :modelo="m" :key="index" />
        </ul>
    </section>
     <section id="conteudo" class="my-4 px-7 py-4  bg-white">
        <p  v-if="modelo.conteudo" class="mb-4">{{modelo.conteudo}}</p>
        <ul v-if="modelo.tipo == 'questao' ">
           <Alternativa v-for="(m, index) in modelo.alternativas" :modelo="m" :key="index" />
        </ul>  
    </section>
    <section id="correcao" v-if="respondida">
        <div class="mb-4 p-4 bg-green-600 text-white" v-if="isCorrect">Você acertou!</div>
        <div class="mb-4 p-4 bg-red-600 text-white" v-if="!isCorrect">Você errou!</div>
      
    </section>
     <section id="gabarito" v-if="modelo.correcao && respondida"  class="mb-4 p-4  bg-green-600">
        {{modelo.correcao}}
    </section>
     <section id="referencias" v-if="modelo.referencias"  class="mb-4 p-4 bg-white ">
        <h4>Referências</h4>
        <ul >
           <ReferenciaItem v-for="(m, index) in modelo.referencias" :modelo="m" :key="index" />
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
</style>
