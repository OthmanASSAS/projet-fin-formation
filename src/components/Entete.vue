<template>
<div>
  
    <div class="entete">
      
      <div class="logo">
<p>Gest-Easy</p>
      </div>
      
      <div class="login">
          <router-link :to="'/login'"><p>Login</p></router-link>
      </div>



  </div>
  <burger></burger>
</div>
</template>

<script>
import Burger from "./Burger.vue";

export default {
  name: "entete",
  components: {
    Burger
  }
};
</script>

<style scoped>
* {
  background-color: #173c5c;
}

.logo{
  min-width: 100px;
}

.entete {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo,
.recherche,
.login {
  line-height: 50px;
  text-align: center;
  height: 50px;
  font-size: 20px;
}
.recherche input{
  padding-left: 10px;
}

.logo p, .login p {
  color: white;
  text-decoration: none;
}

a {
    text-decoration: none;

}

.logo {
  width: 15%;
}

.recherche {
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  width: 15%;
}

input {
  height: 30px;
  width: 500px;
  background-color: white;
  border: none;
}

@media screen and (max-width:767px) {
.logo, .recherche, .login {
  width: 90%;
}

.recherche {
  margin: auto;
}
}
</style>
