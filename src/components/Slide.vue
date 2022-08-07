<script lang="ts">
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
import Alternativa from '@/components/AlternativaItem.vue'
import ReferenciaItem from '@/components/ReferenciaItem.vue'

export default defineComponent({ 
  name: "SlideItem",
  props: ["modelo"],
  components:{Alternativa, ReferenciaItem},
  data(){
    return {
        isQuest: (this.modelo.tipo == 'questao'),
        respondida: true,
        isCorrect:true,
    }
  } 
});
</script>

<template>
  <li class="py-2 px-4 border-solid border-2  modelo-item">
    <section id="titulo" v-if="modelo.titulo" class="p-2">
        <h3>{{modelo.titulo}}</h3>
        <h4>{{modelo.subtitulo}}</h4>
    </section>
     <section id="introducao" v-if="modelo.introducao" class="my-4 p-4  bg-stone-200">
        <p>{{modelo.introducao}}</p>
    </section>
     <section id="conteudo" v-if="modelo.conteudo" class="my-4 p-4  bg-stone-200">
        <p>{{modelo.conteudo}}</p>
    </section>
     <section id="alternativas" v-if="modelo.tipo == 'questao' "  class="mb-4 p-4 ">
         <ul >
           <Alternativa v-for="(m, index) in modelo.alternativas" :modelo="m" :key="index" />
        </ul>
        
    </section>
    <section id="correcao" v-if="respondida">
        <div class="mb-4 p-4 bg-green-600 text-white" v-if="isCorrect">Você acertou!</div>
        <div class="mb-4 p-4 bg-red-600 text-white" v-if="!isCorrect">Você errou!</div>
      
    </section>
     <section id="gabarito" v-if="modelo.correcao"  class="mb-4 p-4  bg-green-600">
        {{modelo.correcao}}
    </section>
     <section id="referencias"   class="mb-4 p-4  ">
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
</style>
