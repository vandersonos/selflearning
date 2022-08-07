<script setup lang="ts">

import Modal from "@/components/Modal.vue";
import ContainerCadastro from "@/modules/core/ContainerCadastro.vue";

function redir() {
    window.location.href = '/'
}
</script>

<template>
        <Modal open="true" title="cadastro" @closed="redir">
            <slot>
                <ContainerCadastro />
            </slot>
      </Modal>
</template>
<style scoped>

</style>
