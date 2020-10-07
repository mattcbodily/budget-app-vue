<template>
    <h1>Welcome</h1>
    <input v-model='firstName'/>
    <input v-model='lastName'/>
    <input v-model='email'/>
    <input v-model='password'/>
    <input v-model='verPassword'/>
    <button v-on:click='login'>Log In</button>
    <button v-on:click='register'>Register</button>
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
            verPassword: ''
        }
    },
    methods: {
        login: function(){
            axios.post('/api/login', {email: this.email, password: this.password})
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        },
        register: function(){
            if(this.password && this.password === this.verPassword){
                axios.post('/api/register', {firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password})
                .then(res => {
                    console.log(res)
                })
                .catch(err => console.log(err));
            }
        }
    }
}
</script>