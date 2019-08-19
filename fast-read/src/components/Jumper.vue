<template>
  <div class="container-main-jumper">
    <div class="introduction">
      <h2>{{copy.section ? copy.section.jumper.header : ''}}</h2>
      <p>{{copy.section ? copy.section.jumper.describtion : ''}}</p>
    </div>
    <div class="container-jumper" :style="{'width':widthSliderValue, 'height':heightScale}">
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
      <div>
        <input type="range" min="52" max="100" value="97" id="range-slider" v-model="texttoread4"/>
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

            texttoread4: 100,
        }),
        computed: {
            ...mapState([
                'copy'
            ]),
            widthSliderValue: function () {
                return  this.texttoread4.valueOf() + "%";
            },
            heightScale: function () {
                return this.texttoread4.valueOf() *7 +"px";
            }
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

<style scoped lang="scss">

  .container-jumper {
    display: inline-block;
    position: relative;
    background: #302e2e;
    color: #F6BF45/*red*/;
    text-transform: uppercase;
  }


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

      #range-slider  {
        -webkit-appearance: none;
        margin: 2.5vh 0;
        width: 50%;
      }
    #range-slider:focus {
        outline: none;
      }
    #range-slider::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #CCEBC5;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
      }
    #range-slider::-webkit-slider-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 26px;
        width: 26px;
        border-radius: 50%/*3px*/;
        background: #F7FCF0;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -11px;
      }
    #range-slider:focus::-webkit-slider-runnable-track {
        background: #A8DDB5;
      }
      /*input[type=range]::-moz-range-track {*/
      /*  width: 100%;*/
      /*  height: 8.4px;*/
      /*  cursor: pointer;*/
      /*  animate: 0.2s;*/
      /*  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
      /*  background: #3071a9;*/
      /*  border-radius: 1.3px;*/
      /*  border: 0.2px solid #010101;*/
      /*}*/
      /*input[type=range]::-moz-range-thumb {*/
      /*  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
      /*  border: 1px solid #000000;*/
      /*  height: 36px;*/
      /*  width: 16px;*/
      /*  border-radius: 3px;*/
      /*  background: #ffffff;*/
      /*  cursor: pointer;*/
      /*}*/
      /*input[type=range]::-ms-track {*/
      /*  width: 100%;*/
      /*  height: 8.4px;*/
      /*  cursor: pointer;*/
      /*  animate: 0.2s;*/
      /*  background: transparent;*/
      /*  border-color: transparent;*/
      /*  border-width: 16px 0;*/
      /*  color: transparent;*/
      /*}*/
      /*input[type=range]::-ms-fill-lower {*/
      /*  background: #2a6495;*/
      /*  border: 0.2px solid #010101;*/
      /*  border-radius: 2.6px;*/
      /*  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
      /*}*/
      /*input[type=range]::-ms-fill-upper {*/
      /*  background: #3071a9;*/
      /*  border: 0.2px solid #010101;*/
      /*  border-radius: 2.6px;*/
      /*  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
      /*}*/
      /*input[type=range]::-ms-thumb {*/
      /*  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
      /*  border: 1px solid #000000;*/
      /*  height: 36px;*/
      /*  width: 16px;*/
      /*  border-radius: 3px;*/
      /*  background: #ffffff;*/
      /*  cursor: pointer;*/
      /*}*/
      /*input[type=range]:focus::-ms-fill-lower {*/
      /*  background: #3071a9;*/
      /*}*/
      /*input[type=range]:focus::-ms-fill-upper {*/
      /*  background: #367ebd;*/
      /*}*/
  }


</style>
