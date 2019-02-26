<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Jumper/>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumper from '@/components/Jumper.vue';

export default {
  name: 'jumperView',
  components: {
    Jumper,
  },
};
</script>
