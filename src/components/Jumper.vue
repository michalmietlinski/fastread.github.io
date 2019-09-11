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
            },
            texttoread3: {
                get: function () {
                    return this.$store.state.texttoread
                },
                // setter
                set: function (newValue) {
                  this.$store.dispatch('setText', newValue)
                }
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

</style>
