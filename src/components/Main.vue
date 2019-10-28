<template>
  <div class="container-main">
    <div class="introduction">
      <h2>{{copy.section ? copy.section.main.header : ''}}</h2>
      <p>{{copy.section ? copy.section.main.describtion : ''}}</p>
    </div>
    <div class="inputtext">
      <textarea class="textareaMain" v-on:change="restart()" v-model="texttoread"
                autofocus></textarea>
    </div>

    <div class="container_main_container_buttons">
      <div class="container_buttons">
        <button v-on:click="start()"><img class="controlsImg play" blank-color="red" title="play"
                                          src="../assets/play2.png">
          {{copy.menu ? copy.controls.start: ''}}
        </button>
        <button v-on:click="stop()"><img class="controlsImg" title="stop" src="../assets/stop.png">
          {{copy.menu ? copy.controls.stop : ''}}
        </button>
        <button v-on:click="restart()"><img class="controlsImg" title="repeat"
                                            src="../assets/repeat.svg"> {{copy.menu ?
          copy.controls.restart: ''}}
        </button>
        <button v-on:click="download()" style="display: none">
          <img class="controlsImg" title="download" src="../assets/download.svg">
          Download
        </button>
      </div>
      <!-- Brak Cleara ! czyszczenia okna ! -->
      <div class="container_controls">
        <div class="controls">
          <div class="column">
            <div class="row">
              {{copy.menu ? copy.controls.speed : ''}}
            </div>
            <div class="row">
              {{copy.menu ? copy.controls.words : ''}}
            </div>
            <div class="row">
              {{copy.menu ? copy.controls.rows : ''}}
            </div>
          </div>

          <div class="column">
            <div class="row">
              <input type="number" v-on:change="updateSpeed" :value="speed">
              <span v-on:click="addSpeed(50)"> +50 </span>
              <span v-on:click="addSpeed(100)"> +100</span>
            </div>
            <div class="row">
              <input type="number" v-on:change="updateWordperline" :value="wordperline">
              <span v-on:click="addWords(5)"> +5 </span>
              <span v-on:click="addWords(-5)"> -5</span>
            </div>
            <div class="row">
              <input type="number" v-on:change="updateNumberofrows" :value="numberofrows">
              <span v-on:click="addRows(1)"> +1 </span>
              <span v-on:click="addRows(-1)"> -1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div class="resulttext centered">
      <h1 v-for="line in readtext.split('$#$')" v-bind:key="line">{{line}}</h1>
    </div>

    <!--    FOR RSS READER-->
    <!--    <hr>-->
    <!--     <ul>-->
    <!--         <li v-for="(item, index) in availableArticles" v-bind:key="index">-->
    <!--           {{item.title}}-->
    <!--           {{item.pubDate}}-->
    <!--         </li>-->
    <!--         </ul>-->
    <!--    {{this.availableArticles}}-->
    <!--    <hr>-->
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import RSSParser from 'rss-parser';

  export default {
    name: 'Main',
    data: () => ({
      // Responsible for showing text
      partialtext: '',
      readtext: 'Text to display', // HARD CODED - FIND FIX AJ
      wordcount: 0,
      splitted: [],
      currentplay: '',
      playing: false,
      availableArticles: [],
    }),
    computed: {
      ...mapState([
        'speed',
        'wordperline',
        'numberofrows',
        'copy',
      ]),
      texttoread: {
        get() {
          return this.$store.state.texttoread;
        },
        // setter
        set(newValue) {
          this.$store.dispatch('setText', newValue);
          this.partialtext = newValue.split(' ');
          this.wordcount = 0;
        },

      },
    },
    methods: {
      reading(play) {
        if (this.wordperline > 0) {
          if (
            this.wordcount < this.splitted.length
            && this.currentplay === play
          ) {
            this.playing = true;
            this.readtext = this.splitted[this.wordcount];
            if (this.numberofrows > 1) {
              for (let i = 1; i < parseInt(this.numberofrows, 10); i++) {
                if (this.splitted[this.wordcount + i]) {
                  this.readtinputteext = this.readtext.concat('$#$');
                  this.readtext = this.readtinputteext.concat(
                    this.splitted[this.wordcount + i],
                  );
                }
              }
            }
            setTimeout(() => {
              this.wordcount = this.wordcount + parseInt(this.numberofrows, 10);
              this.reading(play);
            }, (this.wordperline * this.numberofrows * 60 * 1000) / this.speed);
          }
        }
      },
      restart() {
        this.wordcount = 0;
        const splittedtemp = this.texttoread.split(/[ ,\s]+/);
        const lengths = splittedtemp.length;
        this.splitted = [];
        this.currentplay = new Date();
        for (let i = 0; i < lengths / this.wordperline; i++) {
          this.splitted[i] = splittedtemp.splice(0, this.wordperline)
            .join(' ');
        }
        this.reading.bind(this);
        this.reading(this.currentplay);
        sessionStorage.setItem('wordperline', this.wordperline);
        sessionStorage.setItem('numberofrows', this.numberofrows);
      },
      stop() {
        this.currentplay = new Date();
        this.playing = false;
      },
      start() {
        this.reading.bind(this);
        if (!this.playing && this.wordcount < this.splitted.length) {
          this.reading(this.currentplay);
        } else {
          this.restart();
        }
      },
      updateSpeed(e) {
        this.$store.dispatch('setSpeed', e.target.value);
        this.restart.bind(this);
        this.reading(this.restart);
      },
      updateWordperline(e) {
        this.$store.dispatch('setWordperline', e.target.value);
        this.restart.bind(this);
        this.reading(this.restart);
      },
      updateNumberofrows(e) {
        this.$store.dispatch('setNumberofrows', e.target.value);
        this.restart.bind(this);
        this.reading(this.restart);
      },
      addSpeed(speed) {
        this.$store.dispatch('setSpeed', parseInt(this.speed, 10) + parseInt(speed, 10));
      },
      addWords(words) {
        this.$store.dispatch('setWordperline',
          (parseInt(this.wordperline, 10) + parseInt(words, 10) >= 1) ? (parseInt(this.wordperline, 10) + parseInt(words, 10)) : (1));
      },
      addRows(rows) {
        this.$store.dispatch('setNumberofrows',
          (parseInt(this.numberofrows, 10) + parseInt(rows, 10) >= 1) ? (parseInt(this.numberofrows, 10) + parseInt(rows, 10)) : (1));
      },
      download() {
        const parser = new RSSParser();
        const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

        parser.parseURL(`${CORS_PROXY}https://www.reddit.com/.rss`, (err, feed) => {
          console.log(feed.title);
          feed.items.forEach((entry) => {
            console.log(entry);
            this.availableArticles.push(entry);
          });
        });
      },
    },
  };
</script>
<style lang="scss">


</style>
