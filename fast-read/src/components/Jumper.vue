<template>
 <div class="container">
                <div class="topleft">{{spot0}}</div>
                <div class="topright">{{spot1}}</div>
                <div class="bottomleft">{{spot2}}</div>
                <div class="bottomright">{{spot3}}</div>
                <textarea v-model="texttoread3"></textarea>
                <div class="controller">
                    <button v-on:click="startjump()">Start</button>
                    <button v-on:click="stopjump()">Stop</button>
                    <input type="number" v-model="jumpspeed" />
                    <input type="checkbox" v-model="jumprandom"/> 
                    <div>
                        Random:
                        {{jumprandom}}
                    </div>
                </div>
                

            </div>
</template>

<script>
export default {
  name: "Jumper",
  props: {
    msg: String
  },
  data: () => {
    return {
      spot0: 'A',
        spot1: 'B',
        spot2: 'C',
        spot3: 'D',
        jumpwordcount:0,
        jumpwordstable:[],
        jumpspeed:100,
        jumprandom: false,
        jumpstop:false,
        texttoread3: '',
    };
  },
  methods: {
    startjump: function(){
            this.jumpwordstable=this.texttoread3.split(/[ ,\s]+/);
            this.jumpwordcount=0;
            this.jumpwords.bind(this)
            this.jumpwords();
           },
           stopjump: function(){
            this.jumpstop=true;
           },
           jumpwords: function (){
                this.spot0='';
                this.spot1='';
                this.spot2='';
                this.spot3='';
                if(this.jumprandom){
                    this[`spot${Math.floor(Math.random()*4)}`]=this.jumpwordstable[this.jumpwordcount];
                }else{
                    this[`spot${this.jumpwordcount%4}`]=this.jumpwordstable[this.jumpwordcount];
                }
                if(!this.jumpstop && this.jumpwordcount<=this.jumpwordstable.length){
                    setTimeout(()=>{
                        this.jumpwordcount++;
                        this.jumpwords();
                    },1000*60/this.jumpspeed)
                }{
                    this.jumpstop=false;
                }
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
