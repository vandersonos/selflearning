<template>
    <div class="flex-col">

        <div class=" px-4 main">
            <h2>Novo Módulo <small>({{steep}}/{{last}})</small></h2>
        </div>
        <div class="p-2" v-if="steep == 1">
            <Input label="Título" type="text"/>
            <Input label="Nome curto" type="text"/>
            <Input label="Descrição" type="text"/>
        </div>
        <div class="p-2" v-if="steep == 2">
            <h2>Configurações</h2>
            <ul>
                <li>Cores</li>
                <li>Card de divulgação</li>
                <li>endpoint REST</li>
                <li>Criterios de certificação</li>
                <li>Personalização do menu</li>
            </ul>
        </div>
        <div class="p-2" v-if="steep == 3">
            <h2>Módulos</h2>
        </div>
        <div class="p-2" v-if="steep == 4">
            <h2>Seleções de conteúdo</h2>
        </div>
        <div class="p-2" v-if="steep == 5">
            <h2>Seleções de avaliação final</h2>
        </div>
        <div class="p-2" v-if="steep == 6">
            <h2>Seleção de Bibliografias</h2>
        </div>
        <div class="p-2" v-if="steep == 7">
            <h2>Créditos</h2>
        </div>
        <div class="p-2" v-if="steep == 8">
            <h2>Ofertas</h2>
        </div>
        <div class="p-2" v-if="steep == 9">
            <h2>Rodar testes</h2>
        </div>
        <div class="p-2" v-if="steep == 10">
            <h2>Parabéns você acaba de publicar seu módulo de autoaprendizagem!</h2>
        </div>
        <ToolBar>
            <Button v-if="steep == 1" value="Cancelar"  />
            <Button v-if="steep > 1" value="Voltar" @click="prev" />
            <Button v-if="steep < 10" value="Avançar" @click="next" />
            <Button v-if="steep == 10" value="Salvar"  />
        </ToolBar>
    </div>
    
</template>
<script lang="ts">

import { defineComponent } from "vue";
import ToolBar from "@/components/ToolBar.vue"
import Button from "@/components/Formulario/Button.vue"
import Input from "../../components/Formulario/Input.vue"
export default defineComponent({
  name: "ModulosAdmin",
  props:{
  },
  computed:{
  },
  components:{ ToolBar, Button, Input },
  data(){
    return {
        steep:1,
        last:10
    }
  },
  methods:{
    next():void{
        if(this.steep >= 10 )
            return
        this.save()
        this.steep++

    },
    prev():void{
        if(this.steep == 1)
            return
        this.steep--
    },
    save():void{
        console.log(`Salve steep ${this.steep}.`)
    }

  }
});
</script>
