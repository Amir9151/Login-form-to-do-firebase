<template>
  <q-page padding>
   <q-list bordered padding class="q-mb-md">

      <q-item-label header>SETTINGS</q-item-label>

      <q-item tag="label" clickable  v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="show12hourFormat"  />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show Task in one list</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="showTaskinoneList"  />
        </q-item-section>
      </q-item>
    </q-list>


   <q-list bordered padding>

      <q-item-label header>MORE</q-item-label>

      <q-item tag="label" to="/setting/help" clickable   v-ripple>
        <q-item-section>
          <q-item-label>HELP</q-item-label>
        </q-item-section>
        <q-item-section side >
         <q-icon name="chevron_right" color="primary">

         </q-icon>
        </q-item-section>

      </q-item>
      <q-item tag="label" @click="visitOurWebsite" clickable   v-ripple>
        <q-item-section>
          <q-item-label>Visit Our Website</q-item-label>
        </q-item-section>
        <q-item-section side >
         <q-icon name="chevron_right" color="primary">

         </q-icon>
        </q-item-section>
      </q-item>

      <q-item tag="label" @click="emailUs" clickable   v-ripple>
        <q-item-section>
          <q-item-label>Email Us</q-item-label>
        </q-item-section>
        <q-item-section side >
         <q-icon name="chevron_right" color="primary">

         </q-icon>
        </q-item-section>
      </q-item>

    </q-list>

  </q-page>
</template>

<script>
import{mapGetters,mapActions} from "vuex"
import { openURL } from 'quasar'
export default {
  name: 'setting',
  components:{

  },
  computed:{
    ...mapGetters("settings",["setting","settingTaskList"]),
    show12hourFormat:{
      get(){
        return this.setting
      },
      set(value){
      // trigger an action
      this.setshow12hourFormat(value)
      }
    },
    showTaskinoneList:{
      get(){
        return this.settingTaskList
      },
      set(value){
      // trigger an action
      this.setshowTaskinoneList(value)
      }
    }

  },
  methods:{
    ...mapActions("settings",["setshow12hourFormat","setshowTaskinoneList"]),
      visitOurWebsite(){
          openURL('http://google.com')
      },
      emailUs(){
        window.location.href=`mailto:amir2012hossein@yahoo.com?subject=AmirHossein`
      }
  }



}
</script>
