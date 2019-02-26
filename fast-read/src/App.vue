<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{titleHome}}</router-link> |
      <router-link to="/timer">{{titleTimer}}</router-link> |
            <router-link to="/jumper">{{titleJumper}}</router-link> |
            <router-link to="/faq">{{titleFaq}}</router-link> |
            <router-link to="/contact">{{titleContact}}</router-link>

    </div>
    <router-view/>
  </div>
</template>
<script>
import Copy from './assets/copy';

export default {
  name: 'appView',
  data() {
    return {
      titleHome: Copy.menu.home,
      titleTimer: Copy.menu.timer,
      titleJumper: Copy.menu.jumper,
      titleFaq: Copy.menu.faq,
      titleContact: Copy.menu.contact,
    };
  },

};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
button{
  background: #489e54;
  border:none;
  margin: 0 3px;
  padding:3px 10px;
  color: rgb(241, 241, 241);
  &:hover {
    background: #218a5b
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
        min-width:500px;
        min-height:300px;
    }
    .container{
        display:block;
       width:100%;
       height:600px;
       position: relative;
       background: #302e2e;
       color: #ff1919;
       text-transform: uppercase;
    }
</style>

</style>
