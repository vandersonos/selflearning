<template>
    <button :class="classes">{{value}}</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormButton",
  props: ["value", "type"],
  computed:{
    classes(): string {
      let classes = "px-4 py-2 rounded text-white mr-2"
      switch(this.type){
        case 'primary':
          return classes+' bg-primary'
        case 'secundary':
          return classes + 'bg-secundary'
        default:
          return classes + 'bg-contrast'
      }
    }
  }
});
</script>

<style scoped>
button:hover{
    opacity: 0.8;
}
</style>
