<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{copy.menu ? copy.menu.home : ''}}</router-link>|
      <router-link to="/timer">{{copy.menu ? copy.menu.timer: ''}}</router-link>|
      <router-link to="/jumper">{{copy.menu ? copy.menu.jumper: ''}}</router-link>|
      <router-link to="/faq">{{copy.menu ?copy.menu.faq: ''}}</router-link>|
      <router-link to="/contact">{{copy.menu ?copy.menu.contact: ''}}</router-link>
    </div>
    <div class="app-wrapper">
    <transition name="router-anim" enter-active-class="animated bounceInLeft">
          <router-view/>
    </transition>
    </div>
     <div class="settings-wraper" v-bind:class="{ activeSettings: showSettings }">
        <div class="img1" v-on:click="showSettings = !showSettings">
          <img src="../images/a1.png" >
        </div>
        <div class="settings" >
            <h2>Settings:</h2>
            <div>Language: <select v-on:change="setLanguage">
              <option v-for="lang in availableLanguages"  :selected="lang == language" :value="lang" v-bind:key="lang">{{lang}}</option>
            </select>
          </div>
          <div>Theme: <select v-on:change="setTheme">
        <option v-for="oneTheme in availableThemes" :value="oneTheme" :selected="oneTheme == theme" v-bind:key="oneTheme">{{oneTheme}}</option>
      </select>
      </div>
      <div>Bind speed settings: {{'false'}}</div>
    
      </div>
      
    </div>


    
  </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
  name: "appView",
  data() {
    return {
      showSettings: false
    };
  },
  computed: {
      ...mapState([
      'language',
      'availableLanguages',
      'copy',
      'styles',
      'availableThemes',
      'theme',
    ]),
  },
  methods:{
    setLanguage(e) {
      this.$store.dispatch('setLanguage', e.target.value)
    },
    setTheme(e) {
      this.$store.dispatch('setTheme', e.target.value)
    },
  },
   watch: {
    styles: function(newVal) {
      this.$el.style.setProperty('--main_active_color', this.styles.mainColor);

    }
  },
  mounted() {
    window.addEventListener('load', () => {
         // run after everything is in-place
         this.$el.style.setProperty('--main_active_color', this.styles.mainColor);
    })
  },
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
      color: var(--main_active_color, #42b983) ;
    }
  }
}
button {
  background: var(--main_active_color,#489e54);
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
    margin: 0 0 10px 0;
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
  color: var(--main_active_color,#42b983);
}

.container {
  display: inline-block;
  width: 800px;
  height: 600px;
  position: relative;
  background: #302e2e;  
  color: #ff1919;
  text-transform: uppercase;
}
.center{
  text-align: center;
}
.introduction { 
  display: inline-block;
  max-width: 800px;
  text-align: center;
}
.textareaMain {
  width: 800px;
  min-height: 250px;
}
.results{
    text-align: left;
}
.resulttext{
    text-align: left;
    &.centered{
      text-align:center;
    }
}
.settings-wraper {
  position:absolute;
  top:50px;
  right:0;
  text-align:left;
  &.activeSettings{
    .settings{
      display: block;
    }
  } 
  .settings{
    h2{
      margin:0;
    }
    display: none;
    padding:5px;
    background: #d5d5d5;
    float:left;
    max-width:200px;
  }
  .img1{
    float:left;
    max-width:50px;
    img{
      width: 100%;
      
    }
  }
}

body,html {
  margin:0;
  padding: 0;
}
.app-wrapper{
  max-width: 100vw;
  padding:0 auto;
}

</style>

