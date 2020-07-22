import fireApp from '@/plugins/firebase'

export const state = () => ({
    groups: []
})

export const mutations = {
    loadGroups (state, payload) {
        state.groups.push(payload)
    },
    updateGroup (state, payload) {
        const i = state.groups.indexOf(payload.group)
        state.groups[i].name = payload.name
    },
    removeGroup(state, payload) {   
        const i = state.groups.indexOf(payload.group)
        state.group.splice(i, 1)
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
    updateGroup ({commit}, payload) {
        commit('setBusy', true, {root: true}),
        commit('clearError', null, {root: true})

        fireApp.database().ref(`groups/${payload.group.key}`).update({ name: payload.name })
        .then(() => {
            commit('setBusy', false, {root: true})
            commit('setJobDone', true, {root: true})
            // const error = { message: 'An error occured.!' }
            // commit('setError', error, {root: true})
            const groupData = {
                group: payload.group,
                name: payload.name
            }
            commit('updateGroup', groupData)
        })
        .catch(error => {
            commit('setBusy', false, {root: true}),
            commit('setError', error, {root: true})
        })
    },
    removeGroup({commit}, payload) {
        fireApp.database().ref(`groups/${payload.group.key}`).remove()
            .then(() => {
                commit('removeGroup', payload)
            })
            .catch(error => {
                console.log(error)
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