
<template>
  <div class="userlist container">
    

 <h1 class="page-header">User fiche : {{usager.nom}} {{usager.prenom}}
     </h1>
     <router-link class="btn btn-outline-secondary" v-bind:to="'/userlist'" >Retour</router-link>
     <router-link class="btn btn-outline-secondary" v-bind:to="'/edit/'+usager.id" >Modifier</router-link>
     <button @click="supprimerUsager(usager)" class="btn btn-outline-secondary">Supprimer</button>

 <!-- Début test tableau -->
 <table  class="table table-striped">
 
 <tr><th>Id:</th>
    <td>{{usager.id}}</td></tr>
 <tr><th>Nom:</th>
    <td>{{usager.nom}}</td></tr>
 <tr><th>Prénom:</th>
    <td>{{usager.prenom}}</td></tr>
 <tr><th>Date de naissance:</th>
    <td>{{usager.datenaissance}}</td></tr>
 <tr><th>Adresse:</th>
    <td>{{usager.adresse}}</td></tr>
 <tr><th>Code postal:</th>
    <td>{{usager.cp}}</td></tr>
 <tr><th>Ville:</th>
    <td>{{usager.ville}}</td></tr>
 <tr><th>Téléphone:</th>
    <td>{{usager.tel}}</td></tr>
 <tr><th>Mail:</th>
    <td>{{usager.email}}</td></tr>
 <tr><th>Profession:</th>
    <td>{{usager.profession}}</td></tr>
 <tr><th>Statut paiement:</th>
    <td>{{usager.statutpaiement}} <button 
v-bind:class="{paiementincomplet: !usager.statutpaiement}"
v-on:click="changeBoutonStatut(usager)">{{usager.statutpaiement ? "payé" : "impayé"}}</button>
</td></tr>
<tr><th>Classe :</th>
    <td>{{usager.classe}}</td></tr>
    </table>


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
      
    };
  },

  methods: {
    getUsager(id) {
      const url = "http://51.15.224.76:80/userfiche/" + id;
      console.log("url:", url);
      console.log("id :", id);

      axios.get(url)
        .then(response => {
          console.log("response data", response.data);

          this.usager = response.data[0];
          console.log("usager :", this.usager);
          console.log('-------');
          
          console.log('datenaissance :', moment(this.usager.datenaissance).format('YYYY-MM-DD'));
          this.usager.datenaissance = moment(this.usager.datenaissance).format('YYYY-MM-DD')
          
      
        })
        .catch(err => {
          console.error(err);
        });
    },

/*  début supprimer utilisateur */

    supprimerUsager(usager) {
      // var confirmation =
      var confirmation = confirm(
        `Etes-vous sûr de supprimer : ${usager.nom} ${usager.prenom} ?`
      );
      if (confirmation) {
        console.log("supprimé");

      }
    },



/* Fin supprimer utilisateur */



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

input {
  margin: 10px;
}
</style>

