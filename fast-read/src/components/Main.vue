<template>
  <div>
    <div class="introduction">
      <h2>{{copy.section ? copy.section.main.header : ''}}</h2>
      <p>{{copy.section ? copy.section.main.describtion : ''}}</p>
    </div>

    <div class="inputtext">
      <textarea class="textareaMain" v-on:change="restart();" v-model="texttoread"></textarea>
    </div>

    <div class="controls">
      <div class="column">
        <div class="row">
          {{copy.menu ? copy.controls.speed : ''}}
        </div>
        <div class="row">
          {{copy.menu  ? copy.controls.words : ''}}
        </div>
        <div class="row">
          {{copy.menu  ? copy.controls.rows : ''}}
        </div>
      </div>

      <div class="column">
        <div class="row">
          <!-- <div class="text"> {{copy.menu ? copy.controls.speed : ''}}</div> -->
         <input type="number" v-on:change="updateSpeed" :value="speed">
           <span v-on:click="addSpeed(50)"> +50 </span>
           <span v-on:click="addSpeed(100)"> +100</span>
        </div>
        <div class="row">
          <!-- <div class="text"> {{copy.menu ? copy.controls.words : ''}}</div> -->
          <input type="number" v-on:change="updateWordperline" :value="wordperline">
        </div>
        <div class="row">
          <!-- <div class="text"> {{copy.menu ? copy.controls.rows : ''}}</div> -->
          <input type="number" v-on:change="updateNumberofrows" :value="numberofrows">
        </div>
      </div>            
    </div>  
      <div>
        <button v-on:click="stop()">{{copy.menu  ? copy.controls.stop : ''}}</button>
        <button v-on:click="start()">{{copy.menu  ? copy.controls.start: ''}}</button>
        <button v-on:click="restart()">{{copy.menu  ? copy.controls.restart: ''}}</button>
        <button v-on:click="rewind()">{{copy.menu  ? copy.controls.rewind: ''}}</button>
        <button v-on:click="download()">Download</button>
      </div>
   
    <div class="resulttext centered">
      <h1 v-for="line in readtext.split('$#$')" v-bind:key="line">{{line}}</h1>
    </div>
    <hr>
     <ul>
         <li v-for="(item, index) in availableArticles" v-bind:key="index">
           {{item.title}}
           {{item.pubDate}}
         </li>
         </ul>
    {{this.availableArticles}}
    <hr>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import RSSParser from 'rss-parser' ;

export default {
  name: "Main",
  data: () => ({
    // Responsible for showing text
    texttoread: "",
    partialtext: "",
    readtext: "Text to display", // HARD CODED - FIND FIX AJ
    wordcount: 0,
    splitted: [],
    currentplay: "",
    playing: false,
    availableArticles: []
  }),
  computed: {
      ...mapState([
      'speed',
      'wordperline',
      'numberofrows',
      'copy'
    ]),
  },
  watch: {
    texttoread(val) {
      this.partialtext = val.split(" ");
      this.wordcount = 0;
    }
  },
  methods: {
    reading(play) {
      if (this.wordperline > 0) {
        if (
          this.wordcount < this.splitted.length &&
          this.currentplay === play
        ) {
          this.playing = true;
          this.readtext = this.splitted[this.wordcount];
          if (this.numberofrows > 1) {
            for (let i = 1; i < parseInt(this.numberofrows, 10); i++) {
              if (this.splitted[this.wordcount + i]) {
                this.readtinputteext = this.readtext.concat("$#$");
                this.readtext = this.readtext.concat(
                  this.splitted[this.wordcount + i]
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
        this.splitted[i] = splittedtemp.splice(0, this.wordperline).join(" ");
      }
      this.reading.bind(this);
      this.reading(this.currentplay);
      sessionStorage.setItem("wordperline", this.wordperline);
      sessionStorage.setItem("numberofrows", this.numberofrows);
    },
    stop() {
      this.currentplay = new Date();
      this.playing = false;
    },
    start() {
      this.reading.bind(this);
      if (!this.playing) {
        this.reading(this.currentplay);
      }
    },
    rewind() {
      this.wordcount = this.wordcount > 4 ? this.wordcount - 4 : 0;
    },
    updateSpeed(e) {
      this.$store.dispatch('setSpeed', e.target.value)
      this.restart.bind(this);
      this.reading(this.restart);
    },
    updateWordperline(e) {
      this.$store.dispatch('setWordperline', e.target.value)
      this.restart.bind(this);
      this.reading(this.restart);
    },
    updateNumberofrows(e) {
      this.$store.dispatch('setNumberofrows', e.target.value)
      this.restart.bind(this);
      this.reading(this.restart);
    },
    addSpeed(speed){
      this.$store.dispatch('setSpeed',parseInt(this.speed, 10)+parseInt(speed,10) )

    },
    download() {
      let parser = new RSSParser();
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

        parser.parseURL(CORS_PROXY + 'https://www.reddit.com/.rss', (err, feed) => {
          console.log(feed.title);
          feed.items.forEach((entry) => {
            console.log(entry)
            this.availableArticles.push(entry)
          })
        })
    }
  }
};
</script>
<style lang="scss">
.controls {
    display: inline-block;
    font-size: 16px;
    line-height: 25px;
    text-align: left;
    left: 100px;
    .column:first-of-type {
      .row{
        padding-left:10px;
      }
    }
    .column{
      min-width: 110px;
      float: left;
    }
    .row{
      border-bottom: 2px solid;
      margin-bottom: 10px;
      position:relative;
      input{
          margin: 0;
          padding: 0 5px;
          border: 0;
          background: var(--main_active_color, #489e54);
          /* line-height: 0; */
          height: 23px;
      }
      span{
        position:absolute;
        right:0;
        transform: translateX(100%);
        padding: 0 10px;
        background: var(--main_active_color, #489e54);
        color: #fff;
        border-radius: 0 10px;
      }
      span:nth-of-type(1){
        right:-10px;
      }
      span:nth-of-type(2){
        right:-60px;
      }
    }
}
// .col_1, .col_2 {
//   display: inline-block;
// }
// .row_1, .row_2, .row_3 {
//   display: block;
//   margin: 5px;
//   padding: 5px;
// }
</style>
