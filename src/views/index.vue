<template>
	<div class="list-page">
		<h1>选择星座</h1>
		<ul>
			<li v-for="item in myjson" @click="tiaozhuang(item.Name,item.EnglishName,item.Time)">
				<img :src='item.Img' />
				<h3>{{item.Name}}</h3>
				<h5>{{item.EnglishName}}</h5>
				<p>({{item.Time}})</p>
			</li>
		</ul>
		<div id="">
			<img @click="toDetail" src="../assets/XX_03.png"/>
		</div>
	</div>
</template>

<style lang="less">
	.list-page {
		background-image: url(../assets/bg.png);
		background-size: 100%;
		color: #fefefe;
		h1 {
			padding-top: 1.08rem;
			padding-bottom: 1.43rem;
			font-size: 0.34rem;
			text-align: center;
		}
		ul {
			width: 7.50rem;
			margin: 0 auto;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			li {
				width: 2.1rem;
				text-align: center;
				margin-bottom: 0.37rem;
				img {
					width: 1.45rem;
					margin-bottom: 0.17rem;
				}
				h3 {
					font-size: 0.26rem;
					margin-bottom: 0.12rem;
				}
				h5 {
					font-size: 0.22rem;
					margin-bottom: 0.09rem;
				}
				p {
					font-size: 0.22rem;
				}
			}
		}
		div{
			text-align: center;
			img{
				width: 0.9rem;
				margin: 1.47rem 0 1.34rem 0;
			}
		}
	}
</style>

<script>
	export default {
		data() {
			return {}
		},
		props: ['myjson'],
		methods:{
			toDetail(){
				this.$router.push({path:'/detail'})
			},
			tiaozhuang(x,y,z){
				this.$router.push({path:'/detail',query:{name:x,ename:y,time:z}})
			}
		},
		components: {

		},
		created() {
			console.log(this.myjson)
		}
	}
</script>