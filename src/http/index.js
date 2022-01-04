import Vue from 'vue'
import VueResource from 'vue-resource'
import services from '../store/services'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'https://djbnrrib9e.execute-api.us-east-2.amazonaws.com/v1/'

//set token to all headers
const headerToken = token => {
    http.headers.common['Autorization'] = `Bearer ${token}`
}

Object.keys(services).map(service =>{
    services[service] = Vue.resource('',{},services[service])
})

export {http, headerToken}
export default services