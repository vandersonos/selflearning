<template>
  <header class="h-12 bg-primary fixed top-0 z-10 w-full">
    <button class="w-50 h-50 px-2 py-2 bg-white rounded mx-4 my-1 hover:bg-gray-200" @click="aoClicarNoBotao"> 
        <MenuIcon class="h-5 w-5 text-color"/>
    </button>
    <Menu :aberto="aberto" />
  </header>
</template>
<script lang="ts">

import { defineComponent } from "vue";
import Menu from '@/components/Menu.vue';
import { MenuIcon } from '@heroicons/vue/solid'
export default defineComponent({
  name: "HeaderContainer",
  components:{
    Menu,
    MenuIcon
  },
  emits:['aoExibirMenu'],
  data(){
    return {
      aberto:false
    }
  },
  methods:{
    aoClicarNoBotao():void{
        console.log('clicou', this.aberto)
        this.aberto = !this.aberto;
        this.$emit('aoExibirMenu', this.aberto)
    }
  }
});
</script>
