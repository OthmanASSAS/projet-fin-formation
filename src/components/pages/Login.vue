<template>
  <div>
    <div class="logo"></div>

    <div class="connexion">

      <form>

        <input type="email" class="identifiant" v-model="email" placeholder="email identifiant">
        <input type="password" class="mdp" v-model="mdp" placeholder="mot de passe">
        <button type="submit" @click.prevent="loginUser">Connexion</button>

        <div class="lien">
          <a href="#">Mot de passe oublié</a>

        </div>


      </form>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "login",
    data() {
      return {
        email: '',
        mdp: ''
      };
    },
    methods: {
      loginUser() {
        console.log('email :', this.email);

        /* axios({
          method: "post",
          url: "http://localhost:8000/login",
          data: {
            email: this.email,
            mdp: this.mdp
          }
        }).then(response => {
          console.log(response);
          console.log('email : ', this.email);
          console.log('mdp : ', this.mdp);





        }) */



      }
    }
  };

</script>

<style scoped>
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  .connexion {
    height: 100vh;
    align-items: center;
    display: flex;
    justify-content: center;
    background-image: url("../../assets/fondEcran.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }

  form {
    width: 500px;
    height: 350px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(217, 224, 241, 0.5);
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  input {
    border: none;
    text-align: center;
    height: 50px;
    width: 400px;
    margin-bottom: 20px;
    font-size: 18px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  }

  button {
    border: none;
    height: 40px;
    width: 200px;
    display: block;
    background-color: rgba(108, 184, 137, 0.6);
    font-size: 18px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  }

  .lien {
    width: 500px;
    text-align: center;
  }

  .lien a {
    text-decoration: none;
  }

  @media screen and (max-width: 519px) {
    form {
      width: 100%;
    }

    input {
      width: 95%;
    }
  }

</style>
