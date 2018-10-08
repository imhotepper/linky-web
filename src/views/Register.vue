<template>
  <div class="about">
    <h1>Register new feed</h1>
    <form @submit.prevent="submit" class="sized">
      <input type="text" v-model="url" placeholder="add your feed url" required>
      <button>Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){return{url:''}},
  methods:{
    submit(ev){
      console.log('saving: ', this.url);
        this.axios.post("/api/feeds",{"url":this.url})
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

