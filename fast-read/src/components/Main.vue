<template>
  <div>
    <div class="introduction">
      <h2>{{copy.section ? copy.section.main.header : ''}}</h2>
      <p>{{copy.section ? copy.section.main.describtion : ''}}</p>
    </div>
    <div class="inputtext">
    <textarea v-on:change="restart();" v-model="texttoread"></textarea>
    </div>
    <div class="controls">
      <div>
        {{copy.menu ? copy.controls.speed : ''}}
        <input type="number" v-on:change="updateSpeed" :value="speed">
        <span v-on:click="addSpeed(50)">+50</span>
      <span v-on:click="addSpeed(100)">+100</span>
      </div>
      <div>
        {{copy.menu  ? copy.controls.words : ''}}
        <input type="number" v-on:change="updateWordperline" :value="wordperline">
      </div>
      <div>
        {{copy.menu  ? copy.controls.rows : ''}}
        <input type="number" v-on:change="updateNumberofrows" :value="numberofrows">
      </div>
      <div>
        <button v-on:click="stop()">{{copy.menu  ? copy.controls.stop : ''}}</button>
        <button v-on:click="start()">{{copy.menu  ? copy.controls.start: ''}}</button>
        <button v-on:click="restart()">{{copy.menu  ? copy.controls.restart: ''}}</button>
        <button v-on:click="rewind()">{{copy.menu  ? copy.controls.rewind: ''}}</button>
        
      </div>
    </div>
    <div class="resulttext centered">
      <h1 v-for="line in readtext.split('$#$')" v-bind:key="line">{{line}}</h1>
    </div>
    <hr>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "Main",
  data: () => ({
    // Responsible for showing text
    texttoread: "",
    partialtext: "",
    readtext: "Text to display",
    wordcount: 0,
    splitted: [],
    currentplay: "",
    playing: false
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
                this.readtext = this.readtext.concat("$#$");
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
      this.$store.dispatch('setSpeed',this.speed+speed )

    },
  }
};
</script>

<!-- ELEMENTS MOVED TO APP -->
