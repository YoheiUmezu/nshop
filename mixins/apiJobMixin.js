export default {
    methods: {
    removeErrors () {
        this.$validator.reset()
        this.$store.commit('clearError')
        }
    },
    computed: {
        error () {
          return this.$store.getters.error
        },
        busy () {
          return this.$store.getters.busy
        },
        jobDone () {
          return this.$store.getters.jobDone
        },
      },
      watch: {
        jobDone(value) {
          if(value) {
            this.$store.commit('setJobDone', false)
            this.jobsDone
            this.name=""
            this.$router.replace('/')
            //this.$router.go({path: '/', force: true})
          }
        }
      }
}