<template>
  <div>
    <div class="inputtext">
      <textarea v-if="!watchplaying" v-model="texttoread2"></textarea>
    </div>
    <div class="resulttext" v-if="watchplaying">{{texttoread2}}</div>
    <div class="controls">
      <button v-on:click="stopWatch()">{{copyControlsStop}}</button>
      <button v-on:click="startWatch()">{{copyControlsStart}}</button>
      <button v-on:click="resetWatch()">{{copyControlsReset}}</button>
    </div>
    <div class="results">
      <div>{{watchtime}}</div>
      <div>{{watchresult}}</div>
    </div>
    <hr>
  </div>
</template>

<script>
import Copy from '@/assets/copy';

export default {
  name: 'Counter',
  props: {
    msg: String,
  },
  data: () => ({
    // Responsible for the copy
    copyControlsStop: Copy.controls.stop,
    copyControlsStart: Copy.controls.start,
    copyControlsReset: Copy.controls.reset,
    // Responsible for content
    texttoread2: '',
    wordcount: 0,
    playing: false,
    watchtime: 0,
    watchplaying: false,
    starttime: 0,
    stoptime: 0,
    watchresult: {},
  }),
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
      this.watchresult = {
        time: this.stoptime - this.starttime,
        words: this.texttoread2.split(/[ ,\s]+/).length,
        'words per minute': Math.floor(
          (this.texttoread2.split(/[ ,\s]+/).length * 1000 * 60)
            / (this.stoptime - this.starttime),
        ),
      };
    },
    resetWatch() {
      this.watchplaying = false;
      this.watchtime = 0;
    },
  },
};
</script>

<!-- ELEMENTS MOVED TO APP -->
