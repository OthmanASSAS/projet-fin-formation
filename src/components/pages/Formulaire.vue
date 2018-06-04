<template>
<div class=" formul container">

 <div class="formulaire">
   
    <h1>Formulaire de pré-inscription</h1>
    <form method="post" id="form-ins">

      <label for="nom">Nom :</label>
      <br>
      <input id="nom" type="text" name="nom" value="Assas" required>
      <br>
      <label for="prenom">Prénom :</label>
      <br>
      <input id="prenom" type="text" name="prenom" value="Othman" required>
      <br>
      <label for="datenaissance">Date de naissance :</label>
      <br>
      <input id="datenaissance" type="date" name="datenaissance" value="01/01/1980" required>
      <br>
      <label for="adresse">Adresse :</label>
      <br>
      <input id="adresse" type="text" name="adresse" value="14 allée Newton"  required>
      <br>
      <label for="cp">Code Postal :</label>
      <br>
      <input id="cp" type="text" name="cp" value="93330" required>
      <br>
      <label for="ville">Ville</label>
      <br>
      <input id="ville" type="text" name="ville" value="Neuilly-sur-Marne" required>
      <br>
      <label for="tel">Téléphone :</label>
      <br>
      <input id="tel" type="text" name="tel" value="0663341982" required>
      <br>
      <label for="email">Email :</label>
      <br>
      <input id="email" type="mail" name="email" value="othman_assas@hotmail.fr" required>
      <br>
      <label for="profession">Profession :</label>
      <br>
      <input id="profession" type="profession" name="profession" value="Développeur Web" required>
      <br>
      <input @click.prevent="postDataToServer" type="submit" value="Valider">
      <!-- <button v-on:click="ajouterData">Valider Vue JS</button> -->
    </form>

  </div>
 </div>
</template>

<script>
import alert from '../Alert'
import axios from "axios";

export default {
  name: "formulaire",
  data: {
    info: '',
    tabInfos: [],
    alert: true
  },
  methods: {
    postDataToServer(event) {
      var formulaire = document.getElementById("form-ins");
      // event.preventDefault();
      if (!this.$el.querySelector("#nom").value || !this.$el.querySelector("#prenom").value || !this.$el.querySelector("#datenaissance").value || !this.$el.querySelector("#adresse").value || !this.$el.querySelector("#cp").value || !this.$el.querySelector("#ville").value || !this.$el.querySelector("#tel").value || !this.$el.querySelector("#email").value || !this.$el.querySelector("#profession").value){
        console.log('tous les champs doivent être remplis');
        this.$router.push({path: "/formulaire", query: {alert: 'Erreur'}})
        
      } else {
      axios({
        method: "post",
        url: "http://51.15.224.76:80/dataFormulaire",
        data:{
          nom: this.$el.querySelector("#nom").value,
          prenom: this.$el.querySelector("#prenom").value,
          datenaissance: this.$el.querySelector("#datenaissance").value,
          adresse: this.$el.querySelector("#adresse").value,
          cp: this.$el.querySelector("#cp").value,
          ville: this.$el.querySelector("#ville").value,
          tel: this.$el.querySelector("#tel").value,
          email: this.$el.querySelector("#email").value,
          profession: this.$el.querySelector("#profession").value,
},
      }).then(response=>{
          console.log(response);
          console.log('date de naissance: ',this.$el.querySelector("#datenaissance").value);
          
          this.$router.push({path: '/'})
      });

    }},
 
 },
 components: {
   alert
 }
 
};
</script>


<style scoped>
.formulaire {
  /* background-image: url("../../assets/fondEcran.jpg"); */
  /* background-repeat: repeat; */
  background-size: cover;
  height: 100vh;

}
* {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
}

form {
  background: rgb(217, 224, 241, 0.5);
  width: 400px;
  padding: 20px 0px;
  margin: auto;
  text-align: center;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
}

input {
  font-size: 16px;
  height: 30px;
  margin: 10px 0;
  width: 300px;
  text-align: center;
  border: none;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
}

input:last-child {
  background-color: #bd4e4e;
  border: none;
  color: white;
}

@media screen and (max-width: 519px) {
  form {
    width: 90%;
  }

  input {
    width: 90%;
  }
}
</style>
