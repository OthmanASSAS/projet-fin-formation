<template>
  <div class="userlist container">
    

 <h1 class="page-header">Update User fiche : {{usager.nom}} {{usager.prenom}}
     </h1>
     <router-link class="btn btn-outline-secondary" v-bind:to="'/userfiche/'+usager.id" >Retour</router-link>
     

 <!-- Début test tableau -->
 <form @submit.prevent="updateUsager">
 <table  class="table table-striped">
 

 <tr><th>Nom:</th>
    <td><input id="nom" type="text" name="name" v-model="usager.nom"></td></tr>
 <tr><th>Prénom:</th>
    <td><input id="prenom" type="text" name="name" v-model="usager.prenom"></td></tr>
 <tr><th>Date de naissance:</th>
    <td><input id="datenaissance" type="text" name="name" v-model="usager.datenaissance"></td></tr>
 <tr><th>Adresse:</th>
    <td><input id="adresse" type="text" name="name" v-model="usager.adresse"></td></tr>
 <tr><th>Code postal:</th>
    <td><input id="cp" type="text" name="name" v-model="usager.cp"></td></tr>
 <tr><th>Ville:</th>
    <td><input id="ville" type="text" name="name" v-model="usager.ville"></td></tr>
 <tr><th>Téléphone:</th>
    <td><input id="tel" type="text" name="name" v-model="usager.tel"></td></tr>
 <tr><th>Mail:</th>
    <td><input id="email" type="text" name="name" v-model="usager.email"></td></tr>
 <tr><th>Profession:</th>
    <td><input id="profession" type="text" name="name" v-model="usager.profession"></td></tr>
 <tr><th>Statut paiement:</th>
    <td><input id="statutpaiement" type="text" name="name" v-model="usager.statutpaiement"><button 
v-bind:class="{paiementincomplet: !usager.statutpaiement}"
v-on:click="changeBoutonStatut(usager)">{{usager.statutpaiement ? "payé" : "impayé"}}</button>
</td></tr>
<tr><th>Classe :</th>
    <td><select name="pays" id="classe" v-model="usager.classe">
           <option value="1H">1H</option>
           <option value="1SH">1SH</option>
           <option value="2H">2H</option>
           <option value="3H">3H</option>
           <option value="4H">4H</option>
       </select></td></tr>
     
    </table>

    <button type="submit" class="btn btn-primary" @click="updateUsager">Valider</button>
    </form>


  <!-- Fin test tableau -->

   <!-- Début fiche -->

   <!-- Fin fiche -->

    

  </div>



  

</template>

<script>
const moment = require('moment');
import axios from "axios";
export default {
  name: "userfiche",
  data() {
    return {
      titre: "Userlist dynamique",
      task: null, //pourquoi dire que c'est null ?
      tasks: [],
      statutPaiement: false,
      boutonStatut: "Impayé",
      usager: null,
      dateFormat: ''
    };
  },

  methods: {
    getUsager(id) {
      const url = "http://51.15.224.76:8000/userfiche/" + id;
      console.log("url:", url);
      console.log("id :", id);

      axios
        .get(url)
        .then(response => {
          this.usager = response.data[0];
          console.log('getUsager');
          this.usager.datenaissance = moment(this.usager.datenaissance).format('YYYY-MM-DD');
          
          
        })
        .catch(err => {
          console.error(err);
        });
    },
    updateUsager() {
      console.log("update");
      console.log("id:", this.$route.params.id);
      console.log('test', this.$el.querySelector("#nom").value);
      
      axios({
          method: "put",
          url: "http://51.15.224.76:8000/user/update/" + this.$route.params.id,
          data: {
            nom: this.$el.querySelector("#nom").value,
            prenom: this.$el.querySelector("#prenom").value,
            datenaissance: this.$el.querySelector("#datenaissance").value,
            adresse: this.$el.querySelector("#adresse").value,
            cp: this.$el.querySelector("#cp").value,
            ville: this.$el.querySelector("#ville").value,
            tel: this.$el.querySelector("#tel").value,
            email: this.$el.querySelector("#email").value,
            profession: this.$el.querySelector("#profession").value,
            classe: this.$el.querySelector("#classe").value
          }
        })

        // updateUsager

        .then(function(response) {
          console.log('envoyé');
          
          
        })
        .catch(err => {
          console.error('Ne marche pas:', err);
        });
    },
    changeBoutonStatut(u) {
      console.log("clic");
      console.log(u.statutpaiement);
      u.statutpaiement = !u.statutpaiement;
    }
  },
  created() {
    this.getUsager(this.$route.params.id);
  }
};
</script>

<style scoped>
.carte {
  background-color: rgba(181, 216, 248, 0.5);
  margin: 10px;
  padding: 10px;
  width: 25%;
  min-width: 300px;
  border-radius: 7px;
  box-shadow: 1px 1px 1px 3px rgba(0, 0, 0, 0.5);
}

p,
button {
  /* display: inline; */
  border-radius: 7px;
  padding: 5px;
}

.button-check {
  border-radius: 50px;
}

li {
  list-style: none;
  margin: 10px;
}

.paiementincomplet {
  background-color: rgb(236, 87, 117);
}
</style>

