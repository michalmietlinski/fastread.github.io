<template>
  <div class="container-faq-css">
    <ul class="faq-css">
      <li v-for="(item, index) in copy.faq" v-bind:key="index">
        <h3 v-on:click="open(index)">{{item.question}}<span class="opened">{{(itemopened[index]) ? '+' : '-'}}</span>
        </h3>
        <span v-show="(itemopened[index])">{{item.answear}}</span>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Main',
        data: () => ({
            itemopened: [],
            // copy: Copy.faq.map((el)=>{
            //   return Object.assign(el, {opened:false})
            // }),
        }),
        computed: {
            ...mapState([
                'copy'
            ]),
            // cp: this.copy,
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

<style lang="scss">
  .container-faq-css {
    display: block;

    .faq-css {
      display: block;
      max-width: 400px;
      margin: 4vh auto;
      border: 1px solid black;
      border-radius: 0 20% 0 25%;
      background: white;
      box-shadow: 3px 3px 3px hsla(50, 98%, 53%, 0.3);

      li {
        display: block;
        text-align: left;
        margin: 5vh;

        .opened {
          float: right;
        }
      }

      h3 {
        cursor: pointer;
      }
    }
  }

</style>
