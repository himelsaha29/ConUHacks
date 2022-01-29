<template>
    <div>

        <div id="logo">
            <img src="../assets/logo.png"/>
        </div>

        <div id="loginRegister">

            <button id="button" v-on:click="goToSignUp()" >Register</button>

            <button id="button" v-on:click="goToLogin()" >Login</button>

        
        </div>





    </div>

</template>


<script src="./Home.js" />






<style>
body{
  background: #FFFFFF;
}


#loginRegister {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 20px;
}

#button{
  color: white;
  border-radius: 5px;
  background-color: #2373F7;
  align-self: center;

}


</style>

