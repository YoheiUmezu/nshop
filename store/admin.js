import fireApp from '@/plugins/firebase'

export const state = () => ({
    groups: []
})

export const mutations = {
    loadGroups (state, payload) {
        state.groups.push(payload)
    }
}

export const actions = {
    createGroup ({commit}, payload) {
        commit('setBusy', true, {root: true}),
        commit('clearError', null, {root: true})

        fireApp.database().ref('groups').push(payload)
        .then(() => {
            commit('setBusy', false, {root: true})
            commit('setJobDone', true, {root: true})
            // const error = { message: 'An error occured.!' }
            // commit('setError', error, {root: true})
        })
        .catch(error => {
            commit('setBusy', false, {root: true}),
            commit('setError', error, {root: true})
        })
    },
    getGroups ({commit}) {//表示する
        fireApp.database().ref('groups').on('child_added',
            snapshot => {
                let item = snapshot.val()
                item.key = snapshot.key
                commit('loadGroups', item)
            }
        )
    }
}

export const getters = {
    groups (state) {
        return state.groups
    }
}