<template>
    <v-row class="justify-center mt-5">
        <v-col md='5' sm='12'>
            <v-card
                class="mx-auto"
                width="100%"
            >
                <v-toolbar
                    color="primary"
                    dark>
                    <v-toolbar-title>Iniciar sesión</v-toolbar-title>
                </v-toolbar>

                <v-container>
                    <v-form :autocomplete="'off'">
                        <v-text-field 
                            label="Correo electrónico" 
                            v-model="username"
                            dense 
                            outlined></v-text-field>
                        <v-text-field
                            v-model="password"
                            :type="'password'" 
                            label="Contraseña" 
                            dense 
                            outlined></v-text-field>
                    </v-form>
                    <v-btn class="primary" block large @click="formValidate()">Ingresar</v-btn>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {
  mapGetters: authMapGetter,
  mapActions: authMapActions
} = createNamespacedHelpers('auth')

export default{
    components:{
    },
    data(){
        return{
            username:'',
            password:'',
        }
    },
    mounted(){
    },
    created(){
    },
    methods:{
        ...authMapActions([
        'UPDATE_AUTHENTICATED_STATE'
        ]),
        formValidate(){
            let data = {
                'email':this.username,
                'password':this.password
            }

            this.$store.state.services.loginService
                .login(data)
                .then((r)=>{
                    let credentials = {
                        'token_expires_at':r.data.expires_in,
                        'access_token':r.data.access_token,
                        'refresh_token':r.data.refresh_token
                    }
                    this.$store.state.services.loginService.storeCredentials(credentials)
                    this.UPDATE_AUTHENTICATED_STATE(true)
                    this.$router.push('/')
                })
                .catch((e) =>{
                    this.$toastr.error(e.response.data.error)
                })
                .finally(()=>{

                })
        }
    },
}
</script>