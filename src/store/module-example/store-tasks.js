import Vue from "vue"
import { uid,Notify} from 'quasar'
import {firebaseDb,firebaseAuth} from "boot/firebase.js"
import {showErrorMessage} from "src/functions/function-error-message"

const state={
  tasks:{
    // 'ID1':{name: "Go to shop", completed: false, duedate:"2020/05/15", duetime:"18:30"},
    // 'ID2':{name: "Get bananas", completed: false, duedate:"2020/05/30", duetime:"19:30"},
    // 'ID3':{name: "Get apples", completed: true, duedate:"2020/05/20", duetime:"20:30"},
    // 'ID4':{name: "Go to shop", completed: false, duedate:"2020/05/15", duetime:"18:30"},
    // 'ID5':{name: "Get bananas", completed: false, duedate:"2020/05/30", duetime:"19:30"},
    // 'ID6':{name: "Get apples", completed: true, duedate:"2020/05/20", duetime:"20:30"},
    // 'ID7':{name: "Go to shop", completed: false, duedate:"2020/05/15", duetime:"18:30"},
    // 'ID8':{name: "Get bananas", completed: false, duedate:"2020/05/30", duetime:"19:30"},
    // 'ID9':{name: "Get apples", completed: true, duedate:"2020/05/20", duetime:"20:30"},
    // 'ID10':{name: "Go to shop", completed: false, duedate:"2020/05/15", duetime:"18:30"},
    // 'ID11':{name: "Get bananas", completed: false, duedate:"2020/05/30", duetime:"19:30"},
    // 'ID12':{name: "Get apples", completed: false, duedate:"2020/05/20", duetime:"20:30"},
    // 'ID13':{name: "Get apples", completed: false, duedate:"2020/05/20", duetime:"20:30"},
    // 'ID14':{name: "Get apples", completed: false, duedate:"2020/05/20", duetime:"20:30"},
    // 'ID15':{name: "Get apples", completed: false, duedate:"2020/05/20", duetime:"20:30"},
  },
  search:"",

  sort:"name",
  taskDownload:false

  /*tasks: [
    { id: 1, name: "Go to shop", completed: false, duedate:"2020/05/15", duetime:"18:30" },
    { id: 2, name: "Get bananas", completed: false, duedate:"2020/05/18", duetime:"19:30" },
    { id: 3, name: "Get apples", completed: true, duedate:"2020/05/20", duetime:"20:30" },
  ]*/

}
const getters={
  tasksorted:(state)=>{
    let tasksorted={}
    let keysordered=Object.keys(state.tasks)
      keysordered.sort((a,b)=>{
      let taskAname=state.tasks[a][state.sort].toLowerCase()
      let taskBname=state.tasks[b][state.sort].toLowerCase()
      if (taskAname>taskBname) return 1
      else if(taskBname>taskAname) return -1
      else return 0
    }
    )
   // console.log("keysordered:",keysordered)
     keysordered.forEach((ID)=>{
     tasksorted[ID]=state.tasks[ID]
   })
    console.log("tasksorted:",tasksorted)

    return tasksorted
  },


  taskFilter:(state,getters)=>{
    let taskSorted=getters.tasksorted
    let taskFilter={}
    if(state.search){
      Object.keys(taskSorted).forEach((ID)=>
      {
        let task=taskSorted[ID]
        let taskNameLowercase=task.name.toLowerCase()
        let searchLowercase=state.search.toLowerCase()
        if(taskNameLowercase.includes(searchLowercase)){
          taskFilter[ID]=task
        }
      })
      return taskFilter
    }
    return taskSorted

  },
  taskstodo:(state,getters)=>{
    let taskFiltered=getters.taskFilter
     let tasks={}
    Object.keys(taskFiltered).forEach((ID)=>{
      let task=taskFiltered[ID]
      console.log("getters// taskstodo:",task)
      if(!task.completed){
        tasks[ID]=task
      }
    })
    return tasks},

    taskscompleted:(state,getters)=>{
      let taskFiltered=getters.taskFilter
      let tasks={}
     Object.keys(taskFiltered).forEach((ID)=>{
       let task=taskFiltered[ID]
       if(task.completed){
         tasks[ID]=task
       }
     })
     return tasks},

  }


