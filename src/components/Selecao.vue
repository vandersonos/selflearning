<script lang="ts">

import { defineComponent } from "vue";
import SlideItem from "./Slide.vue";

export default defineComponent({
  name: "SelecaoItem",
  props: {
    id:{
        type: String,
        required: true
    }
  },
  components:{SlideItem},
  data(){
    return {
        titulo:'Selecao Teste',
        slides:[
             {
                serial: "4",
                tipo: "questao",
                titulo: "Questão 1",
                subtitulo: "Desmostração de questao",
                introducao: "Este é um slide de questão.",
                conteudo: "Este slide é usado para exibir uma questão, por exemplo: qual é a capital do Brasil?",
                alternativas:[
                    { indice: '1', texto: 'Porto Alegre' },
                    { indice: '2', texto: 'Bahia' },
                    { indice: '3', texto: 'Brasilia' },
                    { indice: '4', texto: 'Pernambuco' }
                ],
                gabarito:[
                    '2'
                ],
                correcao: "Embora a pneumonia não apresente sinais ou sintomas patognomônicos, os sinais e sintomas mais prevalentes são febre, tosse produtiva e dor torácica ventilatório-dependente. Ao exame físico, a presença de crepitantes na ausculta pulmonar não é considerado um achado suficientemente sensível e específico para diagnóstico de pneumonia. Embora alguns padrões radiológicos possam sugerir algumas etiologias da pneumonia, possuem utilidade radiológica limitada para predizer o agente causal da pneumonia, com agentes etiológicos específicos podendo causar manifestações variadas, podendo se modificar ou se intensificar com o curso da doença, e com as condições imunológicas do paciente.A melhora clínica não justifica a interrupção do tratamento, que deve ter a duração recomendada pelos protocolos vigentes. Deve-se ter em mente que a resolução radiológica ocorre lentamente, depois da recuperação clínica.",
                referencias:[
                    { texto: 'RAMOS, Fernando. o conceito de um slide. pg. 300. São Paulo - Brasil. Acessado em 21291291212', url: 'www.google.com'}
                ]
            }/*,
            {
                serial: "1",
                tipo: "texto",
                titulo: "slide 1",
                subtitulo: "Desmostração de texto",
                introducao: "este é um slide de conteúdo textual.",
                conteudo: "Este slide é usado para exibir grandes volumes de texto, como por exemplo um ou mais paragrafos de textos."
            },
            {
                serial: "2",
                tipo: "imagem",
                titulo: "slide 2",
                subtitulo: "Desmostração de imagem",
                introducao: "este é um slide de conteúdo visual.",
                conteudo: "Este slide é usado para exibir uma imagem, como por exemplo um gráfico, aqui nesta secção ficaria a explicação da mesma."
            }
            ,
            {
                serial: "3",
                tipo: "video",
                titulo: "slide 3",
                subtitulo: "Desmostração de video",
                introducao: "este é um slide de video.",
                conteudo: "Este slide é usado para exibir um video player, com por exemplo um video instrucional ou um link do you tube, aqui nesta secção ficaria a explicação da mesma.",
                url_imagem: 'http://dms.ufpel.edu.br/static/img/apr_enf_med_apresentacao_video_poster.png',
                sources: [
                    {
                        url: 'http://dms.ufpel.edu.br/static/videos/apr_enf_med_apresentacao_240p.mp4',
                        resolucao: 240
                    }
                ]
            }
            
           */
        ]
    }
  }
});
</script>

<template>
    <section class="">
        <h2 v-if="titulo">{{titulo}}</h2>
        <ul class="mt-2.5">
           <SlideItem v-for="(m, index) in slides" :modelo="m" :key="index" />
        </ul>
    </section>
</template>
<style scoped>

</style>
