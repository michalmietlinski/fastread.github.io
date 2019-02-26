<template>
 <div>
   {{abc}}
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
    abc: 'nnaaan'
  }),

};
</script>

<!-- ELEMENTS MOVED TO APP - NOTHING HERE -->