const mutations={
  updatetask(state,payload){
    console.log("payload from mutation:",payload)
    //Object.assign
    Object.assign(state.tasks[payload.id],payload.update)
    //Object.assign
    console.log("state.tasks[payload.id]",state.tasks[payload.id])
    //console.log("ID:updatetask",payload.id)

  },
  deletetask(state,id){
    console.log("deletetask id (mutation):",id)
    // delete state.tasks[id]
    Vue.delete(state.tasks,id)
  },
  addtask(state,payload){
    console.log("addtask (mutation) ID:",payload.ID)
    Vue.set(state.tasks,payload.ID,payload.task)
  },
  //clear Task
  clearTask(state){
   state.tasks={}
  },


  setSearch(state,value){
    state.search= value
  },
  setsort(state,value){
    state.sort= value
  },
  setTaskDownload(state,value){
    state.taskDownload=value
  }



}
const actions={
  updatetask({dispatch},payload){
    //console.log("updatetask action")
    //console.log("payload from actions",payload)
    dispatch("fbUpdateTask",payload)
  },

  deletetask({dispatch},ID){
    dispatch("fbDeleteTask",ID)
  },


  addtask({dispatch},task){
    let taskId=uid()
    let payload={
      ID:taskId,
      task:task
    }
    //dispatch
    dispatch("fbAddTask",payload)
  },


  setSearch({commit},value){
    commit("setSearch",value)
  },


  setsort({commit},value){
    commit("setsort",value)
  },


  fbReadData({commit}){
    console.log("start reading data from firebase(action)")
    //console.log(firebaseAuth.currentUser.uid)
    let userId=firebaseAuth.currentUser.uid
    let userTasks=firebaseDb.ref(`tasks/${userId}`)
    console.log("userTasks:",userTasks)
    console.log("userID:",userId)


    //initial check for data
    userTasks.once("value",(snapshot)=>
    {commit("setTaskDownload",true)
    console.log("snapshot:",snapshot.key)}
    )

    //child Added(event)==>from Firebase
    userTasks.on('child_added',(snapshot)=>{
     /*console.log("snapshot:",snapshot)
      let task=snapshot.val()
      console.log('task:',task)*/
      let payload={
        ID:snapshot.key,
        task:snapshot.val()
      }
      commit("addtask",payload)
    })


    //child Changed(event)
    userTasks.on('child_changed',(snapshot)=>{
      let payload={
        id:snapshot.key,
        update:snapshot.val()
      }
      commit("updatetask",payload)
    })



    //child Removed(event)
    userTasks.on('child_removed',(snapshot)=>{
      let id=snapshot.key
      commit("deletetask",id)
    })

  },

  fbAddTask({},payload){
    console.log('fbAddTask payload:',payload)
    let userId=firebaseAuth.currentUser.uid
    let taskRef=firebaseDb.ref(`tasks/${userId}/${payload.ID}`)
    taskRef.set(payload.task,(error)=>{
      if(error){
        showErrorMessage(error.message)
      }
      else{
        Notify.create({
          message: 'Task Added !',
          icon: 'announcement',
          color:"light-blue-10",
          progress: true
        },500)
      }
    } )
  },



  fbUpdateTask({},payload){
    console.log('fbUpdateTask payload:',payload)
    let userId=firebaseAuth.currentUser.uid
    let taskRef=firebaseDb.ref(`tasks/${userId}/${payload.id}`)
    taskRef.update(payload.update,(error)=>{
      if(error){
        showErrorMessage(error.message)
      }
      else{
        let key=Object.keys(payload.update)
        console.log("key(notification):",key)
        if(!(key.length==1 && key.includes("completed")))
        Notify.create({
          message: 'Task Update !',
          icon: 'announcement',
          color:"light-blue-10",
          progress: true
        },100)
      }
    })
  },




  fbDeleteTask({},ID){
    console.log('fbDeleteTask ID:',ID)
    let userId=firebaseAuth.currentUser.uid
    let taskRef=firebaseDb.ref(`tasks/${userId}/${ID}`)
    taskRef.remove((error)=>{
      if(error){
        showErrorMessage(error.message)
      }
      else{
        Notify.create({
          message: 'Task Deleted !',
          icon: 'announcement',
          color:"pink-13",
          progress: true,
        },100)
      }
    })


  }



}

export default {
  namespaced:true,
  getters,
  mutations,
  actions,
  state
}
