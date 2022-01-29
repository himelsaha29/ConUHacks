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

        <div id="button_Container">
          <button id="button" 
                  v-on:click="enter()" >Login</button>
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
  background: #F6F6F6;
}

#form__container{
  background-color: #F6F6F6;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

form{
  width: 30%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid lightgray;
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
  color: blue;
  border: none;
  background-color: Transparent;
  align-self: center;
  cursor: pointer;

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

