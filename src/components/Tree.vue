<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-md-6" style="overflow: auto;">
        <section>
          <li class="treeview">
            <a><i class="fa fa-plus-square-o"></i>
              <span>/</span>
              <span class="pull-right-container"></span>
            </a>
            <ul class="treeview-menu" v-for="node in firstLevelNodes">
              <li class="treeview">
                <a>
                  <i v-if="node.childrennode.length > 0" class="fa fa-minus-square-o" @click="collapsenode(node)"
                     v-show="node.childrennode.length > 0 || node.childrennodebak.length > 0"></i>
                  <i v-else="node.childrennode.length > 0" class="fa fa-plus-square-o" @click="collapsenode(node)"
                     v-show="node.childrennode.length > 0 || node.childrennodebak.length > 0"></i>
                  <span @click="getnodedata(node)">{{node.name}}</span>
                  <span class="pull-right-container"></span>
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
                      <span @click='getnodedata(nodel2)'>{{nodel2.name}}</span>
                      <span class="pull-right-container"></span>
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
                          <span @click='getnodedata(nodel3)'>{{nodel3.name}}</span>
                          <span class="pull-right-container"></span>
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
                            <span @click='getnodedata(nodel4)'>{{nodel4.name}}</span>
                            <span class="pull-right-container"></span>
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
                              <span @click='getnodedata(nodel5)'>{{nodel5.name}}</span>
                              <span class="pull-right-container"></span>
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
                                <span @click='getnodedata(nodel6)'>{{nodel6.name}}</span>
                                <span class="pull-right-container"></span>
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
                                  <span @click='getnodedata(nodel7)'>{{nodel7.name}}</span>
                                  <span class="pull-right-container"></span>
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
                                    <span @click='getnodedata(nodel8)'>{{nodel8.name}}</span>
                                    <span class="pull-right-container"></span>
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
      <div class="col-lg-6 col-md-6">
        <!--显示当前节点值-->
        <form>
          <h4 style="color: #ccc;">节点值:</h4>
          <div class="row">
            <textarea class="from-control col-lg-11 col-md-11" rows="20"
                      style="background-color: #ccc;" v-model="nowvalue"></textarea>
          </div>
          <button @click="savenode" class="btn btn-primary col-lg-offset-5 col-md-offset-5" style="margin-top: 20px;">
            保存
          </button>
        </form>
      </div>
      <!--<button class="btn btn-primary" @click="testparams">test</button>-->
      <!--<div>{{nodeList}}</div>-->
      <!--<br/>-->
      <!--<div>{{nodes}}</div>-->
      <!--<br/>-->
      <!--<div style="color: white;">{{firstLevelNodes}}</div>-->
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
        nowvalue: ''
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
      },
      testparams: function () {
        console.log(this.$route.query.nodes);
      },
      getparams: function () {
        this.init();
        this.nodeList = this.$route.query.nodes;
        for (let node of this.nodeList) {
          let nodeSplitArray = node.split('/');
          let level = nodeSplitArray.length - 1;
          if (level == 1) {
            this.nodes.push({name: node, parentnode: "/", level: level, childrennode: [], childrennodebak: []});
          } else {
            nodeSplitArray[level] = '';
            this.nodes.push({
              name: node,
              parentnode: nodeSplitArray.join('/').substr(0, nodeSplitArray.join('/').length - 1),
              level: level,
              childrennode: [],
              childrennodebak: []
            });
          }
        }
        let toDo = [{name: "/", parentnode: "", level: 0, childrennode: [], childrennodebak: []}];
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  li {
    list-style-type: none;
  }
</style>
