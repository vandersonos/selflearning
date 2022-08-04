<template>
    <div>
        <label for="cpf">CPF</label>
        <input id='cpf' name='cpf' value='' />
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
    font-weight:bold;
}
input{
    border: solid 1px black;
    border-radius:0.25rem;
}
</style>
