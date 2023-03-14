webpackJsonp([1],{"5n57":function(t,e){},Ab8v:function(t,e){},GWmL:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),o=s("mvHQ"),i=s.n(o),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toDo"},[s("div",{staticClass:"container"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],staticClass:"card list-group"},[s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title"},[t._v("\n                  "+t._s(t.toDo.title)+"\n          ")]),t._v(" "),s("span",{staticClass:"editIcon",on:{click:t.showEditForm}},[s("i",{staticClass:"fa fa-edit"})])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[t._v("\n            "+t._s(t.toDo.description)+"        \n          ")]),t._v(" "),s("span",{staticClass:"trashIcon",on:{click:t.deletTask}},[s("i",{staticClass:"fa fa-trash"})])]),t._v(" "),s("footer",{staticClass:"card-footer"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.toDo.done,expression:"toDo.done"}],staticClass:"button is-success is-outlined btn"},[t._v("Completed")]),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:!t.toDo.done,expression:"!toDo.done"}],staticClass:"button is-danger is-outlined btn"},[t._v("Incompleted")])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],staticClass:"field card"},[s("label",{staticClass:"label"},[t._v("Task Title")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.toDo.title,expression:"toDo.title"}],staticClass:"input",attrs:{type:"text",required:""},domProps:{value:t.toDo.title},on:{input:function(e){e.target.composing||t.$set(t.toDo,"title",e.target.value)}}})]),t._v(" "),s("label",{staticClass:"label"},[t._v("Task Description")]),t._v(" "),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.toDo.description,expression:"toDo.description"}],staticClass:"textarea",attrs:{required:""},domProps:{value:t.toDo.description},on:{input:function(e){e.target.composing||t.$set(t.toDo,"description",e.target.value)}}})]),t._v(" "),s("a",{staticClass:"button is-danger is-outlined btn",on:{click:t.hideEditForm}},[t._v("Save")])])])])},staticRenderFns:[]};var r=s("VU/8")({props:["toDo","todoKey"],data:function(){return{isEditing:!1}},methods:{showEditForm:function(){this.isEditing=!0},hideEditForm:function(){this.isEditing=!1,this.$emit("updateLocalStorage")},deletTask:function(){this.$emit("delet-task",this.todoKey)}}},n,!1,function(t){s("Ab8v")},"data-v-5b5966bb",null).exports,c=s("DAYN"),l={props:["toDos"],components:{toDoTask:r,draggable:s.n(c).a},computed:{completedTasks:function(){return this.toDos.filter(function(t){return t.done}).length},incompletedTasks:function(){return this.toDos.filter(function(t){return!t.done}).length}},methods:{deletTask:function(t){this.toDos.splice(t,1),this.updateLocalStorage()},updateLocalStorage:function(){localStorage.setItem("toDoAppStorage",i()(this.toDos))}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toDo"},[s("div",{staticClass:"container"},[s("p",[s("strong",[t._v("Completed Tasks")]),t._v(" : "+t._s(t.completedTasks)+" ")]),t._v(" "),s("p",[s("strong",[t._v("Incompleted Tasks")]),t._v(" : "+t._s(t.incompletedTasks)+" ")]),t._v(" "),s("br"),t._v(" "),s("draggable",{attrs:{prop:t.toDos}},t._l(t.toDos,function(e,a){return s("toDo-Task",{attrs:{todoKey:a,toDo:e},on:{updateLocalStorage:t.updateLocalStorage,"delet-task":t.deletTask}})}))],1)])},staticRenderFns:[]};var u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toDo"},[s("div",{staticClass:"container"},[s("a",{staticClass:"button is-outlined btnMain",on:{click:t.showNewTaskForm}},[t._v("Add Task")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.creatNewTask,expression:"creatNewTask"}],staticClass:"field card"},[s("label",{staticClass:"label"},[t._v("Task Title")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTaskTitle,expression:"newTaskTitle"}],staticClass:"input",attrs:{type:"text",required:""},domProps:{value:t.newTaskTitle},on:{input:function(e){e.target.composing||(t.newTaskTitle=e.target.value)}}})]),t._v(" "),s("label",{staticClass:"label"},[t._v("Task Description")]),t._v(" "),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newTaskDescription,expression:"newTaskDescription"}],staticClass:"textarea",attrs:{required:""},domProps:{value:t.newTaskDescription},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.addNewTask(e)},input:function(e){e.target.composing||(t.newTaskDescription=e.target.value)}}})]),t._v(" "),s("a",{staticClass:"button is-danger is-outlined btn",on:{click:t.cancelNewTask}},[t._v("Cancel")]),t._v(" "),s("a",{staticClass:"button is-success is-outlined btn",on:{click:t.addNewTask}},[t._v("Create")])])])])},staticRenderFns:[]};var p={name:"App",components:{toDoList:s("VU/8")(l,d,!1,function(t){s("5n57")},"data-v-49c49e28",null).exports,newTask:s("VU/8")({props:["toDo"],data:function(){return{newTaskTitle:"",newTaskDescription:"",creatNewTask:!1,done:!1}},methods:{showNewTaskForm:function(){this.creatNewTask=!0},cancelNewTask:function(){this.creatNewTask=!1,this.newTaskTitle="",this.newTaskDescription=""},addNewTask:function(){var t=this.newTaskTitle,e=this.newTaskDescription;this.newTaskTitle.length>0&&this.newTaskDescription.length>0&&(this.$emit("add-newTask",t,e),this.newTaskTitle="",this.newTaskDescription=""),this.creatNewTask=!1}}},u,!1,function(t){s("GWmL")},"data-v-059eee70",null).exports},data:function(){return{toDos:[]}},created:function(){this.toDos=JSON.parse(localStorage.getItem("toDoAppStorage")||"[]")},methods:{addNewTask:function(t,e){this.toDos.push({title:t,description:e,done:!1}),localStorage.setItem("toDoAppStorage",i()(this.toDos))},updateLocalStorage:function(){}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("toDo-List",{attrs:{toDos:this.toDos},on:{updateLocalStorage:this.updateLocalStorage}}),this._v(" "),e("br"),this._v(" "),e("new-task",{on:{"add-newTask":this.addNewTask}})],1)},staticRenderFns:[]};var m=s("VU/8")(p,v,!1,function(t){s("xSlv")},null,null).exports,h=s("n29Z"),k=s.n(h);a.a.use(k.a),a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:m},template:"<App/>"})},xSlv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.97b3e8143eeb9c419026.js.map