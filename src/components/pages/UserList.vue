<template>
  <div class="userlist container">
   <h1>Nombre d'élèves total : {{nombreTotal}}</h1>
   <br/>
    
<table class="table table-striped">
<thead> 
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>UserName</th>
    <th></th>
  </tr>
</thead>
<tbody>
  <tr v-for="(usager, n) in usagers" :key="n">
    <td>{{usager.id}}</td>
    <td>{{usager.nom}}</td>
    <td>{{usager.prenom}}</td>
    <td><button class="btn btn-outline-secondary"
v-bind:class="{paiementincomplet: !usager.statutpaiement}"
v-on:click="changeBoutonStatut(usager)">{{usager.statutpaiement ? "payé" : "impayé"}}</button></td>
    <td><router-link class="btn btn-outline-secondary" v-bind:to="'/userfiche/'+usager.id" >Voir</router-link></td>
     <td><button class="btn btn-outline-secondary" @click="supprimerUsager(usager)">X</button></td>
    </tr>
</tbody>

    </table>

  </div>



  

</template>

<script>
export default {
  data() {
    return {
      titre: "Userlist dynamique",
      task: null, //pourquoi dire que c'est null ?
      tasks: [],
      statutPaiement: false,
      boutonStatut: "Impayé",
      usagers: [],
      nombreTotal: null
    };
  },
  mounted() {
    this.getUsagers();
    console.log("nombre total:", this.nombreTotal);
  },
  methods: {
    getUsagers() {
      const url = "http://51.15.224.76:8000/user";
      axios.get(url).then(response => {
        console.log("response data:", response.data);

        this.usagers = response.data;
        this.nombreTotal = response.data.length;
        this.$ebus.$emit("nombre-total", this.nombreTotal);
        console.log("________");
        console.log("nombre total:", this.nombreTotal);
      });
    },
    enregistrer() {
      console.log("Sauvegardé");
    },
    supprimerUsager(usager) {
      console.log("usager :", usager.id);

      const url = "http://51.15.224.76:8000/user/delete/" + usager.id;
      axios
        .delete(url)
        .then(response => {
          console.log(response.data);
          /*  if (response.data.affectedRows){ this.$router.push({name: 'login'})} */
          console.log("________");
          if (response) {
            this.getUsagers();
          }
        })
        .catch(err => {
          console.error("error axios");

          console.error(err);
        });
    },
    changeBoutonStatut(u) {
      console.log("clic");
      console.log(u.statutpaiement);
      u.statutpaiement = !u.statutpaiement;
    }
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
table,
table .btn {
  font-size: 14px;
  color: black;
}
p {
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
  background-color: rgb(250, 132, 142);
}

input {
  margin: 10px;
}
</style>

