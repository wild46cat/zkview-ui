<template>
  <div style="background-color: #444;">
    <section>
      <li class="treeview">
        <a><i class="fa fa-tags"></i>
          <span>/</span>
          <span class="pull-right-container"></span>
        </a>
        <ul class="treeview-menu" v-for="node in firstLevelNodes">
          <li class="treeview">
            <a @click='getnodedata(node)'><i class="fa fa-tag"></i>
              <span>{{node.name}}</span>
              <span class="pull-right-container"></span>
            </a>
            <ul class="treeview-menu" v-for="nodel2 in node.childrennode">
              <li class="treeview">
                <a @click='getnodedata(nodel2)'><i class="fa fa-tag"></i>
                  <span>{{nodel2.name}}</span>
                  <span class="pull-right-container"></span>
                </a>
                <ul class="treeview-menu" v-for="nodel3 in nodel2.childrennode">
                  <li class="treeview">
                    <a @click='getnodedata(nodel3)'><i class="fa fa-tag"></i>
                      <span>{{nodel3.name}}</span>
                      <span class="pull-right-container"></span>
                    </a>
                  </li>
                  <ul class="treeview-menu" v-for="nodel4 in nodel3.childrennode">
                    <li class="treeview">
                      <a @click='getnodedata(nodel4)'><i class="fa fa-tag"></i>
                        <span>{{nodel4.name}}</span>
                        <span class="pull-right-container"></span>
                      </a>
                    </li>
                    <ul class="treeview-menu" v-for="nodel5 in nodel4.childrennode">
                      <li class="treeview">
                        <a @click='getnodedata(nodel5)'><i class="fa fa-tag"></i>
                          <span>{{nodel5.name}}</span>
                          <span class="pull-right-container"></span>
                        </a>
                      </li>
                      <ul class="treeview-menu" v-for="nodel6 in nodel5.childrennode">
                        <li class="treeview">
                          <a @click='getnodedata(nodel6)'><i class="fa fa-tag"></i>
                            <span>{{nodel6.name}}</span>
                            <span class="pull-right-container"></span>
                          </a>
                        </li>
                        <ul class="treeview-menu" v-for="nodel7 in nodel6.childrennode">
                          <li class="treeview">
                            <a @click='getnodedata(nodel7)'><i class="fa fa-tag"></i>
                              <span>{{nodel7.name}}</span>
                              <span class="pull-right-container"></span>
                            </a>
                          </li>
                          <ul class="treeview-menu" v-for="nodel8 in nodel7.childrennode">
                            <li class="treeview">
                              <a @click='getnodedata(nodel8)'><i class="fa fa-tag"></i>
                                <span>{{nodel8.name}}</span>
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
    <!--<button class="btn btn-primary" @click="testparams">test</button>-->
    <!--<div>{{nodeList}}</div>-->
    <!--<br/>-->
    <!--<div>{{nodes}}</div>-->
    <!--<br/>-->
    <!--<div>{{firstLevelNodes}}</div>-->
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        nodeList: [],
        nodes: [],
        firstLevelNodes: []
      }
    },
    mounted: function () {
      this.getparams();
    },
    methods: {
      testparams: function () {
        console.log(this.$route.params.nodes);
      },
      getparams: function () {
        this.nodeList = this.$route.params.nodes;
        for (let node of this.nodeList) {
          let nodeSplitArray = node.split('/');
          let level = nodeSplitArray.length - 1;
          if (level == 1) {
            this.nodes.push({name: node, parentnode: "/", level: level, childrennode: []});
          } else {
            nodeSplitArray[level] = '';
            this.nodes.push({
              name: node,
              parentnode: nodeSplitArray.join('/').substr(0, nodeSplitArray.join('/').length - 1),
              level: level,
              childrennode: []
            });
          }
        }
        let toDo = [{name: "/", parentnode: "", level: 0, childrennode: []}];
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
          alert(data);
        }.bind(this));
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
