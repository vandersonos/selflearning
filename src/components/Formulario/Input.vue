<template>
    <div>
        <label for="cpf">CPF</label>
        <input id='cpf' name='cpf' value='' class='border-slate-500 rounded border-2' />
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
   
 

}
</style>
