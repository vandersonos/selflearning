<template>
    <div>
        <label for="cpf" class="mb-2">CPF</label>
        <input id='cpf' name='cpf' value='' class='rounded border-2 w-52' />
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormInput",
  props: ["label", "value"]
});
</script>

<style scoped>
label{
    display: block;
   
}
input{
   border-color: var(--bg-primary);
}
input:focus{
    outline: 0;
    box-shadow: 0 0 0 0.25rem var(--bg-contrast);
}
</style>
