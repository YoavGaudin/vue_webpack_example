<template>
  <div class="hello">
    <h1 @click="getMessage()">{{ msg }}</h1>
    <p>{{ customMsg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Vue.js Hello App',
      customMsg: ''
    }
  },
  methods: {
    getMessage: function() {
      this.$http.get("http://localhost:8000/")
        .then((response) => {
        // console.log(response.data);
        this.customMsg = response.data['app1'];
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
