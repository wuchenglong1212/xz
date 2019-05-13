<template>
  <div id="app">
    <!--<v-index></v-index>-->
    <router-view :myjson=myjson />
  </div>
</template>

<script>
//let consName = '射手座'
//let type = 'tomorrow'
//let key = '0db4a6757ed64712b97d60238e8c6bf1'
	export default {
		data(){
			return {
				myjson:""
			}
		},
		created() {
			console.log(1)
			this.$axios.get('home.json')
				.then(
					res => {
						this.myjson = res.data.data
						console.log(res.data.data)
					}
				)
//			this.$axios.get('/api/constellation/getAll?consName=' + consName + '&type=' + type + '&key=' + key)
//				.then((res) => {
//					let data = JSON.parse(res.request.responseText);
//					console.log(data);
////	      this.commit('increment', data)
//					}
//				)	
//					.catch(error => console.log(error))
		}
	}
</script>

<style lang="less">
</style>
