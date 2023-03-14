<template>
  <div id="toDo">
    <div class="container">

      <!-- task card on the defult mode -->

      <div class="card list-group" v-show='!isEditing'>

              <!-- card`s header -->
        <header class="card-header">
          <p class="card-header-title">
                  {{toDo.title}}
          </p>
    			<span @click='showEditForm' class="editIcon">
    				<i class="fa fa-edit"></i>
    			</span>
        </header>

              <!-- card`s content -->
        <div class="card-content">
          <div class="content">
            {{toDo.description}}        
          </div>
          <span @click='deletTask' class="trashIcon">
            <i class="fa fa-trash"></i>
          </span>     
        </div>

              <!-- card`s footer -->
        <footer class="card-footer">
          <a class="button is-success is-outlined btn" v-show = "toDo.done" @click='theTaskIncompleted'>Completed</a>
          <a class="button is-danger is-outlined btn"  v-show = "!toDo.done" @click='theTaskDone'>Incompleted</a>    
        </footer>
      </div>

       <!--  task card on the editing mode -->

      <div class="field card" v-show='isEditing'>

             <!-- task title edit field -->
        <label class="label">Task Title</label>
        <div class="control">
          <input class="input" type="text" v-model='toDo.title' required>
        </div>

              <!-- task description edit field -->
        <label class="label">Task Description</label>
        <div class="control">
          <textarea class="textarea" v-model='toDo.description' required></textarea>
        </div>

        <input type="datetime-local" v-model='toDo.timer'/>

        <a class="button is-danger is-outlined btn" @click='hideEditForm'>Save</a>
     </div>

    </div>
  </div>
</template>

<script>

export default {
  
  props: ['toDo','todoKey'],

   
  data(){
  	return{
      isEditing: false,
    }
  }, 

  methods:{

     showEditForm(){
  	 	this.isEditing = true
  	 },

  	 hideEditForm(){
  	 	this.isEditing = false
      this.$emit('updateLocalStorage')
  	 },

     deletTask(){
      this.$emit('delet-task', this.todoKey)
     },

     theTaskIncompleted(){
      this.toDo.done = false
      this.$emit('updateLocalStorage')
     },

    theTaskDone(){
      this.toDo.done = true
      this.$emit('updateLocalStorage')
    },
  }
}
</script>

<style lang='sass' scoped>
@import '../mediaQuery'


.card 
  width: 25%
  margin: auto

.btn
  width: 100%

.editIcon
  margin-top: 12px
  margin-right: 22px

.trashIcon 
  float: right

  
</style>
