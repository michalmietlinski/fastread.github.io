<template>
  <div id="app">
    <div class="leftSide">
      <div id="nav">
        <ul>
          <router-link to="/">{{copy.menu ? copy.menu.home : ''}}</router-link>
        </ul>
        <ul>
          <router-link to="/timer">{{copy.menu ? copy.menu.timer: ''}}</router-link>
        </ul>
        <ul>
          <router-link to="/jumper">{{copy.menu ? copy.menu.jumper: ''}}</router-link>
        </ul>
        <ul>
          <router-link to="/faq">{{copy.menu ?copy.menu.faq: ''}}</router-link>
        </ul>
        <ul>
          <router-link to="/contact">{{copy.menu ?copy.menu.contact: ''}}</router-link>
        </ul>
      </div>
    </div>
    <div class="app-wrapper">
      <transition name="router-anim" enter-active-class="animated bounceInLeft">
        <router-view/>
      </transition>
    </div>
    <!-- <div class="settings-wraper" v-bind:class="{ activeSettings: showSettings }">
      <div class="img1" v-on:click="showSettings = !showSettings">
        <img src="../images/a1.png">
      </div> -->
      <!-- <div class="settings">
        <h2>Settings:</h2>
        <div>
          Language:
          <select v-on:change="setLanguage">
            <option
              v-for="lang in availableLanguages"
              :selected="lang == language"
              :value="lang"
              v-bind:key="lang"
            >{{lang}}</option>
          </select>
        </div>
        <div>
          Theme:
          <select v-on:change="setTheme">
            <option
              v-for="oneTheme in availableThemes"
              :value="oneTheme"
              :selected="oneTheme == theme"
              v-bind:key="oneTheme"
            >{{oneTheme}}</option>
          </select>
        </div> -->
        <!-- <div>Bind speed settings: {{'false'}}</div>    DURING WORK BREAKING FLOOW, FIX IT LATER -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "appView",
  data() {
    return {
      showSettings: false
    };
  },
  computed: {
    ...mapState([
      "language",
      "availableLanguages",
      "copy",
      "styles",
      "availableThemes",
      "theme"
    ])
  },
  methods: {
    setLanguage(e) {
      this.$store.dispatch("setLanguage", e.target.value);
    },
    setTheme(e) {
      this.$store.dispatch("setTheme", e.target.value);
    }
  },
  watch: {
    styles: function(newVal) {
      this.$el.style.setProperty("--main_active_color", this.styles.mainColor);
    }
  },
  mounted() {
    window.addEventListener("load", () => {
      // run after everything is in-place
      this.$el.style.setProperty("--main_active_color", this.styles.mainColor);
    });
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
  box-sizing: border-box;
}
#app * {
  box-sizing: border-box;
}
#nav {
  padding: 0,5%;
  // max-width: ?;      - a html min width.
  
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  min-height: 100%;
  text-align: left;
  background: var(--main_active_color, #00c853);
  // border-radius: 0 0 30px 0;
  a {
    font-weight: bold;
    padding: 0 10px;
    color: #eeeeee;
    &.router-link-exact-active {
      font-weight: 700;
      text-decoration: underline;
      // color: var(--main_active_color, #42b983) ;
    }
  }
}
button {
  background: #69f0ae; //#000f80;
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
  color: var(--main_active_color, #42b983);
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
.container-jumper {
  display: inline-block;
  width: 100%;
  height: 600px;
  position: relative;
  background: #302e2e;
  color: #ff1919;
  text-transform: uppercase;
}
.center {
  text-align: center;
}

.introduction {
  display: inline-block;
  max-width: 800px;
  text-align: center;
}
.textareaMain {
  max-width: 500px;
  min-width: 450px;
  min-height: 115px;
  padding: 0;
  margin-right: 3px;
  display: inline-block;
}

.controls {
  display: inline-block;
  font-size: 16px;
  line-height: 25px;
  text-align: left;
  max-width: 500px;
  .column:first-of-type {
    .row {
      padding-left: 10px;
    }
  }
  .column {
    min-width: 110px;
    float: left;
  }
  .row {
    border-bottom: 2px solid;
    margin-bottom: 10px;
    position: relative;
    input {
      margin: 0;
      padding: 0 5px;
      border: 0;
      background: darkgray;
      color: #e60186;
      height: 23px;
    }
    span {
      position: absolute;
      right: 0;
      transform: translateX(100%);
      padding: 0 10px;
      background: darkgray;
      color: #e60186;
      border-radius: 0 10px;
    }
    span:nth-of-type(1) {
      right: -10px;
    }
    span:nth-of-type(2) {
      right: -60px;
    }
  }
}
.results {
  text-align: left;
}

.resulttext {
  text-align: left;
  &.centered {
    text-align: center;
    border-radius: 0 2px solid red;
  }
}

.settings-wraper {
  position: absolute;
  right: 0;
  &.activeSettings {
    .settings {
      display: block;
      border-radius: 0 0 0 30px;
      font-weight: 250;
    }
  }
  .settings {
    h2 {
      margin: 0;
    }
    display: none;
    padding: 5px;
    color: whitesmoke;
    background: var(--main_active_color, #42b983);
    float: left;
    max-width: 200px;
  }
  .img1 {
    float: left;
    max-width: 50px;
    img {
      width: 100%;
    }
  }
}

body,
html {
  margin-left: 50px;
  padding: 0;
}
// .app-wrapper {
//   width: auto;
//   float: right;
  // padding-top: 5vw;
  // padding: 0 auto;
// }
</style>

