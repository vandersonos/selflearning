<template lang="">
    <section v-if="step == 1" id="step-1">
        <div class="mb-4">
            <label for="document_code"  :class="{'text-red-400': error.document_code}">CPF</label>
            <input id="document_codeId" name='document_code' type='text' class='rounded border-2 w-52' v-model="form.document_code"/>
            <div v-if="error.document_code" class="py-2 text-red-400">{{error.document_code}}</div>
        </div>
    </section>
    <section v-if="step == 2" id="step-2" class>
        <input v-model="form.id" type="hidden" class="form-control" id="input" >
        <div class="mb-4" :class="{'text-red-400': error.name}" style="display: block;">
            <label for="name" >Nome completo</label>
            <input id="nameId" name='name' type='text' class='rounded border-2 w-52' v-model="form.name"/>
            <div v-if="error.name" class="py-2 text-red-400">{{error.name}}</div>
        </div>
        <div class="mb-4" :class="{'text-red-400': error.birth_date}" style="display: block;">
            <label for="birth_date" >Data de nascimento</label>
            <input id="birth_dateId" birth_date='birth_date' type='date' class='rounded border-2 w-52' v-model="form.birth_date"/>
            <div v-if="error.birth_date" class="py-2 text-red-400">{{error.birth_date}}</div>
        </div>
        <div class="mb-4" :class="{'text-red-400': error.sex}" style="display: block;">
            <label class="" style="margin-right: 10px;">Sexo</label>
            <span class="mr-2 content-center">
                <input v-model="form.sex" type="radio" value="feminino" name="sex">
                <span style="margin-left: 6px;">Feminino</span>
            </span>
            <span class="mr-2 content-center">
                <input v-model="form.sex" type="radio" value="masculino" name="sex">
                <span style="margin-left: 6px;">Masculino</span>
            </span>
            <div v-if="error.sex" class="py-2 text-red-400">{{error.sex}}</div>
        </div>

        <div class="mb-4" :class="{'text-red-400': error.name_mother}" style="display: block;">
            <label for="name_mother" >Nome da mãe</label>
            <input id="name_motherId" name_mother='name_mother' type='text' class='rounded border-2 w-52' v-model="form.name_mother"/>
            <div v-if="error.name_mother" class="py-2 text-red-400">{{error.name_mother}}</div>
        </div>
        </section>
        <section v-if="step == 3" id="step-3" class>
            <div class="mb-4" :class="{'text-red-400': error.email}" style="display: block;">
                <label for="email" >E-mail</label>
                <input id="emailId" email='email' type='text' class='rounded border-2 w-52' v-model="form.email"/>
                <div v-if="error.email" class="py-2 text-red-400">{{error.email}}</div>
            </div>
            <div class="checkbox mb-4 " style="display: block;">
                <label>
                    <input v-model="form.receive_messages" type="checkbox" id="receive_messages" name="receive_messages" checked="checked"><span class="ripple"></span><span class="check"></span><span class="checkbox-material"></span> Gostaria de receber Mensagens sobre novas ofertas.
                </label>
                <div v-if="error.receive_messages" class="py-2 text-red-400">{{error.receive_messages}}</div>
            </div>

            <div class="mb-4" :class="{'text-red-400': error.uf}" style="display: block;">
                <label>UF e Município - onde mora</label>
                <div class="row">
                    <div class="mb-4 col-md-6" style="display: block;">
                        <select class="form-control" name="uf" v-model="form.uf" @change="getCountrys">
                            <option value="-1">Selecione</option>
                            <option v-for="(item, index) in ufs"  :key="item.sigla" :value="item.sigla">{{item.nome}}</option>
                        </select>
                        <div v-if="error.uf" class="py-2 text-red-400">{{error.uf}}</div>
                    </div>
                    <div class="mb-4" :class="{'text-red-400': error.country}" style="display: block;">
                        <select class="form-control" name="country" v-model="form.country">
                            <option value="-1">selecione...</option>
                            <option v-for="(item, index) in countrys"  :key="index" :value="item">{{item}}</option>
                        </select>
                        <div v-if="error.country" class="py-2 text-red-400">{{error.country}}</div>
                    </div>
                </div>
            </div>
    </section>
    <section v-if="step == 4" id="step-4" class>
        <div class="lead h4 termos" style="display: block;">Termos de Uso</div>
        <ul class="termos" style="display: block;">
          <li>Para obter o certificado o usuário deve conluir 70% dos conteúdos <span class="temNucleo" style="display:none;">de seu núcleo profissional</span> e deve ter média de acertos de 70% ou mais.</li>

          <li>O conteúdo deste Módulo de Autoaprendizagem é exclusivamente informativo. A certificação não habilita o concluinte a realizar procedimentos que não estejam regulamentados em sua respectiva profissão.</li>

          <li>As informações fornecidas pelo usuário no Formulário de Cadastro devem ser verdadeiras e atualizadas.</li>
        </ul>
        <div class="checkbox mb-4" style="display: block;">
            <label>
                <input v-model="form.accepted_terms" type="checkbox" id="accepted_terms" name="accepted_terms" checked="checked"><span class="ripple"></span><span class="check"></span><span class="checkbox-material"></span> Li e concordo com os Termos de Uso.
            </label>
            <div v-if="error.accepted_terms" class="py-2 text-red-400">{{error.accepted_terms}}</div>
        </div>

     
    
    </section>
    <section id="actions">
            <div class="py-4 flex items-center">
                <Button v-if="voltar" value="Voltar" type="primary" @click="lastCadastro" />
                <Button v-if="avancar" value="Avançar" type="primary" @click="nextCadastro" />
                <Button v-if="salvar" value="Salvar" type="primary" @click="submit" />
            </div>
    </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store"
