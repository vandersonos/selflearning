<template>
    <div>
        <label for="cpf" class="mb-2">{{label}}</label>
        <input :id="`${name}Id`" :name='name' :type='type' :value='value' class='rounded border-2 w-52' :readonly="readonly" :placeholder="placeholder" :v-model='v-model'/>
        <div v-if="message-error" class="mx-2 p-2">{{message-error}}</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormInput",
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
    placeholder: {
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
