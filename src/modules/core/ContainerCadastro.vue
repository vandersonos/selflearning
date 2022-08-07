<template lang="">
    <section id="step-1">
        <div class="mb-4">
            <Input label="CPF" name='cpf2' value="" />
            <div class="py-4">
                <Button value="Avançar" type="primary" @click="getUser" />
            </div>
        </div>
    </section>
    <section id="step-2">
        <div class="mb-4">
            <Input label="CPF" name='cpf3' value="" readonly='readonly'/>
        </div>
        <input type="hidden" class="form-control" id="inputId" value="">
        <input type="hidden" class="form-control" id="ibge" name="ibge" value="">
        <div class="mb-4" style="display: block;">
            <Input label="Nome completo" name="nome" value="" placeholder="" />
        </div>
        <div class="mb-4" style="display: block;">
            <Input label="Data de nascimento" name="dt_nascimento" type='date' value=""  />
        </div>
        <div class="mb-4" style="display: block;">
            <label class="" style="margin-right: 10px;">Sexo</label>
            <span class="radio-inline">
                <input type="radio" value="feminino" name="sexo">
                <span style="margin-left: 6px;">Feminino</span>
            </span>
            <span class="radio-inline">
                <input type="radio" value="masculino" name="sexo">
                <span style="margin-left: 6px;">Masculino</span>
            </span>
        </div>

        <div class="mb-4" style="display: block;">
            <Input label="Nome completo da mãe" name="nomeMae" value="" />
        </div>
        <div class="mb-4" style="display: block;">
            <Input label="E-mail" name="email" value="" />
        </div>

        <div class="mb-4" style="display: block;">
            <label>UF e Município - onde mora</label>
            <div class="row">
                <div class="mb-4 col-md-6" style="display: block;">
                    <select class="form-control" name="uf">
                        <option value="-1">Selecione</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PR">PR</option>
                        <option value="PB">PB</option>
                        <option value="PA">PA</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SE">SE</option>
                        <option value="SP">SP</option>
                        <option value="TO">TO</option>
                    </select>
                </div>
                <div class="mb-4" style="display: block;">
                    <select class="form-control" name="municipio">
                    <option value="-1">selecione...</option>
                </select>
                </div>
            </div>
        </div>
        
            <div class="lead h4 termos " style="display: block;">Em quais conteúdos você deseja certificar?</div>
            
                <div class="checkbox mb-4 " style="display: block;">
                    <label>
                        <input class="conteudos" type="checkbox" value="419294"><span class="ripple"></span><span class="check"></span>
                        
                            <span class="checkbox-material "></span> Conteúdo de enfermagem
                        
                    </label>
                </div>
            
                <div class="checkbox mb-4 " style="display: block;">
                    <label>
                        <input class="conteudos" type="checkbox" value="419295"><span class="ripple"></span><span class="check"></span>
                        
                            <span class="checkbox-material "></span> Conteúdo de medicina
                        
                    </label>
                </div>
            
        

        <div class="lead h4 termos" style="display: block;">Termos de Uso</div>
        <ul class="termos" style="display: block;">
          <li>Para obter o certificado o usuário deve conluir 70% dos conteúdos <span class="temNucleo" style="display:none;">de seu núcleo profissional</span> e deve ter média de acertos de 70% ou mais.</li>

          <li>O conteúdo deste Módulo de Autoaprendizagem é exclusivamente informativo. A certificação não habilita o concluinte a realizar procedimentos que não estejam regulamentados em sua respectiva profissão.</li>

          <li>As informações fornecidas pelo usuário no Formulário de Cadastro devem ser verdadeiras e atualizadas.</li>
        </ul>
        <div class="checkbox mb-4" style="display: block;">
            <label>
                <input type="checkbox" id="concorda-termos" name="concorda-termos" checked="checked"><span class="ripple"></span><span class="check"></span><span class="checkbox-material"></span> Li e concordo com os Termos de Uso.
            </label>
        </div>
        <div class="checkbox mb-4" style="display: block;">
            <label>
                <input type="checkbox" id="mala_direta" name="mala_direta" checked="checked"><span class="ripple"></span><span class="check"></span><span class="checkbox-material"></span> Gostaria de receber Mensagens sobre novas ofertas.
            </label>
        </div>

    
    </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Input from "@/components/Formulario/Input.vue";
import Button from "@/components/Formulario/Button.vue";
export default defineComponent({
  name: "CadastroContainer",
  components:{
    Input,
    Button
  },
  methods:{
    getUser():void{
        console.log("buscando user...")
        setTimeout(() => {
            let u = {cpf:'02607963010', name:'vanderson oliveira', email:'vanderson.th@gmail.com'}
            console.log('user', u)
        }, 2000);
    },
    setUser(u):void{

    }
  },
  computed:{
    municipios(){
        
    }
  }
});
</script>
<style lang="">
    
</style>