<template>
  <div>
    <!--<div class="row" style="color: whitesmoke;-->
    <!--<div style="margin-top: 50px;">{{nodeList}}</div>-->
    <!--<div style="color: white;">{{firstLevelNodes}}</div>-->
    <!--</div>-->
    <div class="row">
      <div class="col-md-6">
        <section>
          <li class="treeview">
            <a><i class="fa fa-plus-square-o"></i>
              <span>/</span>
              <span class="pull-right-container">
                 <div class="btn-group">
                    	<button class="btn btn-success btn-xs" @click="showaddmodal('/')">添加</button>
                    </div>
              </span>
            </a>
            <ul class="treeview-menu" v-for="node in firstLevelNodes">
              <li class="treeview">
                <a>
                  <i v-if="node.childrennode.length > 0" class="fa fa-minus-square-o" @click="collapsenode(node)"
                     v-show="node.childrennode.length > 0 || node.childrennodebak.length > 0"></i>
                  <i v-else="node.childrennode.length > 0" class="fa fa-plus-square-o" @click="collapsenode(node)"
                     v-show="node.childrennode.length > 0 || node.childrennodebak.length > 0"></i>
                  <span @click="getnodedata(node)">{{node.name}}</span>
                  <span class="pull-right-container" style="margin-left: 20px;">
                    <div class="btn-group">
                    	<button class="btn btn-success btn-xs" @click="showaddmodal(node.name)">添加</button>
                      <button class="btn btn-danger btn-xs"
                              @click="deletenode(node.name)">删除</button>
                    </div>
                  </span>
                </a>
                <ul class="treeview-menu" v-for="nodel2 in node.childrennode">
                  <li class="treeview">
                    <a>
                      <i v-if="nodel2.childrennode.length > 0" class="fa fa-minus-square-o"
                         @click="collapsenode(nodel2)"
                         v-show="nodel2.childrennode.length > 0 || nodel2.childrennodebak.length > 0"></i>
                      <i v-else="nodel2.childrennode.length > 0" class="fa fa-plus-square-o"
                         @click="collapsenode(nodel2)"
                         v-show="nodel2.childrennode.length > 0 || nodel2.childrennodebak.length > 0"></i>
                      <span @click='getnodedata(nodel2)'>{{nodel2.formatname}}</span>
                      <span class="pull-right-container" style="margin-left: 20px;">
                        <div class="btn-group">
                        	<button class="btn btn-success btn-xs" @click="showaddmodal(nodel2.name)">添加</button>
                          <button class="btn btn-danger btn-xs"
                                  @click="deletenode(nodel2.name)">删除</button>
                        </div>
                      </span>
                    </a>
                    <ul class="treeview-menu" v-for="nodel3 in nodel2.childrennode">
                      <li class="treeview">
                        <a>
                          <i v-if="nodel3.childrennode.length > 0" class="fa fa-minus-square-o"
                             @click="collapsenode(nodel3)"
                             v-show="nodel3.childrennode.length > 0 || nodel3.childrennodebak.length > 0"></i>
                          <i v-else="nodel3.childrennode.length > 0" class="fa fa-plus-square-o"
                             @click="collapsenode(nodel3)"
                             v-show="nodel3.childrennode.length > 0 || nodel3.childrennodebak.length > 0"></i>
                          <span @click='getnodedata(nodel3)'>{{nodel3.formatname}}</span>
                          <span class="pull-right-container" style="margin-left: 20px;">
                             <div class="btn-group">
                        	      <button class="btn btn-success btn-xs" @click="showaddmodal(nodel3.name)">添加</button>
                                <button class="btn btn-danger btn-xs"
                                        @click="deletenode(nodel3.name)">删除</button>
                             </div>
                          </span>
                        </a>
                      </li>
                      <ul class="treeview-menu" v-for="nodel4 in nodel3.childrennode">
                        <li class="treeview">
                          <a>
                            <i v-if="nodel4.childrennode.length > 0" class="fa fa-minus-square-o"
                               @click="collapsenode(nodel4)"
                               v-show="nodel4.childrennode.length > 0 || nodel4.childrennodebak.length > 0"></i>
                            <i v-else="nodel4.childrennode.length > 0" class="fa fa-plus-square-o"
                               @click="collapsenode(nodel4)"
                               v-show="nodel4.childrennode.length > 0 || nodel4.childrennodebak.length > 0"></i>
                            <span @click='getnodedata(nodel4)'>{{nodel4.formatname}}</span>
                            <span class="pull-right-container" style="margin-left: 20px;">
                              <div class="btn-group">
                        	      <button class="btn btn-success btn-xs" @click="showaddmodal(nodel4.name)">添加</button>
                                <button class="btn btn-danger btn-xs"
                                        @click="deletenode(nodel4.name)">删除</button>
                              </div>
                            </span>
                          </a>
                        </li>
                        <ul class="treeview-menu" v-for="nodel5 in nodel4.childrennode">
                          <li class="treeview">
                            <a>
                              <i v-if="nodel5.childrennode.length > 0" class="fa fa-minus-square-o"
                                 @click="collapsenode(nodel5)"
                                 v-show="nodel5.childrennode.length > 0 || nodel5.childrennodebak.length > 0"></i>
                              <i v-else="nodel5.childrennode.length > 0" class="fa fa-plus-square-o"
                                 @click="collapsenode(nodel5)"
                                 v-show="nodel5.childrennode.length > 0 || nodel5.childrennodebak.length > 0"></i>
                              <span @click='getnodedata(nodel5)'>{{nodel5.formatname}}</span>
                              <span class="pull-right-container" style="margin-left: 20px;">
                                 <div class="btn-group">
                        	         <button class="btn btn-success btn-xs" @click="showaddmodal(nodel5.name)">添加</button>
                                    <button class="btn btn-danger btn-xs"
                                            @click="deletenode(nodel5.name)">删除</button>
                                 </div>
                              </span>
                            </a>
                          </li>
                          <ul class="treeview-menu" v-for="nodel6 in nodel5.childrennode">
                            <li class="treeview">
                              <a>
                                <i v-if="nodel6.childrennode.length > 0" class="fa fa-minus-square-o"
                                   @click="collapsenode(nodel6)"
                                   v-show="nodel6.childrennode.length > 0 || nodel6.childrennodebak.length > 0"></i>
                                <i v-else="nodel6.childrennode.length > 0" class="fa fa-plus-square-o"
                                   @click="collapsenode(nodel6)"
                                   v-show="nodel6.childrennode.length > 0 || nodel6.childrennodebak.length > 0"></i>
                                <span @click='getnodedata(nodel6)'>{{nodel6.formatname}}</span>
                                <span class="pull-right-container" style="margin-left: 20px;">
                                  <div class="btn-group">
                        	           <button class="btn btn-success btn-xs"
                                             @click="showaddmodal(nodel6.name)">添加</button>
                                     <button class="btn btn-danger btn-xs"
                                             @click="deletenode(nodel6.name)">删除</button>
                                  </div>
                                </span>
                              </a>
                            </li>
                            <ul class="treeview-menu" v-for="nodel7 in nodel6.childrennode">
                              <li class="treeview">
                                <a>
                                  <i v-if="nodel7.childrennode.length > 0" class="fa fa-minus-square-o"
                                     @click="collapsenode(nodel7)"
                                     v-show="nodel7.childrennode.length > 0 || nodel7.childrennodebak.length > 0"></i>
                                  <i v-else="nodel7.childrennode.length > 0" class="fa fa-plus-square-o"
                                     @click="collapsenode(nodel7)"
                                     v-show="nodel7.childrennode.length > 0 || nodel7.childrennodebak.length > 0"></i>
                                  <span @click='getnodedata(nodel7)'>{{nodel7.formatname}}</span>
                                  <span class="pull-right-container" style="margin-left: 20px;">
                                    <div class="btn-group">
                        	            <button class="btn btn-success btn-xs"
                                              @click="showaddmodal(nodel7.name)">添加</button>
                                      <button class="btn btn-danger btn-xs"
                                              @click="deletenode(nodel7.name)">删除</button>
                                    </div>
                                  </span>
                                </a>
                              </li>
                              <ul class="treeview-menu" v-for="nodel8 in nodel7.childrennode">
                                <li class="treeview">
                                  <a>
                                    <i v-if="nodel8.childrennode.length > 0" class="fa fa-minus-square-o"
                                       @click="collapsenode(nodel8)"
                                       v-show="nodel8.childrennode.length > 0 || nodel8.childrennodebak.length > 0"></i>
                                    <i v-else="nodel8.childrennode.length > 0" class="fa fa-plus-square-o"
                                       @click="collapsenode(nodel8)"
                                       v-show="nodel8.childrennode.length > 0 || nodel8.childrennodebak.length > 0"></i>
                                    <span @click='getnodedata(nodel8)'>{{nodel8.formatname}}</span>
                                    <span class="pull-right-container" style="margin-left: 20px;">
                                      <div class="btn-group">
                        	               <button class="btn btn-success btn-xs"
                                                 @click="showaddmodal(nodel8.name)">添加</button>
                                         <button class="btn btn-danger btn-xs"
                                                 @click="deletenode(nodel8.name)">删除</button>
                                      </div>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </ul>
                        </ul>
                      </ul>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </section>
      </div>
      <!--<button class="btn btn-primary" @click="testparams">test</button>-->
      <!--<div>{{nodeList}}</div>-->
      <!--<br/>-->
      <!--<div>{{nodes}}</div>-->
      <!--<br/>-->
      <!--<div style="color: white;">{{firstLevelNodes}}</div>-->
      <div class="col-md-6 positionfixed">
        <!--显示当前节点值-->
        <button @click="savenode" class="btn btn-primary">
          保存
        </button>
        <button @click="freshallnode" class="btn btn-success">
          刷新
        </button>
        <div>
            <textarea class="from-control" rows="30"
                      style="background-color: #ccc;width: 90%;" v-model="nowvalue"></textarea>
        </div>
      </div>
    </div>
    <!-- 模态框（Modal） -->
    <div class="modal fade" id="newNodeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              新建一个节点
            </h4>
          </div>
          <div class="modal-body">
            <form role="form">
              <div class="box-body">
                <div class="form-group">
                  <label>名称</label>
                  <input type="text" @keyup.enter="addnode" v-model="newnodepath" class="form-control" placeholder="请输入节点名称"/>
                </div>
                <div class="form-group">
                  <label>值</label>
                  <input type="text" @keyup.enter="addnode" v-model="newnodevalue" class="form-control" placeholder="请输入节点值"/>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消
            </button>
            <button type="button" class="btn btn-primary" @click="addnode">
              添加
            </button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tree',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        nodeList: [],
        nodes: [],
        firstLevelNodes: [],
        nowpath: '',
        nowvalue: '',
        connectionString: '',
        newnodepath: '',
        newnodevalue: '',
        newnodeprefix: '',
      }
    },
    mounted: function () {
      this.getparams();
    },
    watch: {
      '$route'(to, from){
        //在这里重新刷新一下
        this.getparams();
      }
    },
    methods: {
      init: function () {
        this.nodeList = [];
        this.nodes = [];
        this.firstLevelNodes = [];
        this.connectionString = '';
        this.nowvalue = '';
        this.newnodepath = '';
        this.newnodevalue = '';
        this.newnodeprefix = '';
      },
      testparams: function () {
        console.log(this.$route.query.nodes);
      },
      freshallnode: function () {
        this.init();
        this.connectionString = this.$route.query.connectionString;
        this.$ajax({
          method: 'get',
          url: 'zk/connect?connectionString=' + this.connectionString,
        }).then(function (res) {
          this.nodeList = res.data.nodes;
          for (let node of this.nodeList) {
            let nodeSplitArray = node.split('/');
            let level = nodeSplitArray.length - 1;
            if (level == 1) {
              this.nodes.push({name: node, parentnode: "/", level: level, childrennode: [], childrennodebak: []});
            } else {
              nodeSplitArray[level] = '';
              this.nodes.push({
                formatname: node.substr(node.lastIndexOf("/") + 1, node.length),
                name: node,
                parentnode: nodeSplitArray.join('/').substr(0, nodeSplitArray.join('/').length - 1),
                level: level,
                childrennode: [],
                childrennodebak: []
              });
            }
          }
          let toDo = [{formatname: "/", name: "/", parentnode: "", level: 0, childrennode: [], childrennodebak: []}];
          for (let node of this.nodes) {
            toDo.push(node);
          }
          //把父子关系找到
          while (toDo.length) {
            //父节点
            let todonode = toDo.shift();
            for (let i = 0; i < this.nodes.length; i++) {
              //子节点
              let node = this.nodes[i];
              if (todonode.parentnode == node.name) {
                node.childrennode.push(todonode);
              }
            }
          }
          for (let node of this.nodes) {
            if (node.level == 1) {
              this.firstLevelNodes.push(node);
            }
          }
        }.bind(this));
      },
      getparams: function () {
        this.freshallnode();
      },
      getnodedata: function (node) {
        this.$ajax({
          method: 'get',
          url: 'zk/getByNodeName?name=' + node.name
        }).then(function (res) {
          let data = res.data;
          this.nowpath = node.name;
          this.nowvalue = typeof data == 'object' ? JSON.stringify(data) : data;
        }.bind(this));
      },
      collapsenode: function (node) {
        if (node.childrennode.length == 0) {
          while (node.childrennodebak.length) {
            node.childrennode.push(node.childrennodebak.shift());
          }
        } else {
          node.childrennodebak = [];
          while (node.childrennode.length) {
            node.childrennodebak.push(node.childrennode.shift());
          }
        }
      },
      savenode: function () {
        this.$ajax({
          method: 'post',
          url: 'zk/setNodeValue',
          data: {nodePath: this.nowpath, nodeValue: this.nowvalue}
        }).then(function (res) {
          let data = res.data;
          if (data) {
            alert('修改成功');
          } else {
            alert('保存失败')
          }
        }.bind(this));
      },
      addnode: function () {
        this.$ajax({
          method: 'post',
          url: 'zk/createNode',
          data: {
            nodePath: (this.newnodeprefix == '/' ? '' : this.newnodeprefix) + '/' + this.newnodepath,
            nodeValue: this.newnodevalue
          }
        }).then(function (res) {
          let data = res.data;
          if (data) {
            alert('添加成功');
            $('#newNodeModal').modal('hide');
            this.freshallnode();
          } else {
            alert('添加失败')
          }
        }.bind(this));
      },
      showaddmodal: function (prefix) {
        this.newnodeprefix = prefix;
        $('#newNodeModal').modal('show');
      },
      deletenode: function (nodename) {
        this.$ajax({
          method: 'post',
          url: 'zk/deleteNode',
          data: {
            nodePath: nodename,
            nodeValue: ""
          }
        }).then(function (res) {
          let data = res.data;
          if (data) {
            alert('删除成功');
            this.freshallnode();
          } else {
            alert('删除失败,请检查是否存在子节点')
          }
        }.bind(this));
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  li {
    list-style-type: none;
  }

  .positionfixed {
    position: absolute !important;
    position: fixed !important;
    right: 0px;
  }
</style>
