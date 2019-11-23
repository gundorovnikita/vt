<template>
  <div id="app">
    <div class="header">
       <div class="container">
         <div class="header_button">
           <router-link :to="{name:'home'}" exact class="router-link" exact-active-class="router-link-active">home</router-link>
         </div>
         <div class="header_button">
           <router-link :to="{name:'posts'}" class="router-link" exact-active-class="router-link-active">posts</router-link>
         </div>
         <div class="header_button">
           <router-link :to="{name:'users'}" class="router-link" exact-active-class="router-link-active">users</router-link>
         </div>       
       </div>
    </div>
    <div class="main">
      <div class="container">
        <transition name="router-anim" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css';

  body{
    margin: 0;
    padding: 0;
  }
  .header{
    height: 60px;
    width: 100%;
    background-color: lightblue;
  }
  .container{
    width: 60%;
    margin: 0 auto;
  }
  .header_button{
    text-transform: uppercase;
    display: inline-block;
    margin-right: 70px;
    margin-top: 10px;
    
  }
  .router-link{
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 35px;
  }
  .router-link-active{
    color: gray;
  }

  .router-anim-enter-active{
    animation:coming 1s;
    animation-delay: .2s;
    opacity: 0;

  }
  .router-anim-leave-active{
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