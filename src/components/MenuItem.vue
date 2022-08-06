<template>
  <li class="py-2 px-4 border-solid  bg-contrast menu-item">
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

<style scoped>
.menu-item{
  color: var(--bg-primary);
  font-weight: 300;
}
</style>
