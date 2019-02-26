<template>
 <div>
   <ul class="faq-css">
     <li v-for="(item, index) in copy" v-bind:key="index">
      {{item.question}} <br/> 
      {{item.answear}} <hr>
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
  data: () => ({
    abc: 'an',
    copy: Copy.faq
  }),

};
</script>

<!-- ELEMENTS MOVED TO APP - NOTHING HERE -->
