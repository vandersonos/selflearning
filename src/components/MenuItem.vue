<template>
  <li class="py-2 px-4 border-solid border-b-2 border-gray-200  bg-contrast">
    <RouterLink :to="url">{{text}}</RouterLink>
  </li>
</template>
<script lang="ts">
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";


export default defineComponent({
  name: "MenuItem",
  props: ["modelo"],
  components:{RouterLink},
  computed: {
    url(): object {
      return this.modelo.url;
    },
    text(): object {
      return this.modelo.text;
    },
  },
});
</script>

<style scoped></style>
