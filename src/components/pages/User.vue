<template>
  <div class="post">
    <div class="loading" v-if="loading">

    </div>
    <div  class="error" v-if="error">
    {{ error }}
    </div>

    <div class="content" v-if="post">
        <h2> {{ post.title }}</h2>
        <p> {{post.body}} </p>
    </div>

  </div>

</template>

<script>
export default {
    data() {
        return {
            loading: false,
            post: null,
            error: null
        }
    },

    created () {
        // Récupère les données à la création de la vue
    },
    watch: {
        // appeler encore la méthode si la route change
        '$route': 'fetchData'
    },
    
    methods: {
        fetchData () {
            this.error = this.post = null;
            this.loading = true;
        }
    }
};
</script>

<style>

</style>


