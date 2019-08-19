<template>
  <div class="timer">
    <Counter/>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue';

export default {
  name: 'timer',
  components: {
    Counter,
  },
};
</script>
