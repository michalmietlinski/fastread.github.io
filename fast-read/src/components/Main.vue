<template>
 <div>
    <textarea v-on:change="restart();" v-model="texttoread"></textarea>
            <!-- {{texttoread}} -->
            <div>
                {{copyControlsSpeed}}
                <input type="number" v-on:change="restart();" v-model="speed" />
            </div>
            <div>
                {{copyControlsWords}}
                <input type="number" v-on:change="restart();"  v-model="wordperline" />
            </div>
            <div>
                {{copyControlsRows}}
                <input type="number" v-on:change="restart();"  v-model="numberofrows" />
            </div>
            <div>
                <button v-on:click="stop()">{{copyControlsStop}}</button>
            <button v-on:click="start()">{{copyControlsStart}}</button>
            <button v-on:click="restart()">{{copyControlsRestart}}</button>
            <button v-on:click="rewind()">{{copyControlsRewind}}</button>


            </div>
            <div>
                <h1 v-for="line in readtext.split('$#$')" v-bind:key="line">{{line}}</h1>
            </div>
            <hr />
 </div>
</template>

<script>
import Copy from '@/assets/copy';

export default {
  name: 'Main',
  props: {
    msg: String,
  },
  data: () => ({
    copyControlsSpeed: Copy.controls.speed,
    copyControlsWords: Copy.controls.words,
    copyControlsRows: Copy.controls.rows,
    copyControlsStop: Copy.controls.stop,
    copyControlsStart: Copy.controls.start,
    copyControlsRestart: Copy.controls.restart,
    copyControlsRewind: Copy.controls.rewind,
    header: 'Fast read! Simple tool to make reading quicker!',
    texttoread: '',
    partialtext: '',
    numberofrows: parseInt(sessionStorage.getItem('numberofrows'), 10) || 1,
    readtext: 'HERE',
    wordcount: 0,
    speed: parseInt(sessionStorage.getItem('speed'), 10) || 250,
    wordperline: parseInt(sessionStorage.getItem('wordperline'), 10) || 1,
    splitted: [],
    currentplay: '',
    playing: false,
  }),
  watch: {
    texttoread(val) {
      this.partialtext = val.split(' ');
      this.wordcount = 0;
    },
  },
  methods: {
    reading(play) {
      if (this.wordperline > 0) {
        if (this.wordcount < this.splitted.length && this.currentplay === play) {
          this.playing = true;
          this.readtext = this.splitted[this.wordcount];
          if (this.numberofrows > 1) {
            for (let i = 1; i < parseInt(this.numberofrows, 10); i++) {
              if (this.splitted[this.wordcount + i]) {
                this.readtext = this.readtext.concat('$#$');
                this.readtext = this.readtext.concat(this.splitted[this.wordcount + i]);
              }
            }
          }
          setTimeout(() => {
            this.wordcount = this.wordcount + parseInt(this.numberofrows, 10);
            this.reading(play);
          }, this.wordperline * this.numberofrows * 60 * 1000 / this.speed);
        }
      }
    },
    restart() {
      this.wordcount = 0;
      const splittedtemp = this.texttoread.split(/[ ,\s]+/);
      const lengths = splittedtemp.length;
      this.splitted = [];
      this.currentplay = new Date();
      for (let i = 0; i < (lengths / this.wordperline); i++) {
        this.splitted[i] = splittedtemp.splice(0, this.wordperline).join(' ');
      }
      this.reading.bind(this);
      this.reading(this.currentplay);
      sessionStorage.setItem('speed', this.speed);
      sessionStorage.setItem('wordperline', this.wordperline);
      sessionStorage.setItem('numberofrows', this.numberofrows);
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
  },
};
</script>

<!-- ELEMENTS MOVED TO APP -->