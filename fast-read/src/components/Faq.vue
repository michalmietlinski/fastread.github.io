<template>
 <div>
   <ul class="faq-css">
     <input v.bind="">
     <li v-for="(item, index) in copy" v-bind:key="index">
      <span v-on:click="open(index)">{{item.question}}</span><br/>
      <hr>
      <span v-show="showarr[index]">{{item.answear}}</span>
     </li>
   </ul>
 </div>
</template>

<script>
import Copy from '@/assets/copy';

export default {
  name: 'Main',
  props: {
    msg: String,
  },
  // computed: () => {
  //   result: this.showarr
  // },
  data: () => ({
    abc: 'an',
    copy: Copy.faq,
    showarr:[false],
  }),
  methods: {
    open: function(index) {
      
        this.$nextTick(()=>{this.showarr[0] = true});


        if(this.showarr[index] !== true){
          this.showarr[index]=true;
        }else{
          this.showarr[index]=false;
        }
    }
  }
};
</script>

<!-- ELEMENTS MOVED TO APP - NOTHING HERE -->
