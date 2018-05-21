<template>
<div class="container text-center" id="app">
  <img class="img-fluid" src="./assets/logo.png">
  <div class="row center-content">
  <div class="btn-group center-block">
  <div v-for="component in componentsArray">
    <button type="button" class="btn btn-primary" @click="swapComponent(component)">{{component}}</button>
  </div>
    </div>
  </div>
  <div :is="currentComponent"></div>
  <div v-show="!currentComponent" ></div>
</div>
<!--<button @click="swapComponent(null)">Close</button>-->
</template>

<script>
  import Hello from './components/Hello'
  import Goodbye from './components/Goodbye'
  export default {
    name: 'App',
    data () {
      return {
        currentComponent: null,
        componentsArray: ['Hello', 'Goodbye']
      }
    },
    components: {
      Hello,
      Goodbye
    },
    methods: {
      swapComponent: function(component)
      {
        this.currentComponent = component;
      }
    }
  }
</script>



<style lang="scss">
  @import './styles/custom-bootstrap.scss';
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>


<style>
  .center-content {
    justify-content:center;
  }

</style>





<!--<template>-->
  <!--<div id="app">-->
	  <!--<div class="container">-->
	  	<!--<div style="margin-top: 2rem; padding-bottom: 1rem;"><h1>Make Bootstrap Sexy Again</h1></div>-->
		<!--&lt;!&ndash; Alerts &ndash;&gt;-->
		<!--<h2>Alerts</h2>-->
		<!--<div style="padding: 1rem;">-->
			<!--<div v-for="brand in ['success', 'info', 'warning', 'danger']" class="alert" :class="'alert-' + brand">-->
	  		  <!--<strong>Well done!</strong> You successfully read this {{brand}} alert message.-->
	  	    <!--</div>-->
		<!--</div>-->
		<!--<h2>Breadcrumb</h2>-->
		<!--<div style="padding: 1rem;">-->
			<!--<ol class="breadcrumb">-->
			  <!--<li class="breadcrumb-item"><a href="#">Home</a></li>-->
			  <!--<li class="breadcrumb-item"><a href="#">Library</a></li>-->
			  <!--<li class="breadcrumb-item active">Data</li>-->
			<!--</ol>-->
		<!--</div>-->
		<!--&lt;!&ndash; Buttons&ndash;&gt;-->
		<!--<h2>Buttons</h2>-->
		<!--<div style="padding: 1rem;">-->
			  <!--<div v-for="type in ['', 'outline']" :key="type">-->
				  <!--<span v-for="brand in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']" :key="brand">-->
					  <!--<button role="button" class="btn" :class="'btn-' + (type.length ? (type + '-') : '') + brand" style="margin-bottom: 1rem; margin-right: 1rem;">-->
						  <!--{{brand}} {{type}}-->
					  <!--</button>-->
				  <!--</span>-->
			  <!--</div>-->
		<!--</div>-->
		<!--&lt;!&ndash; Progress&ndash;&gt;-->
		<!--<h2>Progress</h2>-->
		<!--<div style="padding: 1rem;">-->
		  <!--<div v-for="brand in ['success', 'info', 'warning', 'danger']" :key="brand" class="progress" style='margin-bottom: 1rem;'>-->
			  <!--<div class="progress-bar" :class="'bg-' + brand" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>-->
		  <!--</div>-->
		<!--</div>-->
		<!--&lt;!&ndash; Notice&ndash;&gt;-->
		<!--<h2>Modal</h2>-->
		<!--<div style="padding: 1rem;">-->
		  <!--<div class="modal-dialog" role="document">-->
		    <!--<div class="modal-content">-->
		      <!--<div class="modal-header">-->
		        <!--<h5 class="modal-title">Modal title</h5>-->
		        <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
		          <!--<span aria-hidden="true">&times;</span>-->
		        <!--</button>-->
		      <!--</div>-->
		      <!--<div class="modal-body">-->
		        <!--<p>Modal body text goes here.</p>-->
		      <!--</div>-->
		      <!--<div class="modal-footer">-->
		        <!--<button type="button" class="btn btn-primary">Save changes</button>-->
		        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
		      <!--</div>-->
		    <!--</div>-->
		  <!--</div>-->
		<!--</div>-->
		<!--&lt;!&ndash; Spacing utilities&ndash;&gt;-->
		<!--<h2>Spacing utilities</h2>-->
		<!--<div style="padding: 1rem;">-->
		  <!--<div v-for="brand in ['success', 'info', 'warning', 'danger']" :key="brand" class="progress" style='margin-bottom: 1rem;'>-->
			  <!--<div class="progress-bar" :class="'bg-' + brand" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>-->
		  <!--</div>-->
		<!--</div>-->
	  <!--</div>-->
  <!--</div>-->
<!--</template>-->


<!--<style lang="scss">-->
  <!--@import './styles/custom-bootstrap.scss';-->
  <!--@import '../node_modules/bootstrap/scss/bootstrap.scss';-->
<!--</style>-->














<!--<template>-->
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<HelloWorld/>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import HelloWorld from './components/HelloWorld'-->

<!--export default {-->
  <!--name: 'App',-->
  <!--components: {-->
    <!--HelloWorld-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
  <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
   <!-- -webkit-font-smoothing: antialiased;-->
   <!-- -moz-osx-font-smoothing: grayscale;-->
  <!--text-align: center;-->
  <!--color: #2c3e50;-->
  <!--margin-top: 60px;-->
<!--}-->

<!--.button {-->
  <!--display: inline-block;-->
  <!--padding: 5px 15px;-->
  <!--font-size: 24px;-->
  <!--cursor: pointer;-->
  <!--text-align: center;-->
  <!--text-decoration: none;-->
  <!--outline: none;-->
  <!--color: #fff;-->
  <!--background-color: #4CAF50;-->
  <!--border: none;-->
  <!--border-radius: 15px;-->
  <!--box-shadow: 0 5px #999;-->
  <!--float: left;-->
<!--}-->

<!--.button:hover {background-color: #3e8e41}-->

<!--.button:active {-->
  <!--background-color: #3e8e41;-->
  <!--box-shadow: 0 5px #666;-->
  <!--transform: translateY(4px);-->
<!--}-->
 <!--.button-wrapper {-->
   <!--display: inline-block;-->
 <!--}-->

<!--</style>-->

