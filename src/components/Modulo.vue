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
            {url:"/creditos", text:"Créditos"},
            {url:"/sair", text:"Sair"},
        ]
    }
  },
  computed:{
    classes():string {
        console.log('classes', this.aberto)
        if(this.aberto){
            return 'z-10 absolute top-12 h-screen left-0 w-40 border-solid border-r-2 border-gray-200 bg-secondary'
        }else{
            return 'hidden'
        }
    }
  }
});
</script>

<template>
    <div :class="classes">
        <ul class="">
            <MenuItem v-for="(m, index) in menus" :modelo="m" :key="index" />
        </ul>
    </div>
</template>
<style scoped>

</style>
