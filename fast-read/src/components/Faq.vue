<template>
 <div>
   <ul class="faq-css">
     <input v.bind="">
     <li v-for="(item, index) in copy" v-bind:key="index">
      <span v-on:click="open(index)">{{item.question}}</span><br/>
      <hr>
      <span v-show="item.opened">{{item.answear}}</span>
     </li>
   </ul>
 </div>
</template>

<script>
import Copy from '@/assets/copy';

export default {
  name: 'Main',
  // computed: () => {
  //   result: this.showarr
  // },
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
