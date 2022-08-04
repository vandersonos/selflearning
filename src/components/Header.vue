<template>
  <header class="h-12 bg-black fixed top-0 z-10 w-full">
    <button class="w-50 h-50 px-2 py-2 bg-blue-100 rounded mx-2 my-1" @click="aoClicarNoBotao"> 
        <RewindIcon class="h-5 w-5 text-blue-500"/>
    </button>
    <Menu :aberto="aberto" />
  </header>
</template>
<script lang="ts">

import { defineComponent } from "vue";
import Menu from '@/components/Menu.vue';
import { RewindIcon } from '@heroicons/vue/solid'
export default defineComponent({
  name: "HeaderContainer",
  components:{
    Menu,
    RewindIcon
  },
  data(){
    return {
      aberto:false
    }
  },
  methods:{
    aoClicarNoBotao():void{
        console.log('clicou', this.aberto)
        this.aberto = !this.aberto;
        //this.$emit('aoClicarBotao', this.aberto)
    }
  }
});
</script>
