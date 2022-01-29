<template>
    <div>

        <div>
            <img src="../assets/logo.png" class="logo"/>
        </div>

        <div class="textContainer">
            <label id="text">Message the ones you love when they need you the most</label>

            <div class="buttonContainer">
                <b-button id="button" variant="primary" v-on:click="goToSignUp()" >Get started</b-button>
            </div>
        </div>


        
        





    </div>

</template>


<script src="./Home.js" />






<style>
body{
  background: #6bd891;
  overflow: hidden;
}


#button{
  color: 31415d;
  border-radius: 10px;
  background-color: #6bd891;
  align-self: center;
  position: relative;
  cursor: pointer;
  padding: 10px;

}


.logo {
    height: 60%;
    width: 60%; 
    object-fit: cover;
}

.buttonContainer {
    padding: 50px;
    font-family: "Merienda";
}

.textContainer {
    padding: 25px;
    background: #31415d;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
}

#text {
    color: white;
    font-family: "Merienda";
    font-size: 1.9em;
}


</style>

