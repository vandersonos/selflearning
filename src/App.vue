

<template>
  
  <Header />
  <div class="absolute top-12 left-0 w-full z-0 left-0 bg-gray-100  w-full">

    <MainContainer :columns="colMain" >
      <RouterView />
    </MainContainer>
    <Footer />
  </div>

</template>
<script lang="ts">
import { defineComponent } from "vue";
import Menu from "@/components/Menu.vue";
import MainContainer from "@/components/MainContainer.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import { RouterView } from "vue-router";
export default defineComponent({
  name: "LayoutApp",
  components:{
    Menu, 
    MainContainer, 
    RouterView,
    Footer,
    Header
  },
  data(){
    return {
      colMenu: <number>0,
      colMain: <number>12
    }
  },
  methods:{
    resolveExibicaoMenu(aberto: boolean): void {
        console.log('resolve')
        if(aberto){
            this.colMenu = 2;
            this.colMain = 10;

            console.log('abriu')
        }else{

            this.colMenu = 0;
            this.colMain = 12;
      
            console.log('fechou')
        }

    }
  }
});
</script>
<style scoped>
.menu{

}
.main{
  min-height: 100vh;
}
</style>
