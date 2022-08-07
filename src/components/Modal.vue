<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ModalItem",
  props: ["open", "title"],
  edmits:['closed'],
  data() {
    return {
      hidden: (this.open ? false:true)
    }
  },
  methods:{
    close(){
        this.hidden = true
        this.$emit('closed')
    }
  }
});

</script>

<template>
  <Transition name="modal">
    <Teleport to="body">
        <div v-if="!hidden" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                      <h3 v-if="title">{{title}}</h3>
                      <button class='modal-close-button' @click="close">X</button>
                    </div>
                    <div class="modal-body">
                        <slot/>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
  </Transition>
</template>

<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  margin-top: 10%;
}

.modal-container {
  display:flex;
  flex-direction: column;
  width: 80%;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-header{
  padding: 10px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-primary);
  color:var(--font-color-primary)
  

}
.modal-body {
  padding:20px;
  margin:auto
}

.modal-close-button {
  border:solid 2px var(--font-color-primary);
  border-radius:10px;
  padding: 4px 12px ;
  color:var(--font-color-primary)
}
.modal-close-button:hover{
  background-color:var(--bg-contrast)
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container, .modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>