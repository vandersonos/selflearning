<template>
  <div class="mb-2">
    <label>
      <input type="radio" :id="id" :name="name" :checked="checked" class='py-2 px-4'/>
      {{label}}
    </label>
  </div>

</template>
<script lang="ts">

import { defineComponent } from "vue";


export default defineComponent({
  name: "AlternativaItem",
  props: ["item", "checked", "label", "serial"],
  computed:{
    id():string{
      return 'resp-'+this.item+'Id'
    },
    name():string{
      return "quest-"+this.serial
    }
  }
});
</script>

<style scoped>

</style>
