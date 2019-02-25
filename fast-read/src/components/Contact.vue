<template>
 <div>
   
 </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String,
  },
  data: () =>{
    return {
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
textarea {
        min-width:500px;
        min-height:300px;
    }
    .container{
        display:block;
       width:100%;
       height:600px;
       position: relative;
       background: #302e2e;
       color: #ff1919;
       text-transform: uppercase;
    }
</style>
