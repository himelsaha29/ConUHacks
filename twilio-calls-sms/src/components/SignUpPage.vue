<template>
  <div id="register">
    <div id="form__container">

      <form>
        <h1></h1>
        <input type="text" required v-model="username" placeholder="Username">

        <!-- Email input text -->
        <h3></h3>
        <input type="email" required v-model="email" placeholder="Email">

        <!-- Password input text -->
        <h3></h3>
        <input type="password" required v-model="password" placeholder="Password">

        <!-- Password input text -->
        <h3></h3>
        <input type="password" required v-model="confirmPass" placeholder="Confirm password">


        <div id="button_Container">
          <b-button id="button" v-bind:disabled= "!username|| !email|| !password|| !confirmPass"
                  v-on:click="" >Register</b-button>
        </div>
        <h3></h3>
        <div >
          <button variant="primary"id="button_login" v-on:click="goToLogin()" >Already have an account? Just login</button>
        </div>
      </form>

    </div>
  </div>

</template>

<script src="./SignUp.js" />


<style>
body{
  background: #6bd891;
}

#form__container{
  background-color: #6bd891;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

form{
  background-color: #31415d;
  width: 30%;
  height: 50%;
  display: flex;
  border: none;
  flex-direction: column;
  padding: 20px;
}


#forgotPassword__button{
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;

}

#button{
  color: white;
  border-radius: 5px;
  background-color: #2373F7;
  align-self: center;
  font-family: "Merienda";

}


#button_login{
  color: white;
  border: none;
  background-color: Transparent;
  align-self: center;
  cursor: pointer;
  font-family: "Merienda";

}

label {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  margin-top: 8px;
}

input{
  width: 100%;
  border-radius: 4px;
}

#button_Container{
  margin-top: 16px;
  align-self: center;
}


</style>

