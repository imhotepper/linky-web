<template>
  <div class="about">
    <h1>Register new feed</h1>
    <form @submit.prevent="submit" class="sized">
      <input type="text" v-model="feed.name" placeholder="website name" required><br>
      <input type="website" v-model="feed.website" placeholder="source website" required><br>
      <input type="website" v-model="feed.feedUrl" placeholder="add your feed url" required><br>
      <button>Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){return{feed:{feedUrl:'', website:'',name:''}}},
  methods:{
    submit(){
      console.log('saving: ', this.url);
        this.axios.post("/api/feeds",this.feed)
        .then(res => {this.$router.push("/");})
        .catch(err => console.log(err));
    }
  }
}
</script>
<style scoped>
.sized {
  font-size: 150% !important;
}
</style>

