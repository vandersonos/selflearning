

<template>
  
  <HeaderApp @aoExibirMenu="resizeMain" />
  <div class="absolute top-12 left-0 w-full z-0 left-0 bg-secondary  w-full">
    <MainContainer :menuAberto="menuAberto" >
      <RouterView />
    </MainContainer>
    <FooterApp />
  </div>

</template>
<script lang="ts">
import { defineComponent } from "vue";
import MainContainer from "@/components/MainContainer.vue";
import FooterApp from "@/components/FooterApp.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import { RouterView } from "vue-router";
export default defineComponent({
  name: "LayoutApp",
  components:{
    HeaderApp,
    MainContainer, 
    RouterView,
    FooterApp
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
<style >
:root{
  --bg-primary: #1a877b!important;
  --bg-secondary: #eaf9f8;
  --bg-contrast: #45b4a7;
}
.bg-primary{
  background-color: var(--bg-primary);
}
.bg-secondary{
  background-color: var(--bg-secondary);
}
.bg-contrast:hover{
  background-color: var(--bg-contrast);
  color: white!important;
}
.text-color{
  color:var(--bg-primary);
}
</style>
