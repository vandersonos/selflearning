

<template>
  
  <HeaderApp @aoExibirMenu="resizeMain" />
  <div class="absolute top-12 left-0 w-full z-0 left-0 bg-secondary  w-full">
    <MainContainer :menuAberto="menuAberto" >
      <RouterView />
    </MainContainer>
    <!--FooterApp /-->
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
  --font-color-primary:white;
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
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500!important;
    line-height: 1.2;
}
h1 {
    display: block;
    font-size: 2em!important;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
h2 {
    display: block;
    font-size: 1.5em!important;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
h3 {
    display: block;
    font-size: 1.17em!important;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
h5 {
    display: block;
    font-size: 0.83em!important;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
*, ::after, ::before {
    box-sizing: border-box;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>
