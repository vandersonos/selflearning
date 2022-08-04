

<template>
  
  <Header @aoExibirMenu="resizeMain" />
  <div class="absolute top-12 left-0 w-full z-0 left-0 bg-gray-100  w-full">
    <MainContainer :menuAberto="menuAberto" >
      <RouterView />
    </MainContainer>
    <Footer />
  </div>

</template>
<script lang="ts">
import { defineComponent } from "vue";
import MainContainer from "@/components/MainContainer.vue";
import { RouterView } from "vue-router";
export default defineComponent({
  name: "LayoutApp",
  components:{
    MainContainer, 
    RouterView,
  },
  data(){
    return {
      menuAberto: false,
    }
  },
  methods:{
    resizeMain(aberto: boolean): void {
        console.log('resolve', aberto)
        if(aberto){
            this.menuAberto = true;
        }else{
            this.menuAberto = false;
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
