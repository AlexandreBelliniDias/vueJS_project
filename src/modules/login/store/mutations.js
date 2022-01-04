import * as types from './mutation-types'

export default {
    [types.set_user](state,payload){
        state.user = payload
    },
    [types.set_token](state,payload){
        state.token = payload
    }
}