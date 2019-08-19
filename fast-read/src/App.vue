<template>
  <div id="app">
    <div class="column-wrapper">
      <div id="nav">
        <ul>
          <li>
            <router-link to="/">{{copy.menu ? copy.menu.home : ''}}</router-link>
          </li>
          <li>
            <router-link to="/timer">{{copy.menu ? copy.menu.timer: ''}}</router-link>
          </li>
          <li>
            <router-link to="/jumper">{{copy.menu ? copy.menu.jumper: ''}}</router-link>
          </li>
          <li>
            <router-link to="/faq">{{copy.menu ?copy.menu.faq: ''}}</router-link>
          </li>
          <li>
            <router-link to="/contact">{{copy.menu ?copy.menu.contact: ''}}</router-link>
          </li>
        </ul>
      </div>

      <div class="app-wrapper">
        <transition name="router-anim" enter-active-class="animated bounceInLeft">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>

  <!-- OLD SETTINGS WRAPER -->
  <!-- <div class="settings-wraper" v-bind:class="{ activeSettings: showSettings }">
      <div class="img1" v-on:click="showSettings = !showSettings">
  <img src="../images/a1.png">-->
  <!-- </div>
   <div class="settings">
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
  </div>
  <div>Bind speed settings: {{'false'}}</div>-->

  <!-- DURING WORK BREAKING FLOOW, FIX IT LATER -->
</template>
<script>
    import {mapState} from "vuex";

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
            styles: function (newVal) {
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
<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
  }

  #app * {
    box-sizing: border-box;

  }

  #nav {
    display: block;
    box-sizing: content-box;
    text-align: center;
    min-height: 5vh;
    max-height: 18vh;
    z-index: 2;
    margin: 5%;

    ul {
      list-style-type: none;
      text-align: left;
      min-width:155px ;
      padding: 12%;
      border: 1px solid black;
      border-radius: 0 25% 0 25%;
      background: white;
      box-shadow: 10px 5px 5px #3C8CBE;

      li {
        display: block;
        font-size: 1.5em;
        background: white;
      }
    }

    a {
      font-weight: bold;
      padding: 0 10px;
      color: #424242;
      background: white;

      &.router-link-exact-active {
        font-weight: 700;
        text-decoration: underline;
      }
    }
  }

  .column-wrapper {
    display: flex;
    flex: 1 1;
  }

  .app-wrapper {
    flex: 1 1;
    margin: 2vh 2vh 0 0 ;
  }

  button {
    background: #FCD612;
    font-weight: bold;
    font-size: 18px;
    border: none;
    margin: 0 3px;
    padding: 3px 10px;
    color: #424242;

    &:hover {
      color:#26294A;
      border-style: solid;
      border-bottom-color: rgba(50, 98%, 53%, 0.7);
      border-width: 1px;
      outline-style: none;
      box-shadow: 3px 3px 3px rgba(293, 78%, 69%, 0.3);

    }
    &:focus {
      outline:0;
    }
  }

  // CONTACT + COUNTER + MAIN - THE SAME STYL FOR CSS

  h3 {
    margin: 0 0 10px 0;
  }

  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1em;
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



  .center {
    text-align: center;
  }

  .introduction {
    display: inline-block;
    max-width: 800px;
    text-align: center;
  }

  .textareaMain {
    max-width: 800px;
    min-width: 645px;
    min-height: 215px;
    padding: 0;
    margin-right: 0 3px 3px 3px;
    display: inline-block;
    margin-bottom: 5px;

    &:focus {
      background-color: #f8f9f9;
      border: 1px solid rgba(50, 98%, 53%, 0.7);
      outline-style: none;
      box-shadow: 3px 3px 3px rgba(293, 78%, 69%, 0.3);
    }
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
      /*border-bottom: 2px solid;*/
      margin-bottom: 10px;
      position: relative;

      input {
        margin: 0;
        padding: 0 5px;
        border: 0;
        background: #F7FCF0;
        color: #e073ee;
        height: 23px;

        &:focus {
          background-color: rgba(50, 98%, 53%, 0.3) ;
          box-shadow: 3px 3px 3px rgba(293, 78%, 69%, 0.3);
        }
      }

      span {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        padding: 0 10px;
        background: rgba(50, 98%, 53%, 0.3);
        color:#26294A;
        border-radius: 0 10px;

        &:hover {
          color:#26294A;
          border: 1px solid rgba(50, 98%, 53%, 0.7);
          outline-style: none;
          box-shadow: 3px 3px 3px rgba(293, 78%, 69%, 0.3);
          cursor: pointer;
        }

        &:nth-of-type(1) {
          right: -10px;
        }

        &:nth-of-type(2) {
          right: -60px;
        }
      }
    }
  }

  .results {
    text-align: left;
  }

  .resulttext {
    text-align: center;
    border: 1px solid;
    flex: 1;
    min-width: 70%;
    display: inline-block;
    margin-bottom: 2vh;
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
      background: var(--main_active_color, #56B4D3);
      float: left;
      max-width: 200px;
    }

    .img1 {
      float: left;
      max-width: 50px;


      img {
        width: 100%;
        background: #3C8CBE;
      }
    }
  }

  body,
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #56B4D3;
  }
</style>
<style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>

