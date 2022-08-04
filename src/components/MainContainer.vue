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
  props:['columns'],
  computed:{
      classe():string{
        return 'min-h-min'

    }
  }
});
</script>
