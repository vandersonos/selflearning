<template>
    <div class="flex-col">

        <div class="main mb-4">
            <h3>Novo Módulo <small>({{steep}}/{{last}})</small></h3>
        </div>
        <div class="p-2" v-if="steep == 1">
            <Input name="title" label="Título" type="text"/>
            <Input name="shortname" label="Nome curto" type="text"/>
            <Input name="description" label="Descrição" type="text"/>
            <Input name="img-card" label="Card de divulgação" type="file"/>
        </div>
        <div class="p-2" v-if="steep == 2">
            <h3>Layout</h3>
            <ul>
            <Input name="color"  label="Cor principal" type="color"/>
            <Input name="secondary-color" label="Cor secundaria" type="color"/>
            <Input name="contrasted-color" label="Cor de contraste" type="color"/>
            </ul>
        </div>
        <div class="p-2" v-if="steep == 3">
            <h4>Tipo de certificação</h4>
            <div class="mt-2 py-2">
    
                <input type="radio" name="tipo_aprovacao" value='CG'/> Certificação Geral (todas as atividades) <br/>
                <input type="radio" name="tipo_aprovacao" value='TF'/> Aprovação no teste final <br/>
                <input type="radio" name="tipo_aprovacao" value='CA'/> Aprovação na unidade <br/>
            </div>
            <div class="mb-4 py-2">
                <h4>Critérios de aprovação</h4>
                <div class="flex items-end">
                    <Checkbox label="% de aprovação igual ou superior à " value="PA" />
                    <div class="ml-2">
                        <input class="rounded border-2 w-12" type='text' name="pa_valor" value=""/>
                    </div>
                </div>
                <div class="flex items-end">
                    <Checkbox label="% de conclusão igual ou superior à " value="PC" />
                    <div class="ml-2">
                        <input class="rounded border-2 w-12" type='text' name="pc_valor" value=""/>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-2" v-if="steep == 4">
            <h3>Parabéns! Você acaba de configurar seu módulo de autoaprendizagem!</h3>
            <p class="mt-4">Agora você precisa selecionar os conteúdos que serão disponibilizados pelo mesmo.</p>
        </div>
        <ToolBar>
            <Button type="primary" v-if="steep == 1" value="Cancelar"  />
            <Button type="primary" v-if="steep > 1" value="Voltar" @click="prev" />
            <Button type="primary" v-if="steep < 4" value="Avançar" @click="next" />
            <Button type="primary" v-if="steep < 4" value="Avançar" @click="next" />
        </ToolBar>
    </div>
    
</template>
<script lang="ts">

import { defineComponent } from "vue";
import ToolBar from "@/components/ToolBar.vue"
import Button from "@/components/Formulario/Button.vue"
import Input from "../../components/Formulario/Input.vue"
import Checkbox from "../../components/Formulario/Checkbox.vue"
export default defineComponent({
  name: "ModulosAdmin",
  props:{
  },
  computed:{
  },
  components:{ ToolBar, Button, Input, Checkbox },
  data(){
    return {
        steep:1,
        last:4
    }
  },
  methods:{
    next():void{
        if(this.steep >= this.last )
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
