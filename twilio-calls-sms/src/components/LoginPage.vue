<template>
  <div id="customerRegister">
    <div id="form__container">

      <form>
        <label>Username</label>
        <input type="text" required v-model="username" placeholder="Username">

        <!-- Email input text -->
        <label>Email</label>
        <input type="email" required v-model="email" placeholder="Email">

        <!-- Password input text -->
        <label>Password</label>
        <input type="password" required v-model="password" placeholder="Password">

        <!-- Password input text -->
        <label>Confirm Password</label>
        <input type="password" required v-model="confirmPass" placeholder="Confirm password">


        <div id="button_Container">
          <button id="button" v-bind:disabled= "!password|| !email|| !password|| !confirmPass"
                  v-on:click="">Register</button>
        </div>
        <div id="button_login">
          <button id="button" >Sign-in instead</button>
        </div>
      </form>

    </div>
  </div>

</template>


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
  width: 50%;
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
  border-radius: 10px;
  background-color: #2373F7;
  align-self: center;

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

