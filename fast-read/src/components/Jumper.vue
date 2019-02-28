<template>
  <div class="container">
    <div class="topleft">{{spot0}}</div>
    <div class="topright">{{spot1}}</div>
    <div class="bottomleft">{{spot2}}</div>
    <div class="bottomright">{{spot3}}</div>
    <textarea v-model="texttoread3"></textarea>
    <div class="controller">
      <button v-on:click="startjump()">{{copy.menu  ? copy.controls.start : ''}}</button>
      <button v-on:click="stopjump()">{{copy.menu  ? copy.controls.stop : ''}}</button>
      <input type="number" v-model="jumpspeed">
      <input type="checkbox" v-model="jumprandom">
      <div>
        Random:
        {{jumprandom}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Jumper',
  
  data: () => ({
    spot0: 'A',
    spot1: 'B',
    spot2: 'C',
    spot3: 'D',
    jumpwordcount: 0,
    jumpwordstable: [],
    jumpspeed: 100,
    jumprandom: false,
    jumpstop: false,
    texttoread3: '',
  }),
  computed: {
      ...mapState([
      'copy'
    ]),
  },
  methods: {
    startjump() {
      this.jumpwordstable = this.texttoread3.split(/[ ,\s]+/);
      this.jumpwordcount = 0;
      this.jumpwords.bind(this);
      this.jumpwords();
    },
    stopjump() {
      this.jumpstop = true;
    },
    jumpwords() {
      this.spot0 = '';
      this.spot1 = '';
      this.spot2 = '';
      this.spot3 = '';
      if (this.jumprandom) {
        this[`spot${Math.floor(Math.random() * 4)}`] = this.jumpwordstable[
          this.jumpwordcount
        ];
      } else {
        this[`spot${this.jumpwordcount % 4}`] = this.jumpwordstable[
          this.jumpwordcount
        ];
      }
      if (!this.jumpstop && this.jumpwordcount <= this.jumpwordstable.length) {
        setTimeout(() => {
          this.jumpwordcount++;
          this.jumpwords();
        }, (1000 * 60) / this.jumpspeed);
      }
      {
        this.jumpstop = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
textarea {
  min-width: 500px;
  min-height: 300px;
}
.container {
  display: block;
  width: 100%;
  height: 600px;
  position: relative;
  background: #302e2e;
  color: #ff1919;
  text-transform: uppercase;
}
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
.container textarea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.container .controller {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
</style>
