<script setup lang="ts">
import Input from "@/components/Formulario/Input.vue";
import Button from "@/components/Formulario/Button.vue";
import Modal from "@/components/Modal.vue";
</script>

<template>

        <Modal open="false">
            <h3 slot="header">custom header</h3>
            <slot name="body">
                <Input label="CPF" value="" />
                <div class="py-4">
                    <Button value="Avançar" type="primary" />
                </div>
            </slot>
      </Modal>
</template>
<style scoped>

</style>
