<template>
  <div id="login">
    <div id="form__container">

      <form>
        
        <!-- Email input text -->
        <h3></h3>
        <input type="email" required v-model="email" placeholder="Email">

        <!-- Password input text -->
        <h3></h3>
        <input type="password" required v-model="password" placeholder="Password">

        <h3></h3>
        <div >
          <span v-if="error" style="color:red">{{error}} </span>
        </div>
        <h3></h3>
        <div id="button_Container">
          <b-button id="button" @click="login(email, password)" >Login</b-button>
        </div>
        <h3></h3>
        <div >
          <button id="button_signup" v-on:click="goToSignUp()" >Don't have an account? Create one</button>
        </div>
      </form>

    </div>
  </div>

</template>

<script src="./Login.js" />


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
  width: 30%;
  height: 50%;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  padding: 20px;
}

#createAccount__button{
  color: blue;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
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

}

#button_signup{
  color: white;
  border: none;
  font-family: "Merienda";
  background-color: Transparent;
  align-self: center;
  cursor: pointer;

}

label {
  font-family: "Merienda";
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

