export default{
  methods:{
    submitform() {
      console.log( "validate",this.$refs.modalTaskname.$refs.name.validate());
      //this.$refs.modalTaskname.$refs.name.validate()
      console.log("ref:",this.$refs.modalTaskname.$refs.name);
      if (!this.$refs.modalTaskname.$refs.name.hasError ) {
        this.submittask();
      }
    }
  },
  components:{
    modalHeader:require('src/components/tasks/modal/shared/modalHeader.vue').default,
    modalTaskname:require('src/components/tasks/modal/shared/modalTaskName.vue').default,
    modalDuedate:require('src/components/tasks/modal/shared/modalDuedate.vue').default,
    modalDuetime:require('src/components/tasks/modal/shared/modalDuetime.vue').default,
    modalButton:require('src/components/tasks/modal/shared/modalButton.vue').default,

  },


}
