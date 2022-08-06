<template>
    <div :class="classe">
        <div class="flex px-8 py-8 main">
            <slot />
        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent } from "vue";
export default defineComponent({
  name: "MainContainer",
  props:{
    menuAberto: {
        type: Boolean,
        required:true
    }
  },
  computed:{
      classe():string{
        if(this.menuAberto){
            return 'ml-64 h-screen'
        }else{
            return 'h-screen'
        }
    }
  }
});
</script>
