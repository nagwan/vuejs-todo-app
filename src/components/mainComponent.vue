
<template>
  <div>
  	<toDo-List  :toDos='toDos' @updateLocalStorage="updateLocalStorage" >
  	</toDo-List>
    <br/>
    <new-task @add-newTask='addNewTask'></new-task>
  </div>
</template>

<script>

import toDoList from './toDoList'
import newTask from './newTask'

let storageKey = 'toDoAppStorage'

export default {
  components: {
    toDoList,
    newTask,
  },

  data (){
    return {

      toDos :[],
    }
  },

  created(){
    this.toDos = JSON.parse(localStorage.getItem(storageKey) || '[]')
  },


  methods:{

    addNewTask(title, description, timer){

      this.toDos.push({title, description, timer, done:false})

      localStorage.setItem(storageKey, JSON.stringify(this.toDos))
    },

    updateLocalStorage(){

    },
  }
}
</script>

<style lang='sass'>
@import '../mediaQuery'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

</style>
