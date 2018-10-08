<template>
  <div class="home">
   
    <h2 v-show="loading">loading ...</h2>
    <div v-show="!loading">
      <ul id="nav">
          <li v-for="i in items" :key="i.id"> 
            <a  @click="updateStats(i)" > {{i.title}} </a>
            <p>by <a :href="i.website" target="_blank" > {{i.name}} </a> on {{i.pubDate}}</p>
            </li>
        </ul>
      <h2 v-show="this.items == 0">Empty, just empty!</h2>
      <button @click="prev" v-show="this.page > 1"> <<< Prev </button> &nbsp;
      <button @click="next" v-show="this.items.length > 0">Next >>> </button>
    </div>
        
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{ items : [], page:1, loading:false}
  },
  methods:{
    next(){this.page++;this.loadShows()},
    prev(){if(this.page >1){this.page--;this.loadShows()}},
    loadShows(){
      this.loading = !this.loading;
      this.axios.get(`/api/shows?page=${this.page}`)
      .then(resp => {
        this.items = resp.data;
        this.loading = !this.loading;
        })
      .catch(err => {
        this.loading = !this.loading;console.log(err);});
    },
    updateStats(show){
       var win = window.open(show.url, '_blank');
       win.focus();
      this.axios.post(`/api/shows/stats/${show.id}`)       
    }
  },
  created(){this.loadShows();}
}
</script>

<style>
ul{list-style-type: none}
li>a:hover{ cursor:pointer}
a {text-decoration: none;
  color: #42b983;
}
</style>

