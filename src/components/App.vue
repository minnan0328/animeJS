<template>
	<div id="app">
		<Navigate></Navigate>
		<router-view id="main"></router-view>
		<footer id="footer">
			
		</footer>
	</div>
</template>

<script>
	import Navigate from './Navigate/Navigate';
	import moment from 'moment';
	export default {
		name: 'app',
		data(){
			return{}
		},
		components:{ Navigate },
		computed: {}
	}
</script>
<style lang="scss">
	@import './App.scss';
</style>
