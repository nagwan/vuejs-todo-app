<template>
  <div class="logIn">
    <form  @submit.prevent="submitLogIn">

    <h2>For every minute spent organizing, an hour is earned</h2>
       <br>
    <div class="field">
      <p class="control has-icons-left has-icons-right" >
        <input class="input" ref='txtEmail' type="email" placeholder="Email" @input='checkEmailValidation'
        :class='[emailSuccessClass]' required>
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
        <span class="icon is-small is-right" :class='[emailIconClass]'></span>

      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" @input='checkPasswordValidation' ref='txtPassword' 
        :class='[passwordSuccessClass]' required>
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
        <span class="icon is-small is-right" :class='[passwordIconClass]'></span>
      </p>
    </div>
    <div class="field">
      <p class="control">

        <button type="submit"  class="button is-success is-normal is-right">Log in</button>
        <router
      </p>
    </div>
    
    </form>
  </div>
</template>

<script>
  export default {
  name: 'logInComponent',
  data () {
    return {

      emailSuccessClass:'',
      passwordSuccessClass:'',
      emailIconClass:'',
      passwordIconClass:'',
    }
  },
  methods: {

    checkEmailValidation(){

     (this.$refs.txtEmail.value === 'aaa@bbb') ? 
     (this.emailSuccessClass = 'is-success') && (this.emailIconClass = 'fa fa-check') : 
     (this.emailSuccessClass = 'is-danger') && (this.emailIconClass = 'fa fa-remove')

    },

    checkPasswordValidation(){

      (this.$refs.txtPassword.value === '012345') ? 
      (this.passwordSuccessClass = 'is-success') && (this.passwordIconClass = 'fa fa-check') : 
      (this.passwordSuccessClass = 'is-danger') && (this.passwordIconClass = 'fa fa-remove')

       },

    submitLogIn(){

       (this.$refs.txtEmail.value === 'aaa@bbb' && this.$refs.txtPassword.value === '012345') ?

        this.$router.replace('/mainComponent') : this.$router.replace('/')
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mediaQuery'

.logIn
    height: 65%
    width: 40%
    margin: auto
    background: rgba(0,0,0,0.8)
    color: white 
    font-family: serif
    padding: 30px
    margin-top: 10%
    text-align: center


</style>
