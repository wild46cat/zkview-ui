<template>
  <div>
    <img src="../assets/zookeeperman.png" class="zkman"/>
  </div>
</template>

<script>
  export default {
    name: 'welcome',
    data () {
      return {
        msg: 'welcome to use zkView'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .zkman {
    height: 35%;
    width: 35%;
    margin-left: 20%;
    margin-top:5px;
  }
</style>
