<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{copy.menu ? copy.menu.home : ''}}</router-link>|
      <router-link to="/timer">{{copy.menu ? copy.menu.timer: ''}}</router-link>|
      <router-link to="/jumper">{{copy.menu ? copy.menu.jumper: ''}}</router-link>|
      <router-link to="/faq">{{copy.menu ?copy.menu.faq: ''}}</router-link>|
      <router-link to="/contact">{{copy.menu ?copy.menu.contact: ''}}</router-link>
    </div>
    <transition name="router-anim" enter-active-class="animated bounceInLeft">
          <router-view/>
    </transition>
    <div class="settings">
      <h2>Settings:</h2>
      <div>Language: <select v-on:change="setLanguage">
        <option v-for="lang in availableLanguages" :value="lang" v-bind:key="lang">{{lang}}</option>
      </select>
      </div>
      <div>Theme: {{'default'}}</div>
      <div>Bind speed settings: {{'false'}}</div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
  name: "appView",
  data() {
    return {
      
    };
  },
  computed: {
      ...mapState([
      'language',
      'availableLanguages',
      'copy'
    ]),
  },
  methods:{
    setLanguage(e) {
      this.$store.dispatch('setLanguage', e.target.value)
    },
  }
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

</style>
<style lang="scss">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
button {
  background: #489e54;
  border: none;
  margin: 0 3px;
  padding: 3px 10px;
  color: rgb(241, 241, 241);
  &:hover {
    background: #218a5b;
  }
}
// CONTACT + COUNTER + MAIN - THE SAME STYL FOR CSS
h3 {
  margin: 40px 0 0;
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
textarea {
  min-width: 500px;
  min-height: 300px;
}
.container {
  display: block;
  width: 100%;
  height: 600px;
  position: relative;
  background: #302e2e;
  color: #ff1919;
  text-transform: uppercase;
}
.controls{
  text-align: left;
}
.results{
    text-align: left;
}
.inputtext{
      text-align: left;
}
.resulttext{
    text-align: left;
    &.centered{
      text-align:center;
    }
}
.settings{
  h2{
    margin:0;
  }
  position:absolute;
  top:50px;
  right:0;
  text-align:left;
  max-width:200px;
  padding:5px;
  background: #d5d5d5;
}
</style>

