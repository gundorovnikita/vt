<template>
	<div id="app">
		<h1>Posts</h1>
		<Loader v-if="loader"/>
		<button @click = "filter = 'all'">
			all
		</button>
		<button @click = "filter = 'some'">
			some
		</button>
		<div v-if="filter==='some'">
			<button @click = "change(-1)">
				-
			</button>
			<button @click = "change(1)">
				+
			</button>
		</div>
		{{position}}
		{{filter}}
		<transition name="anim" mode="out-in">
			<div v-if="filter==='all'" key="key1">
				<div class="content"  v-for="post in posts" :key="post.id">
					{{post.title}}
				</div>
			</div>
		

			<div v-if="filter==='some'" key="key2">
				<div class="content"  v-for="post in somePosts" :key="post.id">
					{{post.title}}
				</div>
			</div>
		</transition>

		
	</div>
</template>

<script>
import Loader from '@/components/Loader'
export default{
	data(){
		return{
			posts:[],
			loader:true,
			filter:'all',
			position:1,
		}
	},
	components:{
		Loader,
	},
	async mounted(){
		const data = await fetch('https://jsonplaceholder.typicode.com/posts')
		const json = await data.json()
		this.posts = json
		this.loader = false
	},
	computed:{
		somePosts(){
			return this.posts.filter(e=>e.userId===this.position)
		},
	},
	methods:{
		change(prop){
			this.position=prop+this.position
			if(this.position<=0){
				this.position=10
			}
			if(this.position>10){
				this.position=1
			}
		}
	}
}
</script>


<style scoped>

  .anim-enter-active{
    animation:coming 1s;
    animation-delay: .5s;
    opacity: 0;

  }
  .anim-leave-active{
    animation: going 1s;
  }

  @keyframes going {
    from{
      transform: translateX(0);
    }
    to{
      transform: translateX(-50px);
      opacity: 0;
    }
  }

  @keyframes coming {
    from{
      transform: translateX(-50px);
    }
    to{
      transform: translateX(0);
      opacity: 1;
    }
  }

</style>