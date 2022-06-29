import {LocalStorage} from 'quasar'
const state={
  setting:{
    show12hourFormat:true,
    showTaskinoneList:false
  }

}
const getters={
  setting:(state)=>{return state.setting.show12hourFormat},
  settingTaskList:(state)=>{return state.setting.showTaskinoneList}

  }


const mutations={
 setshow12hourFormat(state,value){
   state.setting.show12hourFormat=value
 },
 setshowTaskinoneList(state,value){
   state.setting.showTaskinoneList=value
 },
 getSetting(state,setting){
  Object.assign(state.setting,setting)
 }

}
const actions={
  //setshow12hourFormat
  setshow12hourFormat({commit,dispatch},value)
 {commit("setshow12hourFormat",value)

 dispatch("saveSetting")
},

//setshowTaskinoneLis
setshowTaskinoneList({commit,dispatch},value)
 {commit("setshowTaskinoneList",value)

 dispatch("saveSetting")
},

saveSetting({state}){
LocalStorage.set("settings",state.setting)
},

 getSetting({commit}){

 let setting=LocalStorage.getItem("settings")
 if(setting){
    commit("getSetting",setting)
   console.log("getsettings(action):",setting)
 }
}

}

export default {
  namespaced:true,
  getters,
  mutations,
  actions,
  state
}
