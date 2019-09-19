<template>
  <div class="container-contact-css">
    <ul class="contact-css">
      <h3 class="contact-title">Contact with us via github:</h3>
      <li v-for="(item, index) in copy.contact" v-bind:key="index">
          <h3 v-on:click="open(index)">{{item.name}}<span class="opened">{{(itemopened[index]) ? '+' : '-'}}</span>
          </h3>
          <a :href="item.github" target='_blank'><span v-show="(itemopened[index])">{{item.github}}</span></a>
          <hr>
        </li>
      </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    name: 'Main',
    data: () => ({
      itemopened: [],
    }),
    computed: {
      ...mapState([
        'copy'
      ]),
    },
    methods: {
      open: function (index) {
        if (this.itemopened[index] !== true) {
          this.itemopened[index] = true;
        } else {
          this.itemopened[index] = false;
        }
        this.$forceUpdate();
      }
    }
  };
</script>
