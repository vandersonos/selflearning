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
            /*
             {
                serial: "4",
                tipo: "questao",
                titulo: "Questão 1",
                subtitulo: "Desmostração de questao - Geografia",
                introducao: "Uma capital nacional ou, simplesmente, capital (do latim caput, capitis, 'cabeça') é a cidade ou localidade onde reside o governo central, os ministérios e todos os organismos supremos da administração do Estado.[1] Apenas um único país do mundo não possui uma capital de facto, a República de Nauru, um microestado que fica na Oceania: a sede do governo se localiza em Meneng e o parlamento fica na maior cidade do país, Yaren. Segundo os países, as capitais podem existir em diferentes níveis ou hierarquias.",
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
                    { 
                        autor:'RAMOS, Fernando',
                        acesso:"Acessado em 10/08/2021",
                        titulo:'O conceito de um slide',
                        local:'São Paulo - Brasil',
                        etc: 'pg. 300', 
                        data_acesso:"12 de agosto de 2021",
                        url: 'https://www.google.com',
                        url_local:'/static/teste.txt'
                    }
                ]
            },
            {
                serial: "1",
                tipo: "texto",
                titulo: "slide 1",
                subtitulo: "Desmostração de texto",
                introducao: "este é um slide de conteúdo textual.",
                conteudo: "Este slide é usado para exibir grandes volumes de texto, como por exemplo um ou mais paragrafos de textos."
            },*/
            {
                serial: "2",
                tipo: "imagem",
                titulo: "slide 2",
                subtitulo: "Desmostração de imagem",
                introducao: "este é um slide de conteúdo visual.",
                imagens:[
                    {
                        titulo: 'Imagem de exemplo 1',
                        descricao:'Imagem de uma foto no conteudo',
                        fonte: 'equipe',
                        url:'https://dms.ufpel.edu.br/static/img/apr_enf_med_apresentacao_video_poster.png'
                    },
                    {
                        titulo: 'Imagem de exemplo 1',
                        descricao:'Imagem de uma foto no conteudo',
                        fonte: 'equipe',
                        url:'https://dms.ufpel.edu.br/static/img/apr_enf_med_apresentacao_video_poster.png'
                    }
                ],
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
                url: 'http://dms.ufpel.edu.br/static/img/apr_enf_med_apresentacao_video_poster.png',
                sources: [
                    {
                        url: 'http://dms.ufpel.edu.br/static/videos/apr_enf_med_apresentacao_240p.mp4',
                        resolucao: 240
                    }
                ]
            }
            
           
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
