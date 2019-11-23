import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import Home from './views/Home'
import Posts from './views/Posts'
import Users from './views/Users'



Vue.use(Router)
Vue.use(Vuex)
Vue.config.productionTip = false


const router = new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			name:'home',
			component:Home
		},
		{
			path:'/posts',
			name:'posts',
			component:Posts
		},
		{
			path:'/users',
			name:'users',
			component:Users
		}
	]
});


const users = {
	actions:{
		async fetchUsers(ctx){
			const data = await fetch('https://jsonplaceholder.typicode.com/users')
			const json = await data.json()

			ctx.commit('updateUsers',json)
		}
	},
	mutations:{
		updateUsers(state,users){
			state.users=users
		}
	},
	state:{
		users:[]
	},
	getters:{
		getUsers:(state)=>state.users
	}
}



const store = new Vuex.Store({
	modules:{
		users
	}
});



new Vue({
	router,
	
  render: h => h(App),
  store,
}).$mount('#app')
