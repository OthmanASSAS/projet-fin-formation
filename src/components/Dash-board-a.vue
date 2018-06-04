<template>
<div>
    <div class="dash-board">
      <div class="carte-cont-1">
        <div class="carte">
            <div @click="test" class="nb1">{{nombreTotal}} élèves</div>
            <div class="nb2">5 absents ce jour</div>
        </div>

        <div class="carte">
            <div class="nb1">10 Enseignants</div>
            <div class="nb2">6 présents ce jour</div>
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
      const url = "http://localhost:8000/user";
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
*{
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif
}
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
  background-color: #F7F7F7;
  /* border-radius: 5px; */

  
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
