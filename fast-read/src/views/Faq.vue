<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Faq/>
  </div>
</template>

<script>
// @ is an alias to /src
import Faq from '@/components/Faq.vue';

export default {
  name: 'FaqtView',
  components: {
    Faq,
  },
};
</script>
