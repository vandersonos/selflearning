<template>
  
        <div class=" px-4 main">
            <h2>Modulos</h2>
            <ToolBar>
                <a href="/modulos/novo"><Button value="Novo"  /></a>
            </ToolBar>
            <ul class="mt-4">
                <li class="border-2 p-2 " v-for="(m, index) in modulos" :modelo="m" :key="index" >
                    <a :href="`/modulos/${m.shortname}/edit`">{{m.name}}</a> 
                </li>
            </ul>
        </div>
    
</template>
<script lang="ts">

import { defineComponent } from "vue";
import ToolBar from "@/components/ToolBar.vue"
import Button from "@/components/Formulario/Button.vue"
export default defineComponent({
  name: "ModulosIndex",
  props:{
  },
  computed:{
  },
  components:{ ToolBar, Button },
  data(){
    return {
        modulos:[
            {url:"/cadastro", shortname:"mtest",name:"Cadastro"},
            {url:"/", shortname:"mtest",name:"Home"},
            {url:"/about", shortname:"mtest",name:"Sobre"},
            {url:"/creditos", shortname:"mtest",name:"Créditos"},
            {url:"/sair", shortname:"mtest",name:"Sair"},
        ]
    }
  },
});
</script>
