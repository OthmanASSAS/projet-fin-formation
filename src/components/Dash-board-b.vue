<template>
    <div class="dash-board-b">
    

    <div class="carte-cont-2">
        <div class="recap">graphique</div>
        <div class="to-do">to-do</div>
    </div>


  </div>
</template>

<script>
export default {
  name: "dashboardb",

};

</script>

<style scoped>
* {
  background-color: lightsteelblue;
}

.dash-board-b {
  margin-top: 50px;
}

.carte-cont-2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.recap {
  height: 400px;
  width: 65%;
  min-width: 450px;
  background-color: lightskyblue;
}

.to-do {
  height: 400px;
  width: 30%;
  min-width: 400px;
  background-color: lightseagreen;
}

@media screen and (min-width:520px) and (max-width:1023px) {
    .recap{
        width: 100%;
          min-width: 450px;

    }

    .to-do {
        width: 100%;
          min-width: 450px;

    }
}
</style>
