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
<style lang="scss">
  @mixin btn() {
    button {
      background: hsla(50, 98%, 53%, 0.3);
      font-weight: bold;
      font-size: 18px;
      border: none;
      margin: 0 3px;
      padding: 3px 10px;
      color: #424242;

      &:hover {
        color: #26294A;
        background: hsla(50, 98%, 53%, 0.7);
        outline-style: none;
        box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.3);

      }

      &:focus {
        outline: 0;
      }
    }
  }

  @media(min-width: 992px) {
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
      justify-content: center;
      /*align-items: stretch;*/
      /*align-content: stretch;*/
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
        min-width: 159px;
        padding: 12%;
        border: 1px solid black;
        border-radius: 0 25% 0 25%;
        background: white;
        box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);

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
        cursor: pointer;
        text-decoration: none;
        margin-bottom: 2px;

        &:hover {
          background-color: hsla(50, 98%, 53%, 0.3);
          border-radius: 15px;
        }

        &.router-link-exact-active {
          font-weight: 700;
          text-decoration: underline;
          text-decoration-color: hsla(293, 78%, 69%, 0.7);
        }

      }
    }

    .column-wrapper {
      display: flex;
      flex: 1 1;
    }

    .app-wrapper {
      flex: 1 1;
      margin: 2vh 2vh 0 0;
    }

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
      color: var(--main_active_color, red);
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

    /*.resulttext,*/
    .textareaMain {
      display: inline-block;
      max-width: 800px;
      min-width: 645px;
      min-height: 215px;
      font-size: 25px;
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      padding: 0;

      &:focus {
        background-color: #f8f9f9;
        border: 1px solid hsla(50, 98%, 53%, 0.7);
        outline-style: none;
        box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.2);
      }
    }

    .container-Main {
      @include btn();
      .resulttext {
        text-align: center;
        border: 1px solid;
        flex: 1;
        min-width: 70%;
        display: inline-block;
        margin-bottom: 2vh;
      }
    }

    .controls {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      line-height: 25px;

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
            color: #26294A;
            background-color: hsla(50, 98%, 53%, 0.3);
            box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.3);
            outline-style: none;
          }
        }

        span {
          position: absolute;
          right: 0;
          transform: translateX(100%);
          padding: 0 10px;
          background: hsla(50, 98%, 53%, 0.3);
          color: #e073ee;
          border-radius: 0 10px;

          &:hover {
            color: #26294A;
            border: 1px solid hsla(50, 98%, 53%, 0.7);
            outline-style: none;
            box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.3);
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
        background: #56B4D3;

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

    // CONTACT
    .timer ul li {
      span {
        min-width: 150px;
        font-weight: 700;
      }

      width: 33%;
      padding: 0;
      margin: 0;
    }

    .results {
      h2 {
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        list-style: none;
        li{
          p {}
        }
        li:first-child {
          background: hsla(50, 98%, 53%, 0.3);
          box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.2);
          border-radius: 0 15%;
          padding: 5px 0 0 17px;
          margin: 0 30%;
        }
      }
    }

    // FAQ
    .container-faq-css {
      display: block;

      .faq-css {
        display: block;
        max-width: 400px;
        margin: 4vh auto;
        border: 1px solid black;
        border-radius: 0 20% 0 25%;
        background: white;
        box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);

        li {
          display: block;
          text-align: left;
          margin: 5vh;

          .opened {
            float: right;
          }
        }

        h3 {
          cursor: pointer;
        }
      }
    }

    //JUMPER
    .container-jumper {
      display: inline-block;
      position: relative;
      background: #302e2e;
      color: #F6BF45;
      text-transform: uppercase;
    }
    .container-main-jumper {
      background: white;
      border-radius: 0 8% 0 8%;
      border: 1px solid black;
      box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);
      max-width: 1400px;
      min-height: 800px;

      .topleft {
        position: absolute;
        left: 0;
        top: 0;
        padding: 20px;
      }

      .topright {
        position: absolute;
        right: 0;
        top: 0;
        padding: 20px;
      }

      .bottomleft {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 20px;
      }

      .bottomright {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 20px;
      }

      .textareaJumper {
        width: 90%;
        max-width: 450px;
        min-height: 230px;
        resize: none;
      }

      .container-jumper textarea {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .container-jumper .controller {
        padding-top: 10px;
        position: absolute;
        left: 50%;
        transform: translate(-50%);

        button {
          margin-bottom: 10px;
          background: hsla(50, 98%, 53%, 0.7);
          &:hover {
            background: hsla(50, 98%, 53%, 1);
          }
        }
        input {
          height: 27px;
          padding-top: 5px;
        }
      }

      #range-slider  {
        -webkit-appearance: none;
        margin: 2.5vh 0;
        width: 50%;
      }
      #range-slider:focus {
        outline: none;
      }
      #range-slider::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #FCD612;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
      }
      #range-slider::-webkit-slider-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 26px;
        width: 26px;
        border-radius: 50%/*3px*/;
        background: #F7FCF0;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -11px;
      }
    }

    // MAIN
    .container-Main {
      border: 1px solid black;
      background: white;
      border-radius: 0 8% 0 8%;
      box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);
      max-width: 900px;
    }

    .controlsImg {
      display: inline-block;
      vertical-align: middle;
      width: 2.1875em;
      height: 2.1875em;
    }
  }
  @media(max-width: 991px) {
    #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      box-sizing: border-box;

      #nav {
        display: block;
        box-sizing: content-box;
        text-align: center;
        z-index: 2;
        margin: 0 2vw;

        ul {
          display: flex;
          justify-content: center;

          list-style-type: none;
          background: white;
          border: 1px solid black;
          border-radius: 25px;
          box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);

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
          cursor: pointer;
          text-decoration: none;
          margin-bottom: 2px;

          &:hover {
            background-color: hsla(50, 98%, 53%, 0.3);
            border-radius: 15px;
          }

          &.router-link-exact-active {
            font-weight: 700;
            text-decoration: underline;
            text-decoration-color: hsla(293, 78%, 69%, 0.7);
          }

        }
      }
    }
    .app-wrapper {
      margin: 0 2vw;

      // MAIN
      .container-Main {
        border: 1px solid black;
        background: white;
        border-radius: 0 8% 0 8%;
        box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);
        margin: 0 2vw;
        .introduction {
          display: inline-block;
          text-align: center;

          h2 {
            font-size: 2em;
            margin: 5px 0 0 0;
          }
          p {
            font-size: 1em;
            margin: 8px;
          }
        }
      }
      //TIMER
      .timer ul li {
        span {
          min-width: 150px;
          font-weight: 700;
        }

        width: 33%;
        padding: 0;
        margin: 0;
      }
      .controls {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        line-height: 25px;

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
              color: #26294A;
              background-color: hsla(50, 98%, 53%, 0.3);
              box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.3);
              outline-style: none;
            }
          }

          span {
            position: absolute;
            right: 0;
            transform: translateX(100%);
            padding: 0 10px;
            background: hsla(50, 98%, 53%, 0.3);
            color: #e073ee;
            border-radius: 0 10px;

            &:hover {
              color: #26294A;
              border: 1px solid hsla(50, 98%, 53%, 0.7);
              outline-style: none;
              box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.3);
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

      //JUMPER
      .container-main-jumper {
        background: white;
        border-radius: 0 8% 0 8%;
        border: 1px solid black;
        box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);

        .topleft {
          position: absolute;
          left: 0;
          top: 0;
          padding: 20px;
        }
        .topright {
          position: absolute;
          right: 0;
          top: 0;
          padding: 20px;
        }
        .bottomleft {
          position: absolute;
          left: 0;
          bottom: 0;
          padding: 20px;
        }
        .bottomright {
          position: absolute;
          right: 0;
          bottom: 0;
          padding: 20px;
        }

        .textareaJumper {
          width: 90%;
          max-width: 450px;
          min-height: 230px;
          resize: none;
        }
        .container-jumper textarea {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .container-jumper .controller {
          padding-top: 10px;
          position: absolute;
          left: 50%;
          transform: translate(-50%);

          button {
            margin-bottom: 10px;
            background: hsla(50, 98%, 53%, 0.7);
            &:hover {
              background: hsla(50, 98%, 53%, 1);
            }
          }
          input {
            height: 27px;
            padding-top: 5px;
          }
        }
        .container-jumper {
          display: inline-block;
          position: relative;
          background: #302e2e;
          color: #F6BF45;
          text-transform: uppercase;
        }
        #range-slider  {
          -webkit-appearance: none;
          margin: 2.5vh 0;
          width: 50%;
        }
        #range-slider:focus {
          outline: none;
        }
        #range-slider::-webkit-slider-runnable-track {
          width: 100%;
          height: 8.4px;
          cursor: pointer;
          animate: 0.2s;
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
          background: #FCD612;
          border-radius: 1.3px;
          border: 0.2px solid #010101;
        }
        #range-slider::-webkit-slider-thumb {
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
          border: 1px solid #000000;
          height: 26px;
          width: 26px;
          border-radius: 50%/*3px*/;
          background: #F7FCF0;
          cursor: pointer;
          -webkit-appearance: none;
          margin-top: -11px;
        }
      }

      // FAQ
      .container-faq-css {
        display: block;

        .faq-css {
          display: block;
          max-width: 400px;
          margin: 4vh auto;
          border: 1px solid black;
          border-radius: 0 20% 0 25%;
          background: white;
          box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);

          li {
            display: block;
            text-align: left;
            margin: 5vh;

            .opened {
              float: right;
            }
          }

          h3 {
            cursor: pointer;
            margin: 0 0 10px 0;
          }
        }
      }
    }

    a {
      color: var(--main_active_color, red);
    }

    .container {
      display: inline-block;
      height: 600px;
      position: relative;
      background: #302e2e;
      color: #ff1919;
      text-transform: uppercase;
    }

    .center {}

    .textareaMain {
      display: inline-block;
      max-width: 800px;
      min-width: 645px;
      min-height: 215px;
      font-size: 25px;
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      padding: 0;

      &:focus {
        background-color: #f8f9f9;
        border: 1px solid hsla(50, 98%, 53%, 0.7);
        outline-style: none;
        box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.2);
      }
    }

    .container-Main {
      @include btn;
      margin-left: 5%;

      .resulttext {
        display: inline-block;
        text-align: center;
        border: 1px solid;
        flex: 1;
        min-width: 90%;
        margin-bottom: 2vh;
      }
      .results {
        h2 {
        }

        ul {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          list-style: none;
          li{
            p {}
          }
          li:first-child {
            background: hsla(50, 98%, 53%, 0.3);
            box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.2);
            border-radius: 0 15%;
            padding: 5px 0 0 17px;
            margin: 0 30%;
          }
        }
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
        background: var(--main_active_color, #56B4D3);
        background: #56B4D3;

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

    .controlsImg {
      display: inline-block;
      vertical-align: middle;
      width: 2.1875em;
      height: 2.1875em;
    }

  }
  @media(min-width: 768px) {

    #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      box-sizing: border-box;

      #nav {
        display: block;
        box-sizing: content-box;
        text-align: center;
        z-index: 2;
        margin: 0 2vw;

        ul {
          display: flex;
          justify-content: center;

          list-style-type: none;
          background: white;
          border: 1px solid black;
          border-radius: 25px;
          box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);

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
          cursor: pointer;
          text-decoration: none;
          margin-bottom: 2px;

          &:hover {
            background-color: hsla(50, 98%, 53%, 0.3);
            border-radius: 15px;
          }

          &.router-link-exact-active {
            font-weight: 700;
            text-decoration: underline;
            text-decoration-color: hsla(293, 78%, 69%, 0.7);
          }

        }
      }
    }
    .app-wrapper {
      margin: 0 2vw;

      // MAIN
      .container-Main {
        border: 1px solid black;
        background: white;
        border-radius: 0 8% 0 8%;
        box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);
        margin: 0 2vw;
        .introduction {
          display: inline-block;
          text-align: center;

          h2 {
            font-size: 2em;
            margin: 5px 0 0 0;
          }
          p {
            font-size: 1em;
            margin: 8px;
          }
        }
      }
      //TIMER
      .timer ul li {
        span {
          min-width: 150px;
          font-weight: 700;
        }

        width: 33%;
        padding: 0;
        margin: 0;
      }
      .controls {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        line-height: 25px;

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
              color: #26294A;
              background-color: hsla(50, 98%, 53%, 0.3);
              box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.3);
              outline-style: none;
            }
          }

          span {
            position: absolute;
            right: 0;
            transform: translateX(100%);
            padding: 0 10px;
            background: hsla(50, 98%, 53%, 0.3);
            color: #e073ee;
            border-radius: 0 10px;

            &:hover {
              color: #26294A;
              border: 1px solid hsla(50, 98%, 53%, 0.7);
              outline-style: none;
              box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.3);
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

      //JUMPER
      .container-main-jumper {
        background: white;
        border-radius: 0 8% 0 8%;
        border: 1px solid black;
        box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);

        .topleft {
          position: absolute;
          left: 0;
          top: 0;
          padding: 20px;
        }
        .topright {
          position: absolute;
          right: 0;
          top: 0;
          padding: 20px;
        }
        .bottomleft {
          position: absolute;
          left: 0;
          bottom: 0;
          padding: 20px;
        }
        .bottomright {
          position: absolute;
          right: 0;
          bottom: 0;
          padding: 20px;
        }

        .textareaJumper {
          width: 90%;
          max-width: 450px;
          min-height: 230px;
          resize: none;
        }
        .container-jumper textarea {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .container-jumper .controller {
          padding-top: 10px;
          position: absolute;
          left: 50%;
          transform: translate(-50%);

          button {
            margin-bottom: 10px;
            background: hsla(50, 98%, 53%, 0.7);
            &:hover {
              background: hsla(50, 98%, 53%, 1);
            }
          }
          input {
            height: 27px;
            padding-top: 5px;
          }
        }
        .container-jumper {
          display: inline-block;
          position: relative;
          background: #302e2e;
          color: #F6BF45;
          text-transform: uppercase;
        }
        #range-slider  {
          -webkit-appearance: none;
          margin: 2.5vh 0;
          width: 50%;
        }
        #range-slider:focus {
          outline: none;
        }
        #range-slider::-webkit-slider-runnable-track {
          width: 100%;
          height: 8.4px;
          cursor: pointer;
          animate: 0.2s;
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
          background: #FCD612;
          border-radius: 1.3px;
          border: 0.2px solid #010101;
        }
        #range-slider::-webkit-slider-thumb {
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
          border: 1px solid #000000;
          height: 26px;
          width: 26px;
          border-radius: 50%/*3px*/;
          background: #F7FCF0;
          cursor: pointer;
          -webkit-appearance: none;
          margin-top: -11px;
        }
      }

      // FAQ
      .container-faq-css {
        display: block;

        .faq-css {
          display: block;
          max-width: 400px;
          margin: 4vh auto;
          border: 1px solid black;
          border-radius: 0 20% 0 25%;
          background: white;
          box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);

          li {
            display: block;
            text-align: left;
            margin: 5vh;

            .opened {
              float: right;
            }
          }

          h3 {
            cursor: pointer;
            margin: 0 0 10px 0;
          }
        }
      }
    }

    a {
      color: var(--main_active_color, red);
    }

    .container {
      display: inline-block;
      height: 600px;
      position: relative;
      background: #302e2e;
      color: #ff1919;
      text-transform: uppercase;
    }

    .center {}

    .textareaMain {
      display: inline-block;
      max-width: 800px;
      min-width: 645px;
      min-height: 215px;
      font-size: 25px;
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      padding: 0;

      &:focus {
        background-color: #f8f9f9;
        border: 1px solid hsla(50, 98%, 53%, 0.7);
        outline-style: none;
        box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.2);
      }
    }

    .container-Main {
      @include btn;
      margin-left: 5%;

      .resulttext {
        display: inline-block;
        text-align: center;
        border: 1px solid;
        flex: 1;
        min-width: 90%;
        margin-bottom: 2vh;
      }
      .results {
        h2 {
        }

        ul {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          list-style: none;
          li{
            p {}
          }
          li:first-child {
            background: hsla(50, 98%, 53%, 0.3);
            box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.2);
            border-radius: 0 15%;
            padding: 5px 0 0 17px;
            margin: 0 30%;
          }
        }
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
        background: var(--main_active_color, #56B4D3);
        background: #56B4D3;

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

    .controlsImg {
      display: inline-block;
      vertical-align: middle;
      width: 2.1875em;
      height: 2.1875em;
    }

  }
  @media (max-width: 570px) {

    #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      box-sizing: border-box;

      #nav {
        display: flex;
        flex-wrap: wrap;
        box-sizing: content-box;
        text-align: center;
        z-index: 2;

        ul {
          list-style-type: none;
          background: white;
          border: 1px solid black;
          box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);

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
          cursor: pointer;
          text-decoration: none;
          margin-bottom: 2px;

          &:hover {
            background-color: hsla(50, 98%, 53%, 0.3);
            border-radius: 15px;
          }

          &.router-link-exact-active {
            font-weight: 700;
            text-decoration: underline;
            text-decoration-color: hsla(293, 78%, 69%, 0.7);
          }

        }
      }
    }
    .app-wrapper {
      // MAIN
      .container-Main {
        border: 1px solid black;
        background: white;
        border-radius: 0 8% 0 8%;
        box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);
        .introduction {
          display: inline-block;
          text-align: center;

          h2 {
            font-size: 2em;
            margin: 5px 0 0 0;
          }
          p {
            font-size: 1em;
            margin: 8px;
          }
        }
      }
      //TIMER
      .timer ul li {
        span {
          min-width: 150px;
          font-weight: 700;
        }

        width: 33%;
        padding: 0;
        margin: 0;
      }
      .controls {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        line-height: 25px;

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
              color: #26294A;
              background-color: hsla(50, 98%, 53%, 0.3);
              box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.3);
              outline-style: none;
            }
          }

          span {
            position: absolute;
            right: 0;
            transform: translateX(100%);
            padding: 0 10px;
            background: hsla(50, 98%, 53%, 0.3);
            color: #e073ee;
            border-radius: 0 10px;

            &:hover {
              color: #26294A;
              border: 1px solid hsla(50, 98%, 53%, 0.7);
              outline-style: none;
              box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.3);
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

      //JUMPER
      .container-main-jumper {
        background: white;
        border-radius: 0 8% 0 8%;
        border: 1px solid black;
        box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);

        .topleft {
          position: absolute;
          left: 0;
          top: 0;
          padding: 20px;
        }
        .topright {
          position: absolute;
          right: 0;
          top: 0;
          padding: 20px;
        }
        .bottomleft {
          position: absolute;
          left: 0;
          bottom: 0;
          padding: 20px;
        }
        .bottomright {
          position: absolute;
          right: 0;
          bottom: 0;
          padding: 20px;
        }

        .textareaJumper {
          width: 90%;
          max-width: 450px;
          min-height: 230px;
          resize: none;
        }
        .container-jumper textarea {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .container-jumper .controller {
          padding-top: 10px;
          position: absolute;
          left: 50%;
          transform: translate(-50%);

          button {
            margin-bottom: 10px;
            background: hsla(50, 98%, 53%, 0.7);
            &:hover {
              background: hsla(50, 98%, 53%, 1);
            }
          }
          input {
            height: 27px;
            padding-top: 5px;
          }
        }
        .container-jumper {
          display: inline-block;
          position: relative;
          background: #302e2e;
          color: #F6BF45;
          text-transform: uppercase;
        }
        #range-slider  {
          -webkit-appearance: none;
          margin: 2.5vh 0;
          width: 50%;
        }
        #range-slider:focus {
          outline: none;
        }
        #range-slider::-webkit-slider-runnable-track {
          width: 100%;
          height: 8.4px;
          cursor: pointer;
          animate: 0.2s;
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
          background: #FCD612;
          border-radius: 1.3px;
          border: 0.2px solid #010101;
        }
        #range-slider::-webkit-slider-thumb {
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
          border: 1px solid #000000;
          height: 26px;
          width: 26px;
          border-radius: 50%/*3px*/;
          background: #F7FCF0;
          cursor: pointer;
          -webkit-appearance: none;
          margin-top: -11px;
        }
      }

      // FAQ
      .container-faq-css {
        display: block;

        .faq-css {
          display: block;
          max-width: 400px;
          margin: 4vh auto;
          border: 1px solid black;
          border-radius: 0 20% 0 25%;
          background: white;
          box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);

          li {
            display: block;
            text-align: left;
            margin: 5vh;

            .opened {
              float: right;
            }
          }

          h3 {
            cursor: pointer;
            margin: 0 0 10px 0;
          }
        }
      }
    }

    a {
      color: var(--main_active_color, red);
    }

    .container {
      display: inline-block;
      height: 600px;
      position: relative;
      background: #302e2e;
      color: #ff1919;
      text-transform: uppercase;
    }

    .center {}

    .textareaMain {
      display: inline-block;
      max-width: 800px;
      min-width: 645px;
      min-height: 215px;
      font-size: 25px;
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      padding: 0;

      &:focus {
        background-color: #f8f9f9;
        border: 1px solid hsla(50, 98%, 53%, 0.7);
        outline-style: none;
        box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.2);
      }
    }

    .container-Main {
      @include btn;
      margin-left: 5%;

      .resulttext {
        display: inline-block;
        text-align: center;
        border: 1px solid;
        flex: 1;
        min-width: 90%;
        margin-bottom: 2vh;
      }
      .results {
        h2 {
        }

        ul {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          list-style: none;
          li{
            p {}
          }
          li:first-child {
            background: hsla(50, 98%, 53%, 0.3);
            box-shadow: 3px 3px 3px hsla(293, 78%, 69%, 0.2);
            border-radius: 0 15%;
            padding: 5px 0 0 17px;
            margin: 0 30%;
          }
        }
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
        background: var(--main_active_color, #56B4D3);
        background: #56B4D3;

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

    .controlsImg {
      display: inline-block;
      vertical-align: middle;
      width: 2.1875em;
      height: 2.1875em;
    }
  }

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





  * {
    box-sizing: border-box;
  }
  body,
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #56B4D3;
  }
</style>
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
                // this.$el.style.setProperty("--main_active_color", this.styles.mainColor);
            }
        },
        mounted() {
            window.addEventListener("load", () => {
                // run after everything is in-place
                // this.$el.style.setProperty("--main_active_color", this.styles.mainColor);
            });
        }
    };
</script>
<style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>
