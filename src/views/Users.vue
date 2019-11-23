<template>
	<div id="app">	
		<h1>Users</h1>
		<Loader v-if="!getUsers.length"/>
		<div class="content" v-for="user in getUsers" :key="user.id">
			{{user.name}}
		</div>
	</div>	
</template>

<script>
import Loader from '@/components/Loader'
import {mapGetters,mapActions} from 'vuex'

export default{
	components:{
		Loader
	},
	computed:mapGetters(["getUsers"]),
	methods:mapActions(['fetchUsers']),
	async mounted(){
        this.fetchUsers();
	}	
}
</script>