<template>
    <div id="form__container">


    <form>

        <!-- Email input text -->
        <h3></h3>
        <input type="email" required v-model="email" placeholder="Email">

        <h1></h1>
        <input type="text" required v-model="to" placeholder="Phone number to send text to">

        
        <!-- Message input text -->
        <h3></h3>
        <input type="text" required v-model="message" placeholder="Message">


        <div id="button_Container">
          <button id="button" v-bind:disabled= "!to || !message"
                  v-on:click="" >Send Text</button>
        </div>
        
      </form>

      <div id="loginRegister">


            <button id="button" v-on:click="logout()" >Logout</button>

        
        </div>


    </div>

</template>


<script src="./Function.js" />





<style>
body{
  background: #F6F6F6;
}


#loginRegister {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 20px;
}

#form__container{
  background-color: #F6F6F6;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}



</style>

