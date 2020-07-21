import fireApp from '@/plugins/firebase'

export const state = () => ({
    // user: null,
    // counter: 0
    user: null,
    error: null,
    busy: false,
    jobDone: false
})

export const mutations = {
    // setCounter(state, payload) {
    //     state.counter = state.counter + payload
    // }
    setError (state, payload) {
        state.error = payload
    },
    clearError (state, payload) {
        state.error = null
    },
    setBusy (state, payload) {
        state.busy = payload
    },
    setJobDone (state, payload) {
        state.jobDone = payload
    },
}

export const actions = {
    // increment ({commit}, payload) {
    //     commit('setCounter', payload)
    // }

    fireTest () {
        const payload = {
            one: 'Apple',
            two: 'Oranges'
        }
        fireApp.database().ref('testdb').push(payload)
        .then(() => {
            console.log("success")
        })
        .catch(error => {
            console.log("error", error)
        })
    }
}

export const getters = {
    // counter (state) {
    //     return state.counter
    // }
    error (state) {
        return state.error
    },
    busy (state) {
        return state.busy
    },
    jobDone (state) {
        return state.jobDone
    }
}