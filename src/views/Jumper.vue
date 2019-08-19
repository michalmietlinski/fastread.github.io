<template>
  <div class="home">
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
