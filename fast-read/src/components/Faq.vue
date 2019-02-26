<template>
 <div>
   <ul class="faq-css">
     <ul v-for="(item, index) in copy" v-bind:key="index">
      <li v-on:click="open(index)">{{item.question}}</li><br/><br/>
      <li v-show="item.opened">{{item.answear}}</li>
      <hr>
     </ul>
   </ul>
 </div>
</template>

<script>
import Copy from '@/assets/copy.js';

export default {
  name: 'Main',
  data: () => ({
    abc: 'an',
    copy: Copy.faq.map((el)=>{
      return Object.assign(el, {opened:false})
    }),
  }),
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
