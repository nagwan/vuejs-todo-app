<template>
  <div class="toDo">
    <div class="container">

     <a class="button is-outlined btnMain" @click='showNewTaskForm'>Add Task</a>

      <div class="field card" v-show='creatNewTask'>

        <!-- task title input field -->
  		  <label class="label">Task Title</label>
  		  <div class="control">
  		    <input class="input" type="text" v-model='newTaskTitle' required>
  		  </div>

        <!-- task description input field -->
  		  <label class="label">Task Description</label>
  		  <div class="control">
  		    <textarea class="textarea" v-model='newTaskDescription' @keyup.13='addNewTask' required></textarea>
  		  </div>

        <input type="datetime-local" v-model='taskTimer'/>
        <a class="button is-danger is-outlined btn" @click='cancelNewTask'>Cancel</a>
        <a class="button is-success is-outlined btn" @click='addNewTask'>Create</a>
	    </div>

    </div>
  </div>
</template>

<script>

let storageKey = 'toDoAppStorage'

export default {

  props: ['toDo'],

  data(){
  	return {

      newTaskTitle: '',

      newTaskDescription: '',

      taskTimer: '',

      creatNewTask: false,

      done:false,
  	}
  },

  methods:{
    showNewTaskForm(){
      this.creatNewTask = true
    },

    cancelNewTask(){
      this.creatNewTask = false
      this.newTaskTitle = '',
      this.newTaskDescription = '',
      this.taskTimer = ''
    },

    addNewTask(){
        let title = this.newTaskTitle
        let description = this.newTaskDescription
        let timer = this.taskTimer

      if (this.newTaskTitle.length > 0 && this.newTaskDescription.length > 0 ){

          this.setTaskAlarm()

          this.$emit('add-newTask', title, description, timer)

          this.newTaskTitle = ''
          this.newTaskDescription = ''
          this.taskTimer = ''
      }

      this.creatNewTask = false

    },
     setTaskAlarm(){

      // to get the time and date of a task

       let userAlarmInput = new Date(this.taskTimer);

      // count every 1 sec

      let countDown = setInterval(() => {

        let getTheCurrentDateAndTime = new Date()

        let distanceCountFromTo = userAlarmInput - getTheCurrentDateAndTime

      // calculate time

      let days = Math.floor(distanceCountFromTo / (1000 * 60 * 60 * 24))
      let hours = Math.floor((distanceCountFromTo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((distanceCountFromTo % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distanceCountFromTo % (1000 * 60)) / 1000)

    // if count is done

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {

          clearInterval(countDown)
          console.log('it`s time for ur task')
          this.playAlarmTone()
        }

      },1000)
      this.$emit('updateLocalStorage')
        },

     playAlarmTone(){
      let alarmTone = new Audio(require('./alarm.mp3'))
      alarmTone.play()
     }
  }

}
</script>

<style lang='sass' scoped>
@import '../mediaQuery'

.card
  width: 25%
  margin: auto

.btn
  width: 49%

</style>
