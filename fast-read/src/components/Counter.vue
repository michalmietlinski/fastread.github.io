<template>
  <div>
    <textarea v-if="!watchplaying" v-model="texttoread2"></textarea>
    <div v-if="watchplaying">{{texttoread2}}</div>

    <button v-on:click="stopWatch()">Stop</button>
    <button v-on:click="startWatch()">Start</button>
    <button v-on:click="resetWatch()">Reset</button>

    <div>{{watchtime}}</div>
    <div>{{watchresult}}</div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    msg: String
  },
  data: () => {
    return {
      texttoread2: '',
      wordcount: 0,
      speed: parseInt(sessionStorage.getItem("speed"), 10) || 250,
      wordperline: parseInt(sessionStorage.getItem("wordperline"), 10) || 1,
      splitted: [],
      currentplay: "",
      playing: false,
      watchtime: 0,
      watchplaying: false,
      starttime: 0,
      stoptime: 0,
      watchresult: {}
    };
  },
  watch: {
    texttoread: function(val) {
      this.partialtext = val.split(" ");
      this.wordcount = 0;
    }
  },
  methods: {
    watch: function() {
      if (this.watchplaying) {
        setTimeout(() => {
          this.watchtime = this.watchtime + 10;
          this.watch();
        }, 10);
      }
    },
    startWatch: function() {
      if (!this.watchplaying) {
        this.starttime = new Date();
        this.watchplaying = true;
        this.watch.bind(this);
        this.watch();
      }
    },
    stopWatch: function() {
      this.watchplaying = false;
      this.stoptime = new Date();
      this.watchresult = {
        time: this.stoptime - this.starttime,
        words: this.texttoread2.split(/[ ,\s]+/).length,
        "words per minute": Math.floor(
          (this.texttoread2.split(/[ ,\s]+/).length * 1000 * 60) /
            (this.stoptime - this.starttime)
        )
      };
    },
    resetWatch: function() {
      this.watchplaying = false;
      this.watchtime = 0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
