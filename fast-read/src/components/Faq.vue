<template>
 <div>
   <ul class="faq-css">
     <li v-for="(item, index) in copy.faq" v-bind:key="index">
      <h3 v-on:click="open(index)">{{item.question}}<span class="opened">{{item.opened ? '+' : '-'}}</span></h3>
      <span v-show="item.opened">{{item.answear}}</span>
      <hr>
     </li>
   </ul>
 </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Main',
  data: () => ({
    abc: 'an',
    // copy: Copy.faq.map((el)=>{
    //   return Object.assign(el, {opened:false})
    // }),
  }),
  computed: {
      ...mapState([
      'copy'
    ]),
    // cp: this.copy,
  },
  methods: {
    open: function(index)   {
        if(this.copy[index].opened !== true){
          this.copy[index].opened=true;
        }else{
          this.copy[index].opened=false;
        }
    }
  }
};
</script>

<!-- ELEMENTS MOVED TO APP - NOTHING HERE -->
<style lang="scss">
.faq-css{
  max-width:500px;
  display:block;
  margin: 0 auto;
}
li {
  display:block;
  text-align:left;
  margin-bottom:30px;
  .opened{
    float: right;
  }
  h3{
    cursor: pointer;
  }
}

</style>
