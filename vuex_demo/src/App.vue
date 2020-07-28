<template>
	<div>
		<my-addition></my-addition>
		<hr>
		<my-subtraction></my-subtraction>
	</div>
</template>

<script>
	// // //导入组件，可以注册为私有组件
	 import Addition from './components/Addition.vue'
	 import Subtraction from './components/Subtraction.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
	// 		//定义成私有组件
		'my-addition': Addition,
			'my-subtraction': Subtraction
		}
	 }
</script>

<style>

</style>
