<template>
  <div>
    <section class="sidebar">
      <li class="treeview">
        <a href="#">
          <i class="fa fa-tags"></i> <span>Multilevel</span>
          <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="#"><i class="fa fa-tag"></i> Level One</a></li>
          <li class="treeview">
            <a href="#"><i class="fa fa-tag"></i> Level One
              <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="#"><i class="fa fa-tag"></i> Level Two</a></li>
              <li class="treeview">
                <a href="#"><i class="fa fa-tag"></i> Level Two
                  <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                  <li><a href="#"><i class="fa fa-tag"></i> Level Three</a></li>
                  <li><a href="#"><i class="fa fa-tag"></i> Level Three</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#"><i class="fa fa-tag"></i> Level One</a></li>
        </ul>
      </li>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    mounted: {},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
