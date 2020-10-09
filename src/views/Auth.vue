<template>
    <h1>Welcome</h1>
    <input v-if='registerView' v-model='firstName'/>
    <input v-if='registerView' v-model='lastName'/>
    <input v-model='email'/>
    <input v-model='password'/>
    <input v-if='registerView' v-model='verPassword'/>
    <button v-if='registerView' v-on:click='register'>Register</button>
    <button v-else v-on:click='login'>Log In</button>
    <p v-if='registerView'>Have an account? <span v-on:click='toggleView(false)'>Sign in here</span></p>
    <p v-else>Don't have an account? <span v-on:click='toggleView(true)'>Register here</span></p>
</template>

<script>
import axios from 'axios';

export default {
    data: function(){
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            verPassword: '',
            registerView: false
        }
    },
    methods: {
        login: function(){
            axios.post('/api/login', {email: this.email, password: this.password})
            .then(res => {
                this.$router.push({path: `/dash/${res.data.user_id}`});
            })
            .catch(err => console.log(err))
        },
        register: function(){
            if(this.password && this.password === this.verPassword){
                axios.post('/api/register', {firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password})
                .then(res => {
                    this.$router.push({path: `/dash/${res.data.user_id}`});
                })
                .catch(err => console.log(err));
            }
        },
        toggleView: function(val){
            this.registerView = val;
        }
    }
}
</script>