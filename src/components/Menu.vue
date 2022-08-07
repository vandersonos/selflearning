<script lang="ts">

import { defineComponent } from "vue";
import MenuItem from "./MenuItem.vue";

export default defineComponent({
  name: "MenuList",
  props: {
    aberto:{
        type: Boolean,
        required:true
    }
  },
  components:{MenuItem},
 // emits:['aoClicarBotao'],
  data(){
    return {
        menus:[
            {url:"/cadastro", text:"Cadastro"},
            {url:"/", text:"Home"},
            {url:"/about", text:"Sobre"},
            {url:"/selecao", text:"Seleção de conteúdos"},
            {url:"/sair", text:"Sair"},
        ]
    }
  },
  computed:{
    classes():string {
        console.log('classes', this.aberto)
        if(this.aberto){
            return 'z-10 absolute top-12 h-screen left-0 w-64 border-solid border-r-2 menu bg-secondary'
        } else {
            return 'hidden'
        }
    }
  }
});
</script>

<template>
    <div :class="classes">
        <ul class="mt-2.5">
            <MenuItem v-for="(m, index) in menus" :modelo="m" :key="index" />
        </ul>
    </div>
</template>
<style scoped>
.menu{
    border-right-color: var(--bg-primary);
}
</style>
