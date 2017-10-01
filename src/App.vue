<template>
  <div class="hold-transition skin-purple sidebar-mini">
    <div class="warpper">
      <header class="main-header">
        <a href="/" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini"><b>ZK</b>view</span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg"><b>ZKView</b></span>
        </a>

        <nav class="navbar navbar-static-top">
          <!--<a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">-->
          <!--<span class="sr-only">Toggle navigation</span>-->
          <!--</a>-->
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="navbar-collapse">
            <ul class="nav navbar-nav">
              <li><a data-toggle="modal" data-target="#connectionModal"> 连接zk</a></li>
              <li v-show="!conflag"><a><i class="fa fa-close" style="color: darkred"></i></a></li>
              <li v-show="conflag"><a><i class="fa fa-check-circle-o" style="color: yellow"></i></a></li>
              <!--<li v-show="!conflag"><a @click="testget"><i class="fa fa-eye" style="color: white"></i></a></li>-->
              <li @click="test"><a></a></li>
            </ul>
            </ul>
          </div><!-- /.navbar-collapse -->
        </nav>
      </header>
      <!--Left side column. contains the logo and sidebar-->
      <!--<aside class="main-sidebar">-->
      <!--&lt;!&ndash; sidebar: style can be found in sidebar.less &ndash;&gt;-->
      <!--<section class="sidebar">-->
      <!--&lt;!&ndash; Sidebar Menu &ndash;&gt;-->
      <!--<ul class="sidebar-menu" data-widget="tree">-->
      <!--&lt;!&ndash; Optionally, you can add icons to the links &ndash;&gt;-->
      <!--<li class="active"><a href="#"><i class="fa fa-tag" style="color:forestgreen"></i> <span></span></a>-->
      <!--</li>-->
      <!--</ul>-->
      <!--&lt;!&ndash; /.sidebar-menu &ndash;&gt;-->
      <!--</section>-->
      <!--&lt;!&ndash; /.sidebar &ndash;&gt;-->
      <!--</aside>-->
      <!--<div class="content-wrapper">-->
      <div>
        <router-view></router-view>
      </div>
      <!-- 模态框（Modal） -->
      <div class="modal fade" id="connectionModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
           aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                &times;
              </button>
              <h4 class="modal-title" id="myModalLabel">
                新建一个zk连接
              </h4>
            </div>
            <div class="modal-body">
              <form role="form">
                <div class="box-body">
                  <div class="form-group">
                    <label>请输入zk连接字符串</label>
                    <input @keyup.enter="connect" type="text" v-model="connectionString" class="form-control" placeholder="请输入zk连接字符串"/>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">取消
              </button>
              <button type="button" class="btn btn-primary" @click="connect">
                连接
              </button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        conflag: false,
        connectionString: '192.168.0.66:2181'
      }
    },
    methods: {
      test: function () {
        alert(this.GLOBAL.BASE_URL);
        alert(this.$ajax.defaults.baseURL);
      },
      testget: function () {
        this.$ajax({
          method: 'get',
          url: 'zk/connect?connectionString=' + this.connectionString,
        }).then(function (res) {
          let data = res.data;
          alert(data);
          this.conflag = data.flag;
        }.bind(this));
      },
      connect: function () {
        this.$ajax({
          method: 'get',
          url: 'zk/connect?connectionString=' + this.connectionString,
        }).then(function (res) {
          let data = res.data;
          this.conflag = data.flag;
          $('#connectionModal').modal('hide');
          this.$router.push({name: 'tree', query: data});
        }.bind(this));
      }

    }
  }

</script>

<style>
  body{
    background-color: #444;
  }
  .main-header {
    position: absolute;
    max-height: 100px;
    z-index: 1030;
    position: fixed;
    width: 100%;
  }
</style>
