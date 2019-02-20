<template>
  <div class="about">
    <Counter/>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue';

export default {
  name: 'about',
  components: {
    Counter,
  },
};
</script>
