<template>
    <button class="px-4 py-2 bg-blue-500 rounded text-white  mr-2 ">{{value}}</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormButton",
  props: ["value"]
});
</script>

<style scoped>
button:hover{
    opacity: 0.8;
}
</style>
