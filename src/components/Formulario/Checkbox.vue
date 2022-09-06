<template>
    <div class="mt-4">
        <label for="cpf" class="">
        <input :id="`${name}Id`" :name='name' type='checkbox' :value='value' class='rounded border-2' :readonly="readonly" :v-model='v-model'/>
        {{label}}</label>
        <div v-if="message-error" class="mx-2 p-2">{{message-error}}</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormCheckbox",
  props: {
    label: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    
    type: {
        type: String,
        required:true,
        default:'text'
    },
    value: {
        type: String
    },
    readonly: {
        type: String
    },
    'v-model': {
        type: String
    },
    'message-error':{
        type:String
    }
    
    
  }
});
</script>

<style scoped>

</style>
