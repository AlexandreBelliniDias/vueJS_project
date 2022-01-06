<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <h1>Login</h1>
      <div class="form-group">
        <input required type="text" v-model="form.username" class="form-control" placeholder="username">
      </div>
      <div class="form-group">
        <input required type="password" v-model="form.password" class="form-control" placeholder="password">
      </div>
      <button class="btn btn-primary w-100">Login</button>
      </div>
    </div>
  </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data: () => ({
    form: {
      username: '',
      password:''
    }
  }),
  methods:{
    ...mapActions('login',['ActionDoLogin']),
    async submit(){
      try{
        await this.ActionDoLogin(this.form)
        this.$router.push({name: 'home'})
        console.log(this.form)
      } 
      catch (err) {
        console.log(err)
      }
    
    }
  }
}
</script>

<style>
.login-page{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(43, 43, 43);
  color: white;
}
.card{
 width: 30%;
 border: none;
 background-color: rgb(43, 43, 43);
}

.form-control{
  background-color: rgb(43, 43, 43);
  color: white;
}

.form-control:focus{
  background-color: rgb(43, 43, 43);
  color: white;
}

</style>