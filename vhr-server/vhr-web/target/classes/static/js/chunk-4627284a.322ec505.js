(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4627284a"],{"1fe7":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 系统管理 ")])},l=[],a={name:"SysCfg"},s=a,o=n("2877"),r=Object(o["a"])(s,i,l,!1,null,"23cce413",null);t["default"]=r.exports},"418a":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{"margin-top":"10px",display:"flex","justify-content":"center"}},[n("el-input",{staticStyle:{width:"360px","margin-right":"5px"},attrs:{placeholder:"通过用户名搜索用户...","prefix-icon":"el-icon-search",size:"small"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSearch(t)}},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),n("el-button",{attrs:{size:"small",icon:"el-icon-search",type:"primary"},on:{click:e.doSearch}},[e._v("搜索")])],1),n("div",{staticClass:"hr-container"},e._l(e.hrs,(function(t,i){return n("el-card",{key:i,staticClass:"hr-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(t.name))]),n("el-button",{staticStyle:{float:"right",padding:"3px 0",color:"#ff3631"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.deleteHr(t)}}})],1),n("div",[n("div",{staticClass:"img-container"},[n("img",{staticClass:"userface-img",attrs:{src:t.userface,alt:t.name,title:t.name}})]),n("div",{staticClass:"userinfo-container"},[n("div",[e._v("用户名："+e._s(t.name))]),n("div",[e._v("手机号码："+e._s(t.phone))]),n("div",[e._v("电话号码："+e._s(t.telephone))]),n("div",[e._v("地址："+e._s(t.address))]),n("div",[e._v("用户状态： "),n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"启用","inactive-text":"禁用"},on:{change:function(n){return e.enabledChange(t)}},model:{value:t.enabled,callback:function(n){e.$set(t,"enabled",n)},expression:"hr.enabled"}})],1),n("div",[e._v("用户角色： "),e._l(t.roles,(function(t,i){return n("el-tag",{key:i,staticStyle:{"margin-right":"4px"},attrs:{size:"mini",type:"success"}},[e._v(" "+e._s(t.nameZh)+" ")])})),n("el-popover",{attrs:{placement:"right",title:"角色列表",width:"240",trigger:"click"},on:{show:function(n){return e.showPopover(t)},hide:function(n){return e.hidePopover(t)}}},[n("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.selectedRoles,callback:function(t){e.selectedRoles=t},expression:"selectedRoles"}},e._l(e.allroles,(function(e,t){return n("el-option",{key:t,attrs:{label:e.nameZh,value:e.id}})})),1),n("el-button",{attrs:{slot:"reference",icon:"el-icon-more",type:"text"},slot:"reference"})],1)],2),n("div",[e._v("备注："+e._s(t.remark))])])])])})),1)])},l=[],a=(n("4160"),n("a4342"),n("b0c0"),n("159b"),{name:"SysHr",data:function(){return{keywords:"",hrs:[],allroles:[],selectedRoles:[]}},mounted:function(){this.initHrs()},methods:{initHrs:function(){var e=this;this.getRequest("/system/hr/?keywords="+this.keywords).then((function(t){t&&(e.hrs=t)}))},enabledChange:function(e){var t=this;delete e.roles,this.putRequest("/system/hr/",e).then((function(e){e&&t.initHrs()}))},initAllRoles:function(){var e=this;this.getRequest("/system/hr/roles").then((function(t){t&&(e.allroles=t)}))},showPopover:function(e){var t=this;this.initAllRoles();var n=e.roles;this.selectedRoles=[],n.forEach((function(e){t.selectedRoles.push(e.id)}))},hidePopover:function(e){var t=this,n=[];Object.assign(n,e.roles);var i=!1;if(n.length!=this.selectedRoles.length)i=!0;else{for(var l=0;l<n.length;l++)for(var a=n[l],s=0;s<this.selectedRoles.length;s++){var o=this.selectedRoles[s];if(a.id==o){n.splice(l,1),l--;break}}0!=n.length&&(i=!0)}if(i){var r="/system/hr/role?hrid="+e.id;this.selectedRoles.forEach((function(e){r+="&rids="+e})),this.putRequest(r).then((function(e){e&&t.initHrs()}))}},doSearch:function(){this.initHrs()},deleteHr:function(e){var t=this;e&&this.$confirm("此操作将永久删除【"+e.name+"】操作员, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteRequest("/system/hr/"+e.id).then((function(e){e&&t.initHrs()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}}),s=a,o=(n("a73a"),n("2877")),r=Object(o["a"])(s,i,l,!1,null,null,null);t["default"]=r.exports},"4de4":function(e,t,n){"use strict";var i=n("23e7"),l=n("b727").filter,a=n("1dde"),s=n("ae40"),o=a("filter"),r=s("filter");i({target:"Array",proto:!0,forced:!o||!r},{filter:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})},"69f6":function(e,t,n){"use strict";var i=n("92632"),l=n.n(i);l.a},8608:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 初始化数据库 ")])},l=[],a={name:"SysInit"},s=a,o=n("2877"),r=Object(o["a"])(s,i,l,!1,null,"5fd3d133",null);t["default"]=r.exports},"864e":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 操作日志管理 ")])},l=[],a={name:"SysLog"},s=a,o=n("2877"),r=Object(o["a"])(s,i,l,!1,null,"160d2594",null);t["default"]=r.exports},"890c":function(e,t,n){},"8d67":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"部门管理",name:"depmana"}},[n("DepMana")],1),n("el-tab-pane",{attrs:{label:"职位管理",name:"posmana"}},[n("PosMana")],1),n("el-tab-pane",{attrs:{label:"职称管理",name:"joblevelmana"}},[n("JobLevelMana")],1),n("el-tab-pane",{attrs:{label:"奖惩规则",name:"ecmana"}},[n("EcMana")],1),n("el-tab-pane",{attrs:{label:"权限组",name:"permissmana"}},[n("PermissMana")],1)],1)],1)},l=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"500px","margin-top":"10px"}},[n("el-input",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"small","prefix-icon":"el-icon-search",placeholder:"请输入部门名称进行搜索..."},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),n("el-tree",{ref:"tree",attrs:{"element-loading-text":"正在加载...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0.8)","expand-on-click-node":!1,data:e.deps,props:e.defaultProps,"filter-node-method":e.filterNode},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,l=t.data;return n("span",{staticClass:"custom-tree-node",staticStyle:{display:"flex","justify-content":"space-between",width:"100%"}},[n("span",[e._v(e._s(i.label))]),n("span",[n("el-button",{staticClass:"depBtn",attrs:{type:"primary",size:"mini"},on:{click:function(){return e.showAddDepView(l)}}},[e._v(" 添加部门 ")]),n("el-button",{staticClass:"depBtn",attrs:{type:"danger",size:"mini"},on:{click:function(){return e.deleteDep(l)}}},[e._v(" 删除部门 ")])],1)])}}])}),n("el-dialog",{staticStyle:{height:"360px"},attrs:{title:"添加部门",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",[n("div",[n("el-tag",{attrs:{size:"small"}},[e._v("上级部门")]),n("span",[e._v(e._s(e.pname))])],1),n("div",[n("el-tag",{attrs:{size:"small"}},[e._v("部门名称")]),n("el-input",{staticStyle:{width:"250px"},attrs:{size:"mini",placeholder:"请输入部门名称..."},model:{value:e.dep.name,callback:function(t){e.$set(e.dep,"name",t)},expression:"dep.name"}})],1)]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.doAddDep}},[e._v("确 定")])],1)])],1)},s=[],o=(n("99af"),n("4de4"),n("c975"),n("a4342"),n("b0c0"),{name:"DepMana",data:function(){return{filterText:"",deps:[],defaultProps:{children:"children",label:"name"},dialogVisible:!1,dep:{name:"",parentId:-1},pname:"",loading:!1}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},mounted:function(){this.initDeps()},methods:{initDeps:function(){var e=this;this.loading=!0,this.getRequest("/system/basic/department/").then((function(t){e.loading=!1,t&&(e.deps=t)}))},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},showAddDepView:function(e){this.pname=e.name,this.dep.parentId=e.id,this.dialogVisible=!0},removeDepFromDeps:function(e,t){for(var n=0;n<e.length;n++){var i=e[n];if(i.id==t)return void e.splice(n,1);this.removeDepFromDeps(i.children,t)}},deleteDep:function(e){var t=this;e.parent?this.$message.error("父部门删除失败"):this.$confirm("此操作将永久删除【"+e.name+"】, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteRequest("/system/basic/department/"+e.id).then((function(n){n&&t.removeDepFromDeps(t.deps,e.id)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},addDep2Deps:function(e,t){for(var n=0;n<e.length;n++){var i=e[n];if(i.id==t.parentId)return void(i.children=i.children.concat(t));this.addDep2Deps(i.children,t)}},doAddDep:function(){var e=this;this.postRequest("/system/basic/department/",this.dep).then((function(t){t&&(e.addDep2Deps(e.deps,t.obj),e.dep={name:"",parentId:-1},e.pname="")})),this.dialogVisible=!1}}}),r=o,c=(n("69f6"),n("2877")),d=Object(c["a"])(r,a,s,!1,null,null,null),u=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 奖惩规则 ")])},m=[],f={name:"EcMAna"},h=f,v=Object(c["a"])(h,p,m,!1,null,"21ed6e81",null),g=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("el-input",{staticStyle:{width:"300px"},attrs:{size:"small",placeholder:"添加职称...","prefix-icon":"el-icon-plus"},model:{value:e.jl.name,callback:function(t){e.$set(e.jl,"name",t)},expression:"jl.name"}}),n("el-select",{staticStyle:{"margin-left":"5px","margin-right":"5px"},attrs:{size:"small",placeholder:"职称等级"},model:{value:e.jl.titleLevel,callback:function(t){e.$set(e.jl,"titleLevel",t)},expression:"jl.titleLevel"}},e._l(e.titleLevels,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1),n("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:e.addJobLevel}},[e._v("添加")])],1),n("div",{staticStyle:{"margin-top":"10px"}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"80%"},attrs:{"element-loading-text":"正在加载...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0.8)",size:"small",data:e.jls,stripe:"",border:""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{prop:"id",label:"编号",width:"60"}}),n("el-table-column",{attrs:{prop:"name",label:"职位名称",width:"180"}}),n("el-table-column",{attrs:{prop:"titleLevel",label:"职位级别",width:"180"}}),n("el-table-column",{attrs:{prop:"createDate",label:"创建时间"}}),n("el-table-column",{attrs:{label:"是否启用"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.enabled?n("el-tag",{attrs:{type:"success"}},[e._v("已启用")]):n("el-tag",{attrs:{type:"danger"}},[e._v("未启用")])]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.showEditView(t.$index,t.row)}}},[e._v("编辑 ")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除 ")])]}}])})],1),n("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"danger",size:"small",disabled:0==e.multipleSelection.length},on:{click:e.deleteMany}},[e._v(" 批量删除 ")])],1),n("el-dialog",{attrs:{title:"更新职称",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",[n("table",[n("tr",[n("td",[n("el-tag",[e._v("职称名")])],1),n("td",[n("el-input",{attrs:{size:"small"},model:{value:e.updateJl.name,callback:function(t){e.$set(e.updateJl,"name",t)},expression:"updateJl.name"}})],1)]),n("tr",[n("td",[n("el-tag",[e._v("职称级别")])],1),n("td",[n("el-select",{staticStyle:{"margin-left":"5px","margin-right":"5px"},attrs:{size:"small",placeholder:"职称等级"},model:{value:e.updateJl.titleLevel,callback:function(t){e.$set(e.updateJl,"titleLevel",t)},expression:"updateJl.titleLevel"}},e._l(e.titleLevels,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)]),n("tr",[n("td",[n("el-tag",[e._v("是否启用")])],1),n("td",[n("el-switch",{attrs:{"active-text":"启用","inactive-text":"禁用"},model:{value:e.updateJl.enabled,callback:function(t){e.$set(e.updateJl,"enabled",t)},expression:"updateJl.enabled"}})],1)])])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.doUpdate}},[e._v("确 定")])],1)])],1)},y=[],x=(n("4160"),n("159b"),{name:"JobLevelMana",data:function(){return{jl:{name:"",titleLevel:""},titleLevels:["正高级","副高级","中级","初级","员级"],jls:[],dialogVisible:!1,updateJl:{name:"",titleLevel:"",enabled:!1},multipleSelection:[],loading:!1}},mounted:function(){this.initJls()},methods:{initJls:function(){var e=this;this.loading=!0,this.getRequest("/system/basic/joblevel/").then((function(t){e.loading=!1,t&&(e.jls=t)}))},addJobLevel:function(){var e=this;this.jl.name&&this.jl.titleLevel?this.postRequest("/system/basic/joblevel/",this.jl).then((function(t){t&&(e.initJls(),e.jl.name="",e.jl.titleLevel="")})):this.$message.error("添加字段不可以为空!")},handleDelete:function(e,t){var n=this;this.$confirm("此操作将永久删除【"+t.name+"】职称, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.deleteRequest("/system/basic/joblevel/"+t.id).then((function(e){e&&n.initJls()}))})).catch((function(){n.$message({type:"info",message:"已取消删除"})}))},showEditView:function(e,t){Object.assign(this.updateJl,t),this.dialogVisible=!0},doUpdate:function(){var e=this;this.updateJl.name?this.putRequest("/system/basic/joblevel/",this.updateJl).then((function(t){t&&(e.initJls(),e.dialogVisible=!1)})):this.$message.error("职位名称不可以为空!")},handleSelectionChange:function(e){this.multipleSelection=e},deleteMany:function(){var e=this;this.$confirm("此操作将永久删除【"+this.multipleSelection.length+"】条记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t="?";e.multipleSelection.forEach((function(e){t+="ids="+e.id+"&"})),e.deleteRequest("/system/basic/joblevel/"+t).then((function(t){t&&e.initJls()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}}),_=x,k=Object(c["a"])(_,b,y,!1,null,"7060f9e4",null),w=k.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"permissManaTool"},[n("el-input",{attrs:{size:"small",placeholder:"请输入角色英文名"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}},[n("template",{slot:"prepend"},[e._v("Role_")])],2),n("el-input",{attrs:{size:"small",placeholder:"请输入角色中文名"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doAddRole(t)}},model:{value:e.role.nameZh,callback:function(t){e.$set(e.role,"nameZh",t)},expression:"role.nameZh"}}),n("el-button",{attrs:{icon:"el-icon-plus",size:"small",type:"primary"},on:{click:e.doAddRole}},[e._v("添加角色")])],1),n("div",{staticClass:"permissManaMain"},[n("el-collapse",{attrs:{accordion:""},on:{change:e.change},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.roles,(function(t,i){return n("el-collapse-item",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],key:i,attrs:{"element-loading-text":"正在加载...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0.8)",title:t.nameZh,name:t.id}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("可访问的资源")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0",color:"#ff3631"},attrs:{icon:"el-icon-delete-solid",type:"text"},on:{click:function(n){return e.deleteRole(t)}}})],1),n("div",[n("el-tree",{key:i,ref:"tree",refInFor:!0,attrs:{"show-checkbox":"","node-key":"id","default-checked-keys":e.selectedMenus,data:e.allmenus,props:e.defaultProps}})],1),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("el-button",{attrs:{size:"mini"},on:{click:e.cancelUpdate}},[e._v("取消修改")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.doUpdate(t.id,i)}}},[e._v("确认修改")])],1)])],1)})),1)],1)])},$=[],R={name:"PermissMana",data:function(){return{role:{name:"",nameZh:""},roles:[],allmenus:[],defaultProps:{children:"children",label:"name"},selectedMenus:[],activeName:-1,loading:!1}},mounted:function(){this.initRoles()},methods:{initRoles:function(){var e=this;this.loading=!0,this.getRequest("/system/basic/permiss/").then((function(t){e.loading=!1,t&&(e.roles=t)}))},change:function(e){e&&(this.initMenus(),this.initSelectedMenus(e))},initMenus:function(){var e=this;this.getRequest("/system/basic/permiss/menus").then((function(t){t&&(e.allmenus=t)}))},initSelectedMenus:function(e){var t=this;this.getRequest("/system/basic/permiss/mids/"+e).then((function(e){e&&(t.selectedMenus=e)}))},doAddRole:function(){var e=this;this.role.name&&this.role.nameZh?this.postRequest("/system/basic/permiss/role",this.role).then((function(t){t&&(e.role.name="",e.role.nameZh="",e.initRoles())})):this.$message.error("添加字段不可以为空!")},doUpdate:function(e,t){var n=this,i=this.$refs.tree[t],l=i.getCheckedKeys(!0),a="/system/basic/permiss/?rid="+e;l.forEach((function(e){a+="&mids="+e})),this.putRequest(a).then((function(e){e&&(n.activeName=-1,n.initRoles())}))},cancelUpdate:function(){this.activeName=-1,this.$message("已取消修改")},deleteRole:function(e){var t=this;console.log("length>>"+this.selectedMenus.length),0==this.selectedMenus.length?this.$confirm("此操作将永久删除【"+e.nameZh+"】角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteRequest("/system/basic/permiss/role/"+e.id).then((function(e){e&&t.initRoles()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})})):this.$message("删除当前角色前，请先修改其可访问资源为空")}}},j=R,P=(n("c06a"),Object(c["a"])(j,S,$,!1,null,null,null)),M=P.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("el-input",{staticClass:"addPosInput",attrs:{size:"small",placeholder:"添加职位...","prefix-icon":"el-icon-plus"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addPosition(t)}},model:{value:e.pos.name,callback:function(t){e.$set(e.pos,"name",t)},expression:"pos.name"}}),n("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:e.addPosition}},[e._v("添加")])],1),n("div",{staticClass:"posManaTable"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"70%"},attrs:{"element-loading-text":"正在加载...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0.8)",size:"small",data:e.positions,stripe:"",border:""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{prop:"id",label:"编号",width:"70"}}),n("el-table-column",{attrs:{prop:"name",label:"职位名称",width:"200"}}),n("el-table-column",{attrs:{prop:"createDate",label:"创建时间"}}),n("el-table-column",{attrs:{label:"是否启用"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.enabled?n("el-tag",{attrs:{type:"success"}},[e._v("已启用")]):n("el-tag",{attrs:{type:"danger"}},[e._v("未启用")])]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.showEditView(t.$index,t.row)}}},[e._v("编辑 ")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除 ")])]}}])})],1),n("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"danger",size:"small",disabled:0==e.multipleSelection.length},on:{click:e.deleteMany}},[e._v("批量删除 ")])],1),n("el-dialog",{attrs:{title:"更新职位",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",[n("div",[n("el-tag",[e._v("职位名称")]),n("el-input",{staticClass:"updatePosInput",attrs:{size:"small"},model:{value:e.updatePos.name,callback:function(t){e.$set(e.updatePos,"name",t)},expression:"updatePos.name"}})],1),n("div",[n("el-tag",[e._v("是否启用")]),n("el-switch",{staticStyle:{"margin-top":"10px","margin-left":"10px"},attrs:{"active-text":"启用","inactive-text":"禁用"},model:{value:e.updatePos.enabled,callback:function(t){e.$set(e.updatePos,"enabled",t)},expression:"updatePos.enabled"}})],1)]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.doUpdate}},[e._v("确 定")])],1)])],1)},C=[],D={name:"PosMana",data:function(){return{pos:{name:""},dialogVisible:!1,updatePos:{name:"",enabled:!1},positions:[],multipleSelection:[],loading:!1}},mounted:function(){this.initPositions()},methods:{initPositions:function(){var e=this;this.loading=!0,this.getRequest("/system/basic/pos/").then((function(t){e.loading=!1,t&&(e.positions=t)}))},handleSelectionChange:function(e){this.multipleSelection=e},addPosition:function(){var e=this;this.pos.name?this.postRequest("/system/basic/pos/",this.pos).then((function(t){t&&(e.initPositions(),e.pos.name="")})):this.$message.error("职位名称不能为空!")},showEditView:function(e,t){this.dialogVisible=!0,Object.assign(this.updatePos,t)},doUpdate:function(){var e=this;this.updatePos.name?this.putRequest("/system/basic/pos/",this.updatePos).then((function(t){t&&(e.initPositions(),e.updatePos.name="",e.dialogVisible=!1)})):this.$message.error("职位名称不能为空!")},handleDelete:function(e,t){var n=this;this.$confirm("此操作将永久删除【"+t.name+"】职位, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.deleteRequest("/system/basic/pos/"+t.id).then((function(e){e&&n.initPositions()}))})).catch((function(){n.$message({type:"info",message:"已取消删除"})}))},deleteMany:function(){var e=this;this.$confirm("此操作将永久删除【"+this.multipleSelection.length+"】条记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t="?";e.multipleSelection.forEach((function(e){t+="ids="+e.id+"&"})),e.deleteRequest("/system/basic/pos/"+t).then((function(t){t&&e.initPositions()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},E=D,O=(n("d1a9"),Object(c["a"])(E,z,C,!1,null,null,null)),J=O.exports,q={name:"SysBasic",data:function(){return{activeName:"depmana"}},components:{DepMana:u,PosMana:J,JobLevelMana:w,EcMana:g,PermissMana:M}},V=q,T=Object(c["a"])(V,i,l,!1,null,"17844360",null);t["default"]=T.exports},92632:function(e,t,n){},a4342:function(e,t,n){"use strict";var i=n("23e7"),l=n("23cb"),a=n("a691"),s=n("50c4"),o=n("7b0b"),r=n("65f0"),c=n("8418"),d=n("1dde"),u=n("ae40"),p=d("splice"),m=u("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p||!m},{splice:function(e,t){var n,i,d,u,p,m,b=o(this),y=s(b.length),x=l(e,y),_=arguments.length;if(0===_?n=i=0:1===_?(n=0,i=y-x):(n=_-2,i=h(f(a(t),0),y-x)),y+n-i>v)throw TypeError(g);for(d=r(b,i),u=0;u<i;u++)p=x+u,p in b&&c(d,u,b[p]);if(d.length=i,n<i){for(u=x;u<y-i;u++)p=u+i,m=u+n,p in b?b[m]=b[p]:delete b[m];for(u=y;u>y-i+n;u--)delete b[u-1]}else if(n>i)for(u=y-i;u>x;u--)p=u+i-1,m=u+n-1,p in b?b[m]=b[p]:delete b[m];for(u=0;u<n;u++)b[u+x]=arguments[u+2];return b.length=y-i+n,d}})},a73a:function(e,t,n){"use strict";var i=n("e574"),l=n.n(i);l.a},c06a:function(e,t,n){"use strict";var i=n("890c"),l=n.n(i);l.a},c975:function(e,t,n){"use strict";var i=n("23e7"),l=n("4d64").indexOf,a=n("a640"),s=n("ae40"),o=[].indexOf,r=!!o&&1/[1].indexOf(1,-0)<0,c=a("indexOf"),d=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:r||!c||!d},{indexOf:function(e){return r?o.apply(this,arguments)||0:l(this,e,arguments.length>1?arguments[1]:void 0)}})},cf53:function(e,t,n){},d1a9:function(e,t,n){"use strict";var i=n("cf53"),l=n.n(i);l.a},d1e3:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 备份恢复数据库 ")])},l=[],a={name:"SysData"},s=a,o=n("2877"),r=Object(o["a"])(s,i,l,!1,null,"378fd116",null);t["default"]=r.exports},e574:function(e,t,n){}}]);
//# sourceMappingURL=chunk-4627284a.322ec505.js.map