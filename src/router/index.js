import Vue from 'vue'
import Router from 'vue-router'
import logIn from '@/components/logIn'
import mainComponent from '@/components/mainComponent'
import toDoList from '@/components/toDoList'
import newTask from '@/components/newTask'
import toDoTask from '@/components/toDoTask'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: logIn
    },
    {
      path: '/mainComponent',
      name: '',
      component: mainComponent
    }, 
    {
      path: '/toDoList',
      name: '',
      component: toDoList
    },
   {
      path: '/toDoTask',
      name: '',
      component: toDoTask
    }, 
    {
      path: '/newTask',
      name: '',
      component: newTask
    }, 

  ]
})
