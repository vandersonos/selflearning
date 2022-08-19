<template>
         <div class="flex p-2 tollbar">
            <slot />
        </div>
</template>
<script lang="ts">

import { defineComponent } from "vue";
export default defineComponent({
  name: "ToolBar"  
});
</script>
