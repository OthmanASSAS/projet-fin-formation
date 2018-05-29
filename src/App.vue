<template>
  <div id="app">
   <entete></entete>
   <!-- <dashboarda></dashboarda>  
   <dashboardb></dashboardb> -->
   <router-view></router-view>
  </div>
</template>

<script>

import Dashboarda from './components/Dash-board-a'
import Dashboardb from './components/Dash-board-b'
import Formulaire from './components/pages/Formulaire.vue'

import Entete from './components/Entete'

export default {
  name: 'app',
  components: {
    Entete,
    Dashboarda,
    Dashboardb,
    Formulaire
    
  }}

</script>

<style>



*{
   margin:0;
  padding: 0;
  box-sizing: border-box;
}

</style>
