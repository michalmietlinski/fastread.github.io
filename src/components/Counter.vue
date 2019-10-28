<template>
  <div class="container-main ">
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
      <button v-on:click="stopWatch()" v-if="watchplaying">{{copy.menu ? copy.controls.stop : ''}}
      </button>
      <button v-if="!watchplaying" v-on:click="startWatch()">{{copy.menu ? copy.controls.start : ''}}
      </button>
      <button v-on:click="resetWatch()">{{copy.menu ? copy.controls.reset : ''}}</button>
    </div>

    <div class="results">
      <h3> {{ prevBestScore() }}</h3>
      <ul>

        <li v-for="(item, index) in previousresults" v-bind:key="index">
          <span class="latest"
                v-if="index===0">{{copy.section ? copy.section.counter.latest : ''}}</span>
          <p><span>{{copy.section ? copy.section.counter.timeOfReading : ''}}:</span>
            {{item.time/1000}}s</p>
          <p><span>{{copy.section ? copy.section.counter.numberOfWords : ''}}:</span> {{item.words}}
          </p>
          <p><span>{{copy.section ? copy.section.counter.wordsPerMinute : ''}}:</span> {{item.wpm}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Counter',
  data: () => ({
    // Responsible for content
    wordcount: 0,
    playing: false,
    watchtime: 0,
    watchplaying: false,
    starttime: 0,
    stoptime: 0,
    watchresult: {},
  }),
  computed: {
    ...mapState([
      'copy',
    ]),
    texttoread2: {
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
    previousresults: {
      get() {
        return this.$store.state.previousTimes || [];
      },
      // setter
      set() {
        this.$store.dispatch('setPreviousTime', this.previousresults);
      },
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
      const temp = this.previousresults.unshift(watchresult);
      this.previousresults = temp;
      this.watchtime = 0;
    },
    resetWatch() {
      this.watchplaying = false;
      this.watchtime = 0;
      this.texttoread2 = '';
    },
    prevBestScore() {
      console.log(this.$store.state.previousTimes.length);
      if (this.$store.state.previousTimes.length === 0) {
        return ('You havent got any previouse results');
      }
      const times = this.$store.state.previousTimes.sort((a, b) => b.wpm - a.wpm);
      const { time, words, wpm } = times[0];
      return (`Youre previous best result: time ${time}, words: ${words}, words per minute ${wpm}`);
    },
  },
};
</script>


<style lang="scss">

</style>
