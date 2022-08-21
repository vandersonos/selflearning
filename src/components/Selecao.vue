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
                title: "Question 1",
                content: "This slide is used to display a question, for example: what is the capital of Brazil?",
                alternatives:[
                    { index: '1', text: 'Porto Alegre' },
                    { index: '2', text: 'Bahia' },
                    { index: '3', text: 'Brasilia' },
                    { index: '4', text: 'Pernambuco' }
                ],
                feedback:[
                    '2'
                ],
                correction: "Although pneumonia does not present pathognomonic signs or symptoms, the most prevalent signs and symptoms are fever, productive cough, and ventilatory-dependent chest pain.",
                references:[
                    {
                        author: 'RAMOS, Fernando',
                        access:"Accessed on 08/10/2021",
                        title:'The concept of a slide',
                        location:'Sao Paulo - Brazil',
                        year:'2021',
                        etc: 'pg. 300',
                        access_date:"August 12, 2021",
                        url: 'https://www.google.com',
                        url_local:'/static/test.txt'
                    }
                ]
            },
            {
                serial: "1",
                title: "slide 1",
                content: "Este slide é usado para exibir grandes volumes de texto, como por exemplo um ou mais paragrafos de textos."
            },
            {
                serial: "2",
                title: "slide 2",
                content: "Este slide é usado para exibir uma imagem, como por exemplo um gráfico, aqui nesta secção ficaria a explicação da mesma.",
                imagens:[
                    {
                        title: 'Imagem de exemplo 1',
                        description:'Imagem de uma foto no content',
                        reference: 'equipe',
                        url:'https://dms.ufpel.edu.br/static/img/apr_enf_med_apresentacao_video_poster.png'
                    },
                    {
                        title: 'Imagem de exemplo 1',
                        description:'Imagem de uma foto no content',
                        reference: 'equipe',
                        url:'https://dms.ufpel.edu.br/static/img/apr_enf_med_apresentacao_video_poster.png'
                    }
                ],
                references:[{
                    autor:'RAMOS, Fernando',
                    acesso:"Acessado em 10/08/2021",
                    titulo:'O conceito de um slide',
                    local:'São Paulo - Brasil',
                    ano:'2021',
                    etc: 'pg. 300', 
                    data_acesso:"12 de agosto de 2021",
                    url: 'https://www.google.com',
                    url_local:'/static/teste.txt'
                }]
            }
            ,
            {
                serial: "3",
                title: "slide 3",
                content: "Video-aula sobre html e css.",
                cover:'http://dms.ufpel.edu.br/static/img/apr_enf_med_apresentacao_video_poster.png',
                videos: [
                    {
                        url: 'http://dms.ufpel.edu.br/static/videos/apr_enf_med_apresentacao_480p.mp4',
                        resolucao: 480,
                        type:'video/mp4',
                        media: 'all and (max-width: 480px)'
                    }
                ],
                files:[
                    {
                        'url': "teste.pdf",
                        'title':'Orientações'
                    }
                ] ,
                references:[{
                    autor:'RAMOS, Fernando',
                    acesso:"Acessado em 10/08/2021",
                    titulo:'O conceito de um slide',
                    local:'São Paulo - Brasil',
                    ano:'2021',
                    etc: 'pg. 300', 
                    data_acesso:"12 de agosto de 2021",
                    url: 'https://www.google.com',
                    url_local:'/static/teste.txt'
                }]      
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
