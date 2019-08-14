<template>
  <div class="container-main-jumper">
    <div class="introduction">
      <h2>{{copy.section ? copy.section.jumper.header : ''}}</h2>
      <p>{{copy.section ? copy.section.jumper.describtion : ''}}</p>
    </div>
    <div class="container-jumper">
      <div class="topleft">{{spot0}}</div>
      <div class="topright">{{spot1}}</div>
      <div class="bottomleft">{{spot2}}</div>
      <div class="bottomright">{{spot3}}</div>
      <textarea class="textareaJumper" v-model="texttoread3"></textarea>
      <div class="controller">
        <button v-on:click="startjump()">{{copy.menu ? copy.controls.start : ''}}</button>
        <button v-on:click="stopjump()">{{copy.menu ? copy.controls.stop : ''}}</button>
        <input type="number" v-model="jumpspeed">
        <input type="checkbox" v-model="jumprandom">
        <div>
          Random:
          {{jumprandom}}
        </div>
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

  .container-main-jumper {
    background: white;
    border-radius: 0 8% 0 8%;
    border: 1px solid black;
    box-shadow: 8px 5px 5px #3C8CBE;
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
      max-width: 500px;
      min-height: 300px;
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
      }
    }
  }


</style>
