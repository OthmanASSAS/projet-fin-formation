<template>
<div>
    <div class="dash-board">
      <div class="carte-cont-1">
        <div class="carte">
            <div @click="test" class="nb1">{{nombreTotal}} élèves</div>
            <div class="nb2">5 nbAbs absents ce jour</div>
        </div>

        <div class="carte">
            <div class="nb1">10 nbEnsT Enseignants</div>
            <div class="nb2">5 nbPrst présents ce jour</div>
        </div>

        <div class="carte">Evènements</div>
        <div class="carte">Messages</div>

    </div>


    


  </div>
  <dashboardb></dashboardb>   
  </div>
</template>

<script>
import Dashboardb from "./Dash-board-b";
import axios from 'axios'
export default {
  name: "dashboarda",
  components: {
    Dashboardb
  },
  data() {
    return {
      nombreTotal: null
    };
  },
  methods: {
    test() {
      console.log("hello", this.$ebus);
    },
    getUsagers() {
      const url = "http://51.15.224.76:8000/user";
      axios.get(url).then(response => {
        console.log("response data:", response.data);

        this.usagers = response.data;
        this.nombreTotal = response.data.length;
        this.$ebus.$emit("nombre-total", this.nombreTotal);
        console.log("________");
        console.log("nombre total:", this.nombreTotal)
      });
    },
  },
  created() {
    console.log("test");
    this.getUsagers()

    this.$ebus.$on("nombre-total", nombre => {
      console.log(nombre);
    });
  }
};
</script>

<style scoped>
.dash-board {
  margin-top: 50px;
}
.carte-cont-1 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.carte,
.nb1,
.nb2 {
  padding: 7px;
  background-color: rgba(139, 218, 238, 0.7);
  border-radius: 10px;
}
.carte {
  margin: 10px;
  height: 150px;
  width: 20%;
  min-width: 200px;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.nb1 {
  height: 70%;
}
.nb2 {
  height: 30%;
}

/* MEDIA QUERY */

@media screen and (min-width: 990px) and (max-width: 1023px) {
}

@media screen and (min-width: 768px) and (max-width: 989px) {
  .carte {
    width: 45%;
  }
}

@media screen and (min-width: 520px) and (max-width: 767px) {
  .carte {
    width: 45%;
  }
}

@media screen and (max-width: 519px) {
  .carte {
    width: 90%;
  }
}
</style>
