<template>
  <div>
    <div class="introduction">
      <h2>{{copy.section ? copy.section.counter.header : ''}}</h2>
      <p>{{copy.section ? copy.section.counter.describtion : ''}}</p>
    </div>
  
    <div class="inputtext">
      <h3>{{copy.section ? copy.section.counter.inputtextdesc : ''}}</h3>
      <textarea class="textareaMain" v-if="!watchplaying" v-model="texttoread2"></textarea>
    </div>
    <div class="resulttext" v-if="watchplaying">{{texttoread2}}</div>

    <div class="controls">
      <button v-on:click="stopWatch()" v-if="watchplaying">{{copy.menu  ? copy.controls.stop : ''}}</button>
      <button v-on:click="startWatch()" v-if="!watchplaying">{{copy.menu  ? copy.controls.start : ''}}</button>
      <button v-on:click="resetWatch()">{{copy.menu  ? copy.controls.reset : ''}}</button>
    </div>
    <hr>
    <div class="results">
    <h2></h2>
    <ul>
         <li v-for="(item, index) in previousresults" v-bind:key="index">
           <span class="latest" v-if="index===0">{{copy.section ? copy.section.counter.latest : ''}}</span>
           <p><span>{{copy.section ? copy.section.counter.timeOfReading : ''}}:</span> {{item.time/1000}}s</p>
           <p><span>{{copy.section ? copy.section.counter.numberOfWords : ''}}:</span> {{item.words}}</p>
           <p><span>{{copy.section ? copy.section.counter.wordsPerMinute : ''}}:</span> {{item.wpm}}</p>
           </li>
           </ul>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Counter',
  data: () => ({
    // Responsible for content
    texttoread2: '',
    wordcount: 0,
    playing: false,
    watchtime: 0,
    watchplaying: false,
    starttime: 0,
    stoptime: 0,
    watchresult: {},
    previousresults:[],
  }),
  computed: {
      ...mapState([
      'copy'
    ]),
  },
  watch: {
    texttoread(val) {
      this.partialtext = val.split(' ');
      this.wordcount = 0;
    },
  },
  methods: {
    watch() {
      if (this.watchplaying) {
        setTimeout(() => {
          this.watchtime = this.watchtime + 10;
          this.watch();
        }, 10);
      }
    },
    startWatch() {
      if (!this.watchplaying) {
        this.starttime = new Date();
        this.watchplaying = true;
        this.watch.bind(this);
        this.watch();
      }
    },
    stopWatch() {
      this.watchplaying = false;
      this.stoptime = new Date();
      const watchresult = {
        time: this.stoptime - this.starttime,
        words: this.texttoread2.split(/[ ,\s]+/).length,
        wpm: Math.floor(
          (this.texttoread2.split(/[ ,\s]+/).length * 1000 * 60)
            / (this.stoptime - this.starttime),
        ),
      };
      this.previousresults.unshift(watchresult)
      this.watchtime = 0;
    },
    resetWatch() {
      this.watchplaying = false;
      this.watchtime = 0;
      this.texttoread2='';
    },
  },
};
</script>

<style lang="scss">
.timer ul li{
  span {
    min-width: 150px;
    font-weight: 700;
  }
  width:33%;
  padding:0;
  margin:0;
}


</style>