import Button from "@/components/Formulario/Button.vue";
import ibge from "@/services/ibge"
export default defineComponent({
    name: "CadastroContainer",
    components: {
        Button
    },
    data(){
        let inputsForm = {
                document_code:'',
                name:'',
                birth_date:'',
                sex:'',
                name_mother:'',
                email:'',
                uf:'',
                country:'',
                receive_messages:'',
                accepted_terms:''
            }
        return {
            step:1,
            form: {...inputsForm},
            error: {...inputsForm},
            ufs: ibge.estados,
            countrys:[],
        }
    },
    computed:{
        salvar():boolean{
            return this.step == 4
        },
        avancar():boolean{
            return this.step < 4
        },
        voltar():boolean{
            return this.step > 1
        }
    },

    methods: {
        nextCadastro():void{
            if(!this.validate()){
                return
            }
            if(this.step < 4){
                this.step ++
            }
            

        },
        lastCadastro():void{
            if(this.step > 1){
                this.step --
            }
        },
        getUser(): void {
            console.log("buscando user...")
            setTimeout(() => {
                let u = { cpf: '02607963010', name: 'vanderson oliveira', email: 'vanderson.th@gmail.com' }
                console.log('user', u)
            }, 2000);
        },
        submit():void {
            console.log('salvando')
            store.commit('SETUSER', this.form)
        },
        validate():boolean{
            let f = this.form 
            console.log(this.form, 'form partial')
            //step1
            switch (this.step) {
                case 1:
                    if(!f.document_code || f.document_code.length < 11){
                        this.error.document_code = "O campo CPF válido é obrigatório!"
                        return false
                    }else{
                       this.error.document_code = ""
                    }
                    break;
                case 2:
                    if(!f.name || f.name.length < 8 || f.name.indexOf(' ') == -1){
                        this.error.name = "Um nome completo válido é obrigatório!"
                        return false
                    }else{
                       this.error.name = ""
                    }
                    console.log(this.form.birth_date, 'date form')
                    if(!this.validateDate(this.form.birth_date)){
                        this.error.birth_date = "Uma data de nascimento válida é obrigatória!"
                        return false
                    }else{
                         this.error.birth_date = ""
                    }
                    if(!f.sex || ["feminino","masculino"].indexOf(f.sex) == -1){
                        this.error.sex = "Um sexo válido é obrigatório!"
                        return false
                    }else{
                       this.error.sex = ""
                    }
                    if(!f.name_mother || f.name_mother.length < 8 || f.name_mother.indexOf(' ') == -1){
                        this.error.name_mother = "Um nome completo válido é obrigatório!"
                        return false
                    }else{
                       this.error.name_mother = ""
                    }
                    break;
                case 3:
                    if(!f.email || f.email.indexOf('@') == -1){
                        this.error.email = "Um email válido é obrigatório!"
                        return false
                    }else{
                       this.error.email = ""
                    }
                    if(!f.uf){
                        this.error.uf = "Um estado válido é obrigatório!"
                        return false
                    }else{
                       this.error.uf = ""
                    }
                    if(!f.country){
                        this.error.country = "Uma cidade válida é obrigatória!"
                        return false
                    }else{
                       this.error.country = ""
                    }
                    break;
                case 4:
                    if(!f.accepted_terms){
                        this.error.accepted_terms = "Aceitar os termos é obrigatório!"
                        return false
                    }else{
                       this.error.accepted_terms = ""
                    }
                    break;
            }

            return true
        },
        validateDate(p:String):bollean{
            if(!p){
                return false
            }
            let d = p.split('-')
            if(d.length !== 3 ){
                return false 
            }
            let d_aux = new Date(d[2]+'-'+d[1]+'-'+d[0])
            if(d_aux.toString() == 'Invalid Date'){
                return false
            }
            return true
            
        },
        getCountrys():void{
            var self = this;
            let uf = this.ufs.filter((e)=>{
                return e.sigla === self.form.uf
            })[0];
            console.log( uf, 'uf', self.form.uf)
            self.countrys = uf.cidades; 
        }
    },



});
</script>
<style lang="">
    
</style>